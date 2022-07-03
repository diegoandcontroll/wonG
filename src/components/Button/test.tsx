import { screen } from '@testing-library/react';
import { AddShoppingCart } from 'styled-icons/material-outlined';
import { renderWithTheme } from 'utils/tests/helpers';

import Button from '.';
describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Test</Button>);
    expect(screen.getByRole('button', { name: /Test/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem',
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Test</Button>);
    expect(screen.getByRole('button', { name: /Test/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
    });
  });

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Test</Button>);
    expect(screen.getByRole('button', { name: /Test/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem',
    });
  });
  it('should render a button fullWidth', () => {
    renderWithTheme(<Button fullWidth>Test</Button>);
    expect(screen.getByRole('button', { name: /Test/i })).toHaveStyle({
      width: '100%',
    });
  });
  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>,
    );
    expect(screen.getByText(/Buy now/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render BUtton as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>,
    );
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link',
    );
  });
});
