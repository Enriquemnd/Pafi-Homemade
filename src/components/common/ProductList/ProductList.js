import allProducts from "../../data/products";
import style from "./ProductList.module.css";

export const ProductList = ({ setShoppingCart }) => {
  const products = allProducts.slice(0, 6);

  const addProduct = (product) => {
    setShoppingCart((prev) => {
      let newObject = prev
      const prevProduct = prev.find((prod) => prod.id === product.id)
      const productPosition = prev.indexOf(prevProduct);

      if (prevProduct) {
        newObject[productPosition] = {
          ...prev[productPosition],
          count: prev[productPosition].count + 1,
        };
      } else {
        const dataProduct = {
          id: product.id,
          count: 1,
        };
        newObject = [...newObject, dataProduct];
      }
      console.log('newObject', newObject)
      return newObject
    });
  };

  return (
    <div className={style.container}>
      {products.map((product) => {
        return (
          <div className={style.productDiv}>
            <h3>{product.title}</h3>
            <img src={product.thumbnail} height="200px" width="200px" />
            <button onClick={() => addProduct(product)}>Agregar</button>
          </div>
        );
      })}
    </div>
  );
};
