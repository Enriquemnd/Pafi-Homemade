import { ProductList } from "../../common/ProductList/ProductList"
import style from "./FeaturedProducts.module.css"

export const FeaturedProducts = ({setShoppingCart}) => {
  return (
    <div className={style.container}>
      <h2>No sabes que pedir?</h2>
      <p>Prueba alguno de nuestros productos recomendados!</p>
      <ProductList setShoppingCart={setShoppingCart} />
    </div>
  )
}