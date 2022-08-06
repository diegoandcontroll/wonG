import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react';
import * as S from './styles';
type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: ReactNode;
  as?: React.ElementType;
} & ButtonTypes;
const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    size = 'medium',
    fullWidth = false,
    icon,
    minimal = false,
    ...props
  },
  ref,
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    ref={ref}
    minimal={minimal}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default forwardRef(Button);
