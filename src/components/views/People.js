import React from 'react';
  import { Container } from '../atoms/Container'
import { useSelector } from "react-redux";
import { Card } from '../molecules/Card'
import { Link } from 'react-router-dom';
import {  ThemeSwitch } from '../atoms/ThemeSwitch';

import Grid from '@material-ui/core/Grid';
import { Text } from '../atoms/Text'
import {  SWButton } from '../atoms/SWButton'

import PropTypes from 'prop-types';


export const People =  ({checked,toggleTheme}) => {
  const peopleState = useSelector(state => state.peopleState)
    return <Container>
              <Grid container spacing={3} style = {{padding : "5%"}}>
                  <Grid item xs={12} style = {{display:'grid'}}>
                    <div style = {{float:'right'}}>
                      <Text> toggle theme </Text> 
                      <ThemeSwitch checked = {checked} toggleTheme = {toggleTheme} />
                    </div>
                  </Grid> 
                  <Grid item xs={12} style = {{display:'grid'}}>
                      <Link to = '/home' style = {{justifySelf:'center'}} >
                            <SWButton > 
                                <Text>STAR WARS HOME</Text>
                            </SWButton>
                        </Link>
                  </Grid> 
                  { peopleState.results.map((person) => 
                    <Grid item xs={3}>
                        <Card person = {person}/>
                      </Grid>
                      )}
                </Grid>     
           </Container>  
  };
  
  People.propTypes = {
    checked: PropTypes.bool.isRequired,
    toggleTheme: PropTypes.func.isRequired
  };
  
  People.defaultProps = {
    checked: false,
    toggleTheme: undefined 
  };
  