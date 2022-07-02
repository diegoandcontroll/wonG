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
    renderWithTheme(<Heading lineLeft>Most Populars</Heading>);
    expect(screen.getByRole('heading', { name: /Most Populars/i })).toHaveStyle(
      {
        'border-left': '0.7rem solid #F231A5',
      },
    );
  });

  it('should render a heading with a line to the bottom', () => {
    renderWithTheme(<Heading lineBottom>Most Populars</Heading>);
    expect(
      screen.getByRole('heading', { name: /Most Populars/i }),
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after',
    });
  });

  it('should render a heading with small size', () => {
    renderWithTheme(<Heading size="small">Most Populars</Heading>);
    expect(
      screen.getByRole('heading', { name: /Most Populars/i }),
    ).toHaveStyleRule('font-size', '1.6rem');

    expect(
      screen.getByRole('heading', { name: /Most Populars/i }),
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after',
    });
  });

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Most Populars
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: /Most Populars/i });
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after',
    });
  });

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Most Populars
      </Heading>,
    );

    const heading = screen.getByRole('heading', { name: /Most Populars/i });
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after',
    });
  });
});
