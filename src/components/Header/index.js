import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';

import { Cart, Container } from './styles';
import logo from '../../assets/logo.png';

function Header({ cartSize }) {
  console.log('header', cartSize);
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Reduxshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
