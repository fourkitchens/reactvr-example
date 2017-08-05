import 'react-native';
import renderer from 'react-test-renderer';
import 'react-vr';
import React from 'react';
import Index from '../index.vr';

it('renders correctly', () => {
  renderer.create(<Index />);
});
