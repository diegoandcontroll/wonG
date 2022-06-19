import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Heading from '.';

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    //render component
    renderWithTheme(<Heading>Most Populars</Heading>);
    //element Testing
    // expect - assertion - comparation - expect to render label default white
    expect(screen.getByRole('heading', { name: /Most Populars/i })).toHaveStyle(
      {
        color: '#fafafa',
      },
    );
  });

  it('should render a black heading when color is passed', () => {
    //render component
    renderWithTheme(<Heading color="black">Most Populars</Heading>);
    //element Testing
    // expect - assertion - comparation - expect to render label default white
    expect(screen.getByRole('heading', { name: /Most Populars/i })).toHaveStyle(
      {
        color: '#030517',
      },
    );
  });

  it('should render a heading with a line to the left side', () => {
    //render component
    renderWithTheme(<Heading lineLeft>Most Populars</Heading>);
    //element Testing
    // expect - assertion - comparation - expect to render label default white
    expect(screen.getByRole('heading', { name: /Most Populars/i })).toHaveStyle(
      {
        'border-left': '0.7rem solid #3CD3C1',
      },
    );
  });

  it('should render a heading with a line to the bottom', () => {
    //render component
    renderWithTheme(<Heading lineBottom>Most Populars</Heading>);
    //element Testing
    // expect - assertion - comparation - expect to render label default white
    expect(
      screen.getByRole('heading', { name: /Most Populars/i }),
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after',
    });
  });
});
