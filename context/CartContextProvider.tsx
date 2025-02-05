"use client";
import { useState, useMemo } from "react";
import { CartContext } from "./CartContext";
import { useEffect } from "react";

import { Quantity } from "@/components/Utilits/Helper";
import { useCallback } from "react";

// cartItems : {
//1:{  ,name , quantity , stock , image , price , value}
//}

// prev:{
//     [id]: { /* object properties */ }
//   }

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setcartItems] = useState<Quantity>({});

  
  useEffect(() => {
    if (typeof window !== "undefined") {  // Ensure this runs only in the browser
      const storedAmount = sessionStorage.getItem("amountInLocal");
      if(storedAmount){
        setcartItems(JSON.parse(storedAmount));
       
       
      }
    }
  }, []); 


  const [id, setId] = useState<number>(0);

  useEffect(() => {
  // The main reason you're adding this check is to prevent storing empty objects in sessionStorage
  if(typeof window !== "undefined"){
      if (Object.keys(cartItems).length > 0) {
        sessionStorage.setItem("amountInLocal", JSON.stringify(cartItems));
      }
    }
    
  }, [cartItems]);



  const setDecrement = useCallback((id: number, color: string) => {
    setcartItems((prev: Quantity) => {
      const key = `${id}-${color}`;
      setId(id);

      const currentAmount: number = prev[key]?.value || 0;
      const updatedObj = {
        ...prev,
        [key]: {
          ...prev[key],
          value: currentAmount > 0 ? currentAmount - 1 : 0,
        },
      };

      if (updatedObj[key].value === 0) {
        delete updatedObj[key];
      }

      return updatedObj;
    });
  }, []);

  

  const setIncrement = useCallback(
    (
      stock: number,
      id: number,
      name: string,
      price: number,
      image: string,
      color: string,
      slug?: string
    ) => {
      setcartItems((prev: Quantity) => {
        setId(id);
        const key = `${id}-${color}`;

        const currentAmount: number = prev[key]?.value || 0;

        if (currentAmount) {
          const newAmount: number =
            currentAmount < stock ? currentAmount + 1 : stock;

          return {
            ...prev,
            [key]: {
              ...prev[key],
              value: newAmount,
            },
          };
        } else {
          return {
            ...prev,
            [key]: {
              value: 1,
              name: name,
              price: price,
              image: image,
              color: color,
              id: id,
              stock: stock,
            }, // for each id a new object created 1:{ name , price , image , id , stock , value  }
          };
        }
      });
    },
    []
  );

  function deleteItem(id: number, color: string) {
    const key = `${id}-${color}`;
    setcartItems((prev: Quantity) => {
      if (key) {
        delete prev[key];
      }

      return {
        ...prev,
      };
    });
  }

  const contextValue = useMemo(
    () => ({
      cartItems,
      setIncrement,
      setDecrement,
      setcartItems,
    }),
    [cartItems, setIncrement, setDecrement]
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setIncrement,
        setDecrement,
        setcartItems,
        id,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
