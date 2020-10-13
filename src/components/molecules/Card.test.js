import React from 'react';
import renderer from 'react-test-renderer';
import { Card } from './Card.js';
import { Provider } from 'react-redux'
import rootReducer from '../../store/reducers'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'

const store = createStore(rootReducer, applyMiddleware(thunk))

test('/Card renders snapshot', () => {
    const tree = renderer.create(<Provider store={store}>
           <Card person = {{
                name: "sample",
                height: "sample",
                gender: "gender",
                films:["filim1"],
                url:"asdf"
              }} />
   </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
