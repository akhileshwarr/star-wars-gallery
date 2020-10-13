import React from 'react';
import renderer from 'react-test-renderer';
import { Container } from './Container.js';

test('/Container renders snapshot', () => {
    const tree = renderer.create(<Container> <br/> </Container>).toJSON();
    expect(tree).toMatchSnapshot();
  });
