import React from 'react';
import './TabsBody.css';
import PropTypes from 'prop-types';

export const TabsBody = ({ text }) => (
  <section className="text">{text}</section>
);

TabsBody.propTypes = {
  text: PropTypes.string.isRequired,
};
