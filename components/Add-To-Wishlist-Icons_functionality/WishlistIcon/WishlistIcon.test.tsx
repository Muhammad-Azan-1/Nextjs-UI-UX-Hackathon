import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import  HeartIcon from './WihslistIcon'; // Update the path
import useWishlist from '../../../context/WishListContextProvider'

// Mock the custom hook
jest.mock('../../../context/WishListContextProvider', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Add to Cart Button in ProductsAdder', () => {
  const mockSetIncrement = jest.fn();

  beforeEach(() => {
    // Reset all mock implementations before each test
    jest.clearAllMocks();

    // Mock the hook with its implementation
    (useWishlist as jest.Mock).mockReturnValue({
      setIncrement: mockSetIncrement,
      cartItems: {},
    });
  });

  it('renders the Add to Cart button', () => {
    render(
      < HeartIcon
        stock={10}
        id={1}
        name="Test Product"
        price={100}
        image="test-image.jpg"
        slug='Cantilever chair'
        color="red"/>
    );

    const heartIcon = screen.getByTestId('wishlist-icon'); // Use a test ID
    expect(heartIcon).toBeInTheDocument();
    
  });


});

