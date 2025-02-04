import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProductsAdder from './ProductsAdder'; // Update the path
import useCart from '../../context/CartContext'

// Mock the custom hook
jest.mock('../../context/CartContext', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Add to Cart Button in ProductsAdder', () => {
  const mockSetIncrement = jest.fn();

  beforeEach(() => {
    // Reset all mock implementations before each test
    jest.clearAllMocks();

    // Mock the hook with its implementation
    (useCart as jest.Mock).mockReturnValue({
      setIncrement: mockSetIncrement,
      cartItems: {},
    });
  });

  it('renders the Add to Cart button', () => {
    render(
      <ProductsAdder
        stock={10}
        Id={1}
        name="Test Product"
        price={100}
        image="test-image.jpg"
        colors="red"
      />
    );

    const button = screen.getByRole('button', { name: 'ADD TO CART' });
    expect(button).toBeInTheDocument();
  });


});
