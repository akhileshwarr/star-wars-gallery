import Button from '@material-ui/core/Button';
import React from 'react';
import PropTypes from 'prop-types';

export const SWButton = ({
    children,
    style = {},
    handleSWClick = () => {},
    disabled = false
 }) => {

    return (
        <Button
        size="large"
        variant="contained"
        color="primary"
        style = {{...style}}
        onClick = {handleSWClick}
        disabled = {disabled}
      >
          {children}
          </Button>
    );
  };

  SWButton.propTypes = {
    children: PropTypes.element,
    style: PropTypes.object,
    handleSWClick:PropTypes.func,
    disabled: PropTypes.bool
  };
  
  SWButton.defaultProps = {
    children: null,
    style: {},
    handleSWClick:null,
    disabled: false

  };
  