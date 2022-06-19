import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Logo from '.';

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    //render component
    renderWithTheme(<Logo />);
    //element Testing
    // expect - assertion - comparation - expect to render label default white
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#fafafa',
    });
  });

  it('should render a black label when color is passed', () => {
    //render component
    renderWithTheme(<Logo color="black" />);
    //element Testing
    // expect - assertion - comparation - expect to render label default white
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517',
    });
  });
  it('should render a normal logo when size is default', () => {
    //render component
    renderWithTheme(<Logo />);
    //element Testing
    // expect - assertion - comparation - expect to render label default white
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem',
    });
  });
  it('should render a bigger logo', () => {
    //render component
    renderWithTheme(<Logo size="large" />);
    //element Testing
    // expect - assertion - comparation - expect to render label default white
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem',
    });
  });

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)',
      },
    );
  });
});
