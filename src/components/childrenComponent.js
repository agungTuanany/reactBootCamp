import React from 'react'
import PropTypes from 'prop-types'


const propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  author: PropTypes.string.isRequired
};

const defaultProps = {
  title: "Default title of App"
};

const Children = (props) => {
  return (
    <div>
      <h1>children title:{props.title}</h1>
      <h1>children author:{props.author}</h1>
      <h2 onClick={props.onClick}>CLICK-ME</h2>
    </div>
  )
}

Children.propTypes = propTypes;
Children.defaultProps = defaultProps;

export default Children
