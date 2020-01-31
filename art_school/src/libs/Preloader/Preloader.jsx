import React from 'react';
import PropTypes from 'prop-types';

import './Preloader.scss';

/*
* Preloader
* Управлять внешним видом можно через props className (нужные можно добавить в Preloader.scss)
* */
const preloader = ({className}) => (
  <div className={className}>
    <div />
    <div />
  </div>
);

preloader.propTypes = {
  className: PropTypes.string,
};
preloader.defaultProps = {
  className: 'preloader-gallery',
};

export default preloader;
