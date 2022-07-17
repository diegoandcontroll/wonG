import { Story, Meta } from '@storybook/react';
import Gamecard, { GamecardPropsTypes } from '.';

export default {
  title: 'Gamecard',
  component: Gamecard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00',
  },
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
