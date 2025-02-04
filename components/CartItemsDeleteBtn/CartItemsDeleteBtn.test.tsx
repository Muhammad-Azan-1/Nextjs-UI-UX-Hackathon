import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import DeleteItemsBtn from './CartItemsDeleteBtn';
import useCart from '../../context/CartContext'

// Mock the useCart context
jest.mock('../../context/CartContext', () => ({
    __esModule: true,
    default: jest.fn(),
  }));
  
  
  describe('DeleteItemsBtn', () => {
    it('should call deleteItem with correct arguments when clicked', () => {
      // Access the mocked function
      const deleteItemMock = jest.fn();
    (useCart as jest.Mock).mockReturnValue({
      deleteItem: deleteItemMock, // Mock the deleteItem function
    });
  
    const { getByAltText } = render(<DeleteItemsBtn id={1} color="red" />);

    // Find the button by its alt text
    const crossIcon = getByAltText('cross Icon');

    // Simulate the click event
    fireEvent.click(crossIcon);

    // Assertions
    expect(deleteItemMock).toHaveBeenCalledWith(1, 'red');
    expect(deleteItemMock).toHaveBeenCalledTimes(1);

    });
  });