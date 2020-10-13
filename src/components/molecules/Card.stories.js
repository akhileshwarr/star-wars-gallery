import React from 'react';

import { Card } from './Card';

import { ThemeContext, themes } from '../../context/theme';
import { Provider } from 'react-redux'
import rootReducer from '../../store/reducers'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'

const store = createStore(rootReducer, applyMiddleware(thunk))
export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => 
      <Provider store={store}>
         <ThemeContext.Provider value = {themes.dark} >
              <Card {...args} />
          </ThemeContext.Provider>
      </Provider>;

export const primary = Template.bind({});
primary.args = {
  primary:true,
  label: 'Card',
   person : {
     name: "sample",
     height: "sample",
     gender: "gender",
     films:["filim1"],
     url:"asdf"
   }
};


