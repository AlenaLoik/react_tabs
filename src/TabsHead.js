import React from 'react';
import './TabsHead.css';
import PropTypes from 'prop-types';

export const TabsHead = ({ title, onTabSelected, selectedTab }) => (
  <button
    type="button"
    className={(selectedTab === title) ? 'button selected' : 'button'}
    onClick={() => {
      onTabSelected(title);
    }}
  >
    {title}
  </button>
);

TabsHead.propTypes = {
  title: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
