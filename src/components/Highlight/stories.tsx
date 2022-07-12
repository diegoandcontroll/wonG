import { Story, Meta } from '@storybook/react';
import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it`s back',
    subtitle: `Come see Jhon${'`'}s new adventures`,
    buttonLabel: 'Buy now',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLink: '/drd2',
  },
} as Meta;

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png',
};
