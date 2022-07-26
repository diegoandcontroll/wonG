import Home, { HomeTamplateProps } from 'templates/Home';
import BannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GamecardSlider/mock';
import highlightMock from 'components/Highlight/mock';
export default function Index(props: HomeTamplateProps) {
  return <Home {...props} />;
}

export function getStaticProps() {
  return {
    props: {
      banners: BannersMock,
      newGames: gamesMock,
      mostPoPularHighlight: highlightMock,
      mostPoPularGames: gamesMock,
      uppcommingGames: gamesMock,
      uppcommingHighlight: highlightMock,
      uppcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock,
    },
  };
}
