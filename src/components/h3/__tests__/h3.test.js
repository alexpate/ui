/* @flow */
/* eslint-env jest */
import * as React from 'react';
import {sheet} from 'emotion';
import serializer from 'jest-glamor-react';
import renderer from 'react-test-renderer';
import {ThemeProvider} from 'emotion-theming';

import theme from 'components/theme';
import H3 from 'components/h3';

expect.addSnapshotSerializer(serializer(sheet));

describe('H3', () => {
  const defaultProps = {};
  const create = (props = {}) =>
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <H3 {...defaultProps} {...props}>
            An H3 Tag
          </H3>
        </ThemeProvider>
      )
      .toJSON();

  test('should render shallow component ok', () => {
    const element = create();
    expect(element).toMatchSnapshot();
  });

  test('should allow weight to be overridden', () => {
    const element = create({
      weight: 'light',
    });
    expect(element).toMatchSnapshot();
  });
});