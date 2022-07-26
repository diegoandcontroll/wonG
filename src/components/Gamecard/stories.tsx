import { Story, Meta } from '@storybook/react';
import Gamecard, { GamecardPropsTypes } from '.';
import items from './mock';
export default {
  title: 'Gamecard',
  component: Gamecard,
  args: { ...items },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' },
  },
} as Meta;

export const Default: Story<GamecardPropsTypes> = (args) => (
  <div style={{ width: '30rem' }}>
    <Gamecard {...args} />
  </div>
);
export const WithRibbon: Story<GamecardPropsTypes> = (args) => (
  <div style={{ width: '30rem' }}>
    <Gamecard {...args} />
  </div>
);
WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary',
};
