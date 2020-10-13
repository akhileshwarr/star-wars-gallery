import React, { useContext } from 'react';
import { ThemeContext } from '../../context/theme';
import PropTypes from 'prop-types';

export const Text = ({children }) => {

    const theme = useContext(ThemeContext);

    return (
        <span className = "genralSpan" style = {{color:theme.foreground}}>{children}</span>
    );
  };

  Text.propTypes = {
    children:  PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ])
  };
  
  Text.defaultProps = {
    children: null
  };