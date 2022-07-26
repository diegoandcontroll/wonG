import { BannerProps } from 'components/Banner';
import BannerSlider from 'components/BannerSlider';
import { Container } from 'components/Container';
import Footer from 'components/Footer';
import { GamecardPropsTypes } from 'components/Gamecard';
import GamecardSlider from 'components/GamecardSlider';
import Header from 'components/Header';
import Heading from 'components/Heading';
import Highlight, { HighlightProps } from 'components/Highlight';
import * as S from './styles';
export type HomeTamplateProps = {
  banners: BannerProps[];
  newGames: GamecardPropsTypes[];
  mostPoPularHighlight: HighlightProps[];
  mostPoPularGames: GamecardPropsTypes[];
  uppcommingGames: GamecardPropsTypes[];
  uppcommingHighlight: HighlightProps[];
  uppcommingMoreGames: GamecardPropsTypes[];
  freeGames: GamecardPropsTypes[];
  freeHighlight: HighlightProps[];
};
const Home = ({
  banners,
  freeGames,
  freeHighlight,
  mostPoPularGames,
  mostPoPularHighlight,
  newGames,
  uppcommingGames,
  uppcommingHighlight,
  uppcommingMoreGames,
}: HomeTamplateProps) => (
  <section>
    <Container>
      <Header />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading color="black" lineLeft lineColor="secondary">
          News
        </Heading>

        <GamecardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
        <Highlight
          title={''}
          subtitle={''}
          buttonLabel={''}
          buttonLink={''}
          backgroundImage={''}
          {...mostPoPularHighlight}
        />
        <GamecardSlider items={mostPoPularGames} />
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>

        <GamecardSlider items={uppcommingGames} />
        <Highlight
          title={''}
          subtitle={''}
          buttonLabel={''}
          buttonLink={''}
          backgroundImage={''}
          {...uppcommingHighlight}
        />
        <GamecardSlider items={uppcommingMoreGames} />
      </S.SectionUpcoming>
      <S.SectionFreeGames>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>
        <Highlight
          title={''}
          subtitle={''}
          buttonLabel={''}
          buttonLink={''}
          backgroundImage={''}
          {...freeHighlight}
        />
        <GamecardSlider items={freeGames} />
      </S.SectionFreeGames>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
);

export default Home;
