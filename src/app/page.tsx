import { useMarkdoc } from './hooks';
import { Prose, Search, Sidebar, TableOfContents } from './components';

export default async function HomePage() {
  const { children, headings } = useMarkdoc('index');

  return (
    <main>
      <div className="py-10 relative md:flex md:py-10 gap-x-6 mx-auto md:flex-row max-w-screen-xl px-4">
        <Sidebar />
        <Search />
        <Prose>{children}</Prose>
        <TableOfContents headings={headings} />
      </div>
    </main>
  );
}
