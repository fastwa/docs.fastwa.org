import { Prose } from './components';
import { Search } from './components/Search/Search';
import { useMarkdoc } from './hooks';

export const metadata = {
  title: 'Docs | Fastwa'
};

export default function HomePage() {
  const { render } = useMarkdoc('introduction');

  return (
    <main>
      <Search />
      <Prose>{render}</Prose>
    </main>
  );
}
