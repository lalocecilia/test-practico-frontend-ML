import React from 'react';
import PropTypes from 'prop-types';
import './Message.scss';

const Message = ({ text }) => (
  <div className="message">
    { text }
  </div>
);

Message.propTypes = {
  text: PropTypes.string.isRequired
};

export default Message;
