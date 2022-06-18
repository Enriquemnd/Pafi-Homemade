import { useState } from "react";
import Cart from "./components/common/Cart/Cart";
import { Navbar } from "./components/common/Navbar/Navbar";
import { ContactUs } from "./components/sections/ContactUs/ContactUs";
import { FeaturedProducts } from "./components/sections/FeaturedProducts/FeaturedProducts";
import { Hero } from "./components/sections/Hero/Hero";

const App = () => {
  const [shoppingCart, setShoppingCart] = useState([])
  console.log('shoppingCart', shoppingCart)


  const [isCartOpen, setIsCartOpen] = useState(true);

  const toggleCartState = () => {
    setIsCartOpen(!isCartOpen)
  }
  return (
    <div className="App">
      <Navbar
        toggleCartState={toggleCartState}
      />
      <Hero />
      <FeaturedProducts setShoppingCart={setShoppingCart} />
      <ContactUs />
      <Cart
        isOpen={isCartOpen}
        shoppingCart={shoppingCart}
      />

    </div>
  );
}

export default App;
