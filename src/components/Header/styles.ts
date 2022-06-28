import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
    justify-content: space-between;
  `}
`;

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`;
export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`;

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;
type HeaderFullProps = {
  isOpen: boolean;
};

export const NavFull = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
			margin-left: ${theme.spacings.small};
		`};
  `};
`;
export const HeaderNav = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
  `}
`;
export const NavFullLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`;

export const HeaderFull = styled.nav<HeaderFullProps>`
  ${({ isOpen, theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: ${isOpen ? 1 : 0};
    background: ${theme.colors.white};
    position: absolute;
    transition: opacity 0.3s ease-in-out;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: 100vh;
    pointer-events: ${isOpen ? 'all' : 'none'};

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${NavFull} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }
    ${NavFullLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`;

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};
    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
    cursor: pointer;
  `}
`;
