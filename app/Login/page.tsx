import Pagesbar from "@/components/PageBar/PageBar"
import {Button} from '@/components/ui/button'
import Brands from "@/components/Brands/Brands"
import Header from "@/components/Header/Header";
const login = () => {
  return (
    <>
    <Header />
    <Pagesbar
      pageName="Login"
      name1="Home"
      name2="Page"
      name3="Login"
      />

      <div className="w-full mt-24 flex justify-center items-center">

        <div  id="shadow" className="max12:w-[350px] max10:w-[400px] w-[500px] sm:w-[550px] h-[470px] bg-white pt-10 max12:px-4 max10:px-8 px-12 text-[#000000] ">
          <h1 className="text-center font-josefin text-[32px] font-[800]">Login</h1>
          <p className="text-center text-[#9096B2]">Please login using account detail bellow.</p>
          <div className="mt-8">
          <input type="text" placeholder='Email Address' className='border-[1px] border-[#C2C5E1] pl-3 w-[100%]  sm:w-[432px] h-[52px]' />
          <input type="text" placeholder="Password" className='border-[1px] border-[#C2C5E1] mt-6 pl-3  w-[100%]  sm:w-[432px] h-[52px]' />
          <p className="text-[#9096B2] mt-[10px] hover:underline cursor-pointer">Forgot your password?</p>
          </div>

          <div className="mt-6 w-full">
        <Button
              variant="outline"
              size={"default"}
              className=" font-josefin w-full"
            >
              Sign In
            </Button>
            </div>

            <div className="flex mt-6 text-[#9096B2] items-center justify-center">
            <p className=" text-center cursor-pointer hover:underline">Don’t have an Account?</p>
            <p className="hover:underline cursor-pointer">Create account</p>
            </div>
        </div>


      </div>

      <Brands />
    </>
  )
}

export default login