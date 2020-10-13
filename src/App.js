import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Home } from './components/views/Home' 
import { People } from './components/views/People' 
import { ThemeContext, themes } from './context/theme';

import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from './store/actions'
const App = () => {

  const checked = useSelector(state => state.themeState);
  const dispatch = useDispatch();
  const toggleThemeHandler  = (e,value) => {
    dispatch(toggleTheme(value))
  }
  
  return(
    <ThemeContext.Provider value = {checked ? themes.light : themes.dark}>
      <HashRouter>
        <Switch>
          <Route exact path="/" render={()=><Redirect to="/home"/>}/>
          <Route path="/home" render = {(props)=> <Home  checked = {checked} toggleTheme = {toggleThemeHandler} {...props}/>} />
          <Route path="/people" render = {(props)=> <People  checked = {checked} toggleTheme = {toggleThemeHandler} {...props}/>} />
        </Switch> 
      </HashRouter>
  </ThemeContext.Provider>
  )
}

export default App;
