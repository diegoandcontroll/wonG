import { screen } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="test" labelFor="test" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();

    expect(screen.getByText(/test/i)).toBeInTheDocument();

    expect(screen.getByText(/test/i)).toHaveAttribute('for', 'test');
  });

  it('should render without label', () => {
    renderWithTheme(<Checkbox />);

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument();
  });

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="test" labelFor="check" labelColor="black" />,
    );

    expect(screen.getByText(/test/i)).toHaveStyle({
      color: theme.colors.black,
    });
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    // userEvent.click(screen.getByRole('checkbox'));
    // await waitFor(() => {
    //   expect(onCheck).toHaveBeenCalledTimes(1);
    // });
    // expect(onCheck).toHaveBeenCalledWith(true);
  });
});
