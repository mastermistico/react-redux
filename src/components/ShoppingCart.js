import React from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';

import { removeToCart } from '../actionsCreators';
import { connect } from 'react-redux';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


const ShoppingCart = ({cart,removeFromCart}) => {

    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <tbody>
            {cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      </Panel>
    )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(product) {
      dispatch(removeToCart(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
