import { useMarkdoc } from './hooks';
import { Prose, Search, Sidebar } from './components';
import { TableOfContents } from './components/TableOfContent';

export default function HomePage() {
  const { render, headings } = useMarkdoc('introduction');

  return (
    <main>
      <div className="py-10 relative md:flex md:py-10 gap-x-6 mx-auto md:flex-row max-w-screen-xl px-4">
        <Sidebar />
        <Search />
        <Prose>{render}</Prose>
        <TableOfContents headings={headings} />
      </div>
    </main>
  );
}
