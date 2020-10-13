import React, { useCallback } from 'react';
import { Container } from '../atoms/Container';
import { Text } from '../atoms/Text';
import {  ThemeSwitch } from '../atoms/ThemeSwitch';
import {  SWButton } from '../atoms/SWButton';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { fetchPeople } from "../../store/actions"

export const Home = ({checked,toggleTheme}) => {
    const dispatch = useDispatch()
    const handleSWClick = useCallback(
        () => dispatch(fetchPeople()),
        [dispatch]
      )
    return (
        <Container>
             <Grid container spacing={3} style = {{padding : "5%"}}>
                <Grid item xs={12}>
                    <div >
                    <Text> toggle theme </Text> 
                    <ThemeSwitch checked = {checked} toggleTheme = {toggleTheme} />
                    </div>
                </Grid>
                <Grid item xs={12} style = {{display:'grid'}}>
                    <Link to = '/people' style = {{justifySelf:'center'}} >
                        <SWButton handleSWClick = {handleSWClick}> 
                            <Text>STAR WARS GALLERY</Text>
                        </SWButton>
                    </Link>
                </Grid>
             </Grid>
        </Container>
    );
  };
  
  Home.propTypes = {
    checked: PropTypes.bool.isRequired,
    toggleTheme: PropTypes.func.isRequired
  };
  
  Home.defaultProps = {
    checked: false,
    toggleTheme: undefined 
  };
  