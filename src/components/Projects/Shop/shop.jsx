import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShopItem from './shop_item';

class Shop extends Component {
  render() {
    return (
      <section className="container">
        <div style={{margin: '30px'}}className="flex-box-between">
          <h1 style={{opacity: 0.6, margin: '30px'}}>Online baby shop</h1>
          <div className="shop-cart-order">
            <Link to="/order"><i style={{fontSize: '40px', color: '#ef8d32'}} className="fas fa-cart-arrow-down"></i></Link>
            <span className="shop-circle-order">{this.props.order.length}</span>
          </div>
        </div>
        <div className="row">
        {this.props.items.map(item => {
          return <ShopItem key={item.id} {...item} function={this.props.addInCart}/>
         })
        }
        </div>
      </section>
    );
  }
}

export default Shop;
