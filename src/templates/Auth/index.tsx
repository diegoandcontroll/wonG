import Heading from 'components/Heading';
import Logo from 'components/Logo';
import Image from 'next/image';
import Link from 'next/link';
import * as S from './styles';
export type AuthProps = {
  title: string;
  children: React.ReactNode;
};
const Auth = ({ children, title }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Image
        src="/img/auth-bg.jpg"
        alt="Won Games Auth Page"
        layout="fill"
        objectFit="cover"
      />
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>
        <div>
          <Heading>All your favorite games in one place</Heading>
          <S.Subtitle>
            <strong>WON</strong> is the best and most complete gaming platform
          </S.Subtitle>
        </div>

        <S.Footer>Won Games 2022 © Todos os Direitos Reservados</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>
    <S.Content>
      <S.ContentWrapper>
        <Logo color="black" size="large" id="form" />
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children && children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
);

export default Auth;
