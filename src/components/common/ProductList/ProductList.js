import allProducts from '../../data/products'
import style from './ProductList.module.css'

export const ProductList = () => {
  const products = allProducts.slice(0,6);
  console.log(products)
  return (
    <div className={style.container}>
      {products.map(product => {
        return (
          <div className={style.productDiv}>
            <h3>{product.title}</h3>
            <img src={product.thumbnail} height = '200px' width = "200px" />
          </div>
        )
      })}
    </div>
  )
}