import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBox.scss';

const SearchBox = ({ query = '' }) => {
  const [data, setData] = useState(query);
  const onClickSearch = (e) => {
    if (data.trim() !== '') {
      window.open('/items?search=' + data, '_self');
    }
    e.preventDefault();
  };

  return (
    <div className="search-box">
      <form className="container-search" onSubmit={onClickSearch}>
        <div className="container-img-search">
          <img
            id="id-img-search"
            className="img-search"
            src="/app/statics/images/Logo_ML.png"
            alt="Mercado Libre"
            onClick={() => window.open('/', '_self')}
          />
        </div>
        <div className="container-input-search">
          <input
            type="text"
            className="input-search"
            placeholder="Nunca dejes de buscar"
            value={data}
            onChange={e => setData(e.target.value)}
          />
          <button type="submit" className="btn-search">
            <img
              src="/app/statics/images/ic_Search.png"
              alt="Buscar"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  query: PropTypes.string
};

export default SearchBox;
