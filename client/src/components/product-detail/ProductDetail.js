import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import SearchBox from '../search-box/SearchBox';
import Message from '../message/Message';
import { fetchGetDetail } from '../../api';
import { conditionText, currencies } from '../../utils';
import './ProductDetail.scss';

const ProductDetail = ({ search = '', categories = [] }) => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  const detail = async (i) => {
    setData({});
    setError(false);
    const { response } = await fetchGetDetail(i);
    if (response) {
      setData(response);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    detail(id).then();
  }, []);

  return (
    <>
      <SearchBox query={search} />
      <div className="product-detail">
        <div className="container-detail">
          {
            !error && data && data.item && (
              <>
                <Breadcrumb items={categories} />
                <div className="detail">
                  <div className="row-1">
                    <div className="container-image">
                      <img alt={data.item.title} className="image" src={data.item.picture} />
                    </div>
                    <div className="container-text">
                      <div className="text">
                        <div className="condition">
                          <span>
                            { conditionText(data.item.condition) }
                            <span> - </span>
                            { data.item.sold_quantity }
                            <span> vendidos</span>
                          </span>
                        </div>
                        <h2 className="title">
                          { data.item.title }
                        </h2>
                        <div className="price">
                          <span>{ currencies(data.item.price.currency) }</span>
                          &nbsp;
                          <span>{ data.item.price.amount }</span>
                          { data.item.price.decimals !== 0 && <span className="decimals">{ data.item.price.decimals }</span> }
                        </div>
                        <button type="button" className="buy">Comprar</button>
                      </div>
                    </div>
                  </div>
                  <div className="row-2">
                    <h2 className="title-descriptions">Descripción del producto</h2>
                    <p className="descriptions">
                      { data.item.description }
                    </p>
                  </div>
                </div>
              </>
            )
          }
          {
            error && (
              <Message text="Ocurrió un error, por favor verifique que el identificador sea correcto e intente nuevamente." />
            )
          }
        </div>
      </div>
    </>
  );
};

ProductDetail.propTypes = {
  search: PropTypes.string,
  categories: PropTypes.array
};

export default ProductDetail;
