import { screen } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import Radio from '.';

describe('<Radio />', () => {
  it('should render with label (white)', () => {
    const { container } = renderWithTheme(
      <Radio label="Radio" labelFor="check" value="anyValue" />,
    );

    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: theme.colors.white });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with label (black)', () => {
    renderWithTheme(<Radio label="Radio" labelColor="black" />);

    const label = screen.getByText('Radio');
    expect(label).toBeInTheDocument();
    expect(label).toHaveStyle({ color: theme.colors.black });
  });

  it('should render without label', () => {
    renderWithTheme(<Radio />);

    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument();
  });
});
