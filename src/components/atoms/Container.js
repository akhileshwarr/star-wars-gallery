import React, { useContext } from 'react';
import { ThemeContext } from '../../context/theme';
import MetContainer from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import './container.css';

export const Container = ({children}) => {

    const theme = useContext(ThemeContext);

    return (
        <MetContainer className = 'basic-container-max-width'>
            <Typography component="div" style={{ backgroundColor: theme.background , minHeight: '102vh'  }} >
                {children}
            </Typography>
      </MetContainer>
    );
  };
  
  Container.propTypes = {
    children: PropTypes.array

  };
  
  Container.defaultProps = {
    children: []
  };
  