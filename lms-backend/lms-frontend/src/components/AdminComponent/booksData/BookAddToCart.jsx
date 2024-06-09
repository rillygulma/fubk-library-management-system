import { useState } from 'react';
import AllBooks from './AllBooks';
import Cart from './CartCount';

const BookAddToCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart(prevCart => [...prevCart, book]);
  };

  return (
    <div>
      <AllBooks addToCart={addToCart} cart={cart} />
      <Cart cart={cart} />
    </div>
  );
};

export default BookAddToCart;