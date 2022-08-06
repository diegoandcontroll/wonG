import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import FormSignUp from '.';

describe('<FormSignUp />', () => {
  it('should render the heading', () => {
    renderWithTheme(<FormSignUp />);

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument();
  });
});
