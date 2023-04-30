import Herobanner from './Herobanner';
import ImageGrid from './ImageGrid';
import TopRated from './TopRated';
import SellPoint from './SellPoint';

function Home() {
  return (
    <div>
      <Herobanner />
      <TopRated />
      <SellPoint />
      <ImageGrid />
    </div>
  );
}

export default Home;
