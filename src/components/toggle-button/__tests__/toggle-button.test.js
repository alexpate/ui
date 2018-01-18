/* @flow */
/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'emotion-theming';

import ToggleButton from '../toggle-button';
import theme from '../../theme';

describe('ToggleButton', () => {
  test('should render shallow component ok', () => {
    const element = renderer
      .create(
        <ThemeProvider theme={theme}>
          <ToggleButton />
        </ThemeProvider>
      )
      .toJSON();
    expect(element).toMatchSnapshot();
  });
});