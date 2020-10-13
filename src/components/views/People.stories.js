// import React from 'react';
// import { Container } from '../atoms/Container'
// import { Text } from '../atoms/Text'
// import {  ThemeSwitch } from '../atoms/ThemeSwitch'
// import {  SWButton } from '../atoms/SWButton'

// import Grid from '@material-ui/core/Grid';
// import PropTypes from 'prop-types';

// export const Home = ({checked,toggleTheme}) => {
//     return (
//         <Container>
//              <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                     <div style = {{float:'right'}}>
//                     <Text> toggle theme </Text> 
//                     <ThemeSwitch checked = {checked} toggleTheme = {toggleTheme} />
//                     </div>
//                 </Grid>
//                 <Grid item xs={12} style = {{display:'grid'}}>
//                     <SWButton style = {{justifySelf:'center'}}> 
//                         <Text>STAR WARS GALLER</Text>
//                     </SWButton>
//                 </Grid>
//              </Grid>
//         </Container>
//     );
//   };
  
//   Home.propTypes = {
//     checked: PropTypes.bool.isRequired,
//     toggleTheme: PropTypes.func.isRequired
//   };
  
//   Home.defaultProps = {
//     checked: false,
//     toggleTheme: undefined 
//   };
  