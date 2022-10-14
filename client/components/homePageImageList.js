import React from 'react'
import {fetchProducts} from '../store/products'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    const products = this.props.products
    return (
      <div>
        <h1>All Products</h1>
        <h2>List of Products:</h2>
        <div id="all-products-wrapper">
          {products.map(product => {
            return (
              <div className="all-product-list" key={product.id}>
                <div className="all-product-item">
                  <Link
                    className="product-name-image"
                    to={`/products/${product.id}`}
                  >
                    <h2>{product.name}</h2>
                    <img src={product.imageUrl} />
                  </Link>
                  <p>{product.description}</p>
                  <h3>Price: {product.price}</h3>
                </div>
              </div>
            )
          })}
        </div>
        <div />
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    getProducts: () => {
      return dispatch(fetchProducts())
    }
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
