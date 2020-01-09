import React from 'react';
import PropTypes from 'prop-types';
import './Breadcrumb.scss';

const Breadcrumb = ({ items = [] }) => (
  <div className="breadcrumb">
    {
      items && items.map((c, idx) => (
        <span key={c}>
          {c}
          {idx !== items.length - 1 && <span> &#62; </span>}
        </span>
      ))
    }
  </div>
);

Breadcrumb.propTypes = {
  items: PropTypes.array
};

export default Breadcrumb;
