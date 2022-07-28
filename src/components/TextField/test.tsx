import { screen } from '@testing-library/react';
import { Email } from 'styled-icons/material-outlined';
import { renderWithTheme } from 'utils/tests/helpers';

import TextField from '.';

describe('<TextField />', () => {
  it('Renders with Label', () => {
    renderWithTheme(<TextField label="Label" name="Label" />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('Renders without Label', () => {
    renderWithTheme(<TextField />);

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument();
  });

  it('Renders with placeholder', () => {
    renderWithTheme(<TextField placeholder="hey you" />);

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument();
  });

  it('Renders with Icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('Renders with Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />,
    );

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 });
  });
});
