import React from 'react';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';

export const ThemeSwitch = ({checked, toggleTheme }) => {

    return (
        <Switch
        checked={checked}
        onChange={toggleTheme}
        color="primary"
        name="themeToggle"
        inputProps={{ 'aria-label': 'theme selector' }}
      />
    );
  };

  ThemeSwitch.propTypes = {
    checked: PropTypes.bool.isRequired,
    toggleTheme: PropTypes.func.isRequired
  };
  
  ThemeSwitch.defaultProps = {
    checked: false,
    toggleTheme: ()=>{} 
  };
  