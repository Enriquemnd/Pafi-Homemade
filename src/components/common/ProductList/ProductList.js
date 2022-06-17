import allProducts from '../../data/products'

export const ProductList = () => {
  const products = allProducts.slice(0,6);
  console.log(products)
  return (
    <div>
      {products.map(product => {
        return (
          <div>
            <h3>{product.title}</h3>
            <img src={product.thumbnail} />
          </div>
        )
      })}
    </div>
  )
}