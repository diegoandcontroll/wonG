/* eslint-disable @next/next/no-img-element */
import Button from 'components/Button';
import Ribbon, { Color, Sizes } from 'components/Ribbon';
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
} from 'styled-icons/material-outlined';
import * as S from './styles';
export type GamecardPropsTypes = {
  title: string;
  developer: string;
  img: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: React.ReactNode;
  ribbonColor?: Color;
  ribbonSize?: Sizes;
};
const Gamecard = ({
  img,
  developer,
  price,
  title,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
}: GamecardPropsTypes) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove to Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>
      <S.Buybox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.Buybox>
    </S.Content>
  </S.Wrapper>
);

export default Gamecard;
