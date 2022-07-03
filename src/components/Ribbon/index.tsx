import * as S from './styles';
export type Color = 'primary' | 'secondary';
export type Sizes = 'normal' | 'small';
export type RibbonProps = {
  children: React.ReactNode;
  color?: Color;
  size?: Sizes;
};
const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal',
}: RibbonProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
);

export default Ribbon;
