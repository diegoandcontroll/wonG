import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Ribbon from '.';

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Test</Ribbon>);

    expect(screen.getByText(/Test/i)).toBeInTheDocument();
  });

  it('should render the primary color', () => {
    renderWithTheme(<Ribbon>Test</Ribbon>);

    expect(screen.getByText(/Test/i)).toHaveStyle({
      backgroundColor: '#F231A5',
    });
  });

  it('should render the secondary color', () => {
    renderWithTheme(<Ribbon color="secondary">Test</Ribbon>);

    expect(screen.getByText(/Test/i)).toHaveStyle({
      backgroundColor: '#3CD3C1',
    });
  });

  it('should render the normal size as default', () => {
    renderWithTheme(<Ribbon>Test</Ribbon>);

    expect(screen.getByText(/Test/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem',
    });
  });

  it('should render the small size', () => {
    renderWithTheme(<Ribbon size="small">Test</Ribbon>);

    expect(screen.getByText(/Test/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem',
    });
  });
});
