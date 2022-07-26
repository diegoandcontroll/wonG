import { Story, Meta } from '@storybook/react';
import { GamecardPropsTypes } from 'components/Gamecard';
import GamecardSlider from '.';
import items from './mock';
export default {
  title: 'GamecardSlider',
  component: GamecardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Default: Story<GamecardPropsTypes[]> = (args) => (
  <GamecardSlider items={args} {...args} />
);
