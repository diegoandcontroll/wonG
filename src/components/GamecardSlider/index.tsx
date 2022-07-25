import Gamecard, { GamecardPropsTypes } from 'components/Gamecard';
import Slider, { SliderSettings } from 'components/Slider';
import { ArrowBackIos, ArrowForwardIos } from 'styled-icons/material-outlined';
import * as S from './styles';
export type GamecardSliderProps = {
  items: GamecardPropsTypes[];
  color?: 'white' | 'black';
};
const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: true,
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],
  nextArrow: <ArrowForwardIos aria-label="next games" />,
  prevArrow: <ArrowBackIos arial-label="previous games" />,
};
const GamecardSlider = ({ items, color = 'white' }: GamecardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <Gamecard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default GamecardSlider;
