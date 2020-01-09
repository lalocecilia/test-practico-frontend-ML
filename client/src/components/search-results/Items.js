import React from 'react';
import PropTypes from 'prop-types';
import { currencies } from '../../utils';

const Items = ({ items }) => (
  <ul className="results">
    {
      items && items.map((item, idx) => (
        <li key={item.id} onClick={() => window.open('/items/' + item.id, '_self')}>
          <div className="item-result">
            <div className="container-image-item">
              <img alt={item.title} className="image-item" src={item.picture} />
            </div>
            <div className="text-item">
              <div className="price-shipping">
                <span>{ currencies(item.price.currency) }</span>
                &nbsp;
                <span>{ item.price.amount }</span>
                { item.price.decimals !== 0 && <span className="decimals">{ item.price.decimals }</span> }
                {
                  item.free_shipping && (
                    <img
                      className="img-free-shipping"
                      src="/app/statics/images/ic_shipping.png"
                      alt="Envío gratis"
                    />
                  )
                }
              </div>
              <div className="address">
                { item.address }
              </div>
              <h2 className="title">
                { item.title }
              </h2>
            </div>
          </div>
          { idx !== 3 && <div className="spacer" /> }
        </li>
      ))
    }
  </ul>
);

Items.propTypes = {
  items: PropTypes.array
};

export default Items;
