import { Story, Meta } from '@storybook/react';
import Button from '.';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: '',
    },
  },
} as unknown as Meta;

export const Default: Story = (args) => <Button {...args} />;

Default.args = {
  children: 'Test',
};

export const withIcon: Story = (args) => <Button {...args} />;

withIcon.args = {
  size: 'small',
  children: 'Test',
  icon: <AddShoppingCart />,
};
