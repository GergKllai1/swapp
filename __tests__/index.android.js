
import 'react-native';
import React from 'react';
import Characters from '../src/Characters';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Characters />
  );
});