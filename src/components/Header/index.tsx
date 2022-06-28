import { useState } from 'react';
import * as S from './styles';
import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart';
import { Search } from '@styled-icons/material-outlined/Search';
import { Menu2 } from '@styled-icons/remix-line/Menu2';
import Logo from 'components/Logo';
import { Close } from '@styled-icons/material-outlined/Close';
import Button from 'components/Button';
import MediaMatch from 'components/MediaMatch';
export type HeaderProps = {
  username?: string;
};
const Header = ({ username }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <Menu2 aria-label="open menu" />
        </S.IconWrapper>
      </MediaMatch>
      <S.LogoWrapper aria-label="logo">
        <Logo hideOnMobile />
      </S.LogoWrapper>
      <MediaMatch greaterThan="medium">
        <S.NavFull>
          <S.NavFullLink href="#">Home</S.NavFullLink>
          <S.NavFullLink href="#">Explore</S.NavFullLink>
        </S.NavFull>
      </MediaMatch>
      <S.MenuGroup>
        <S.IconWrapper>
          <Search aria-label="search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCart aria-label="shopping" />
        </S.IconWrapper>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Sign in</Button>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.HeaderFull aria-hidden={!isOpen} isOpen={isOpen}>
        <Close aria-label="close menu" onClick={() => setIsOpen(false)} />
        <S.NavFull>
          <S.NavFullLink href="#">Home</S.NavFullLink>
          <S.NavFullLink href="#">Store</S.NavFullLink>

          {!!username && (
            <>
              <S.NavFullLink href="#">My account</S.NavFullLink>
              <S.NavFullLink href="#">Wishlist</S.NavFullLink>
            </>
          )}
        </S.NavFull>
        {!username && (
          <S.RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <S.CreateAccount>Sign Up</S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.HeaderFull>
    </S.Wrapper>
  );
};

export default Header;
