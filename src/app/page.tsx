import { useMarkdoc } from './hooks';
import {
  MobileSidebar,
  Prose,
  SearchDialog,
  Sidebar,
  TableOfContents
} from './components';

export default async function HomePage() {
  const { children, headings } = useMarkdoc('index');

  return (
    <main>
      <MobileSidebar />
      <div className="py-10 relative md:flex md:py-10 gap-x-6 mx-auto md:flex-row max-w-screen-xl px-4 md:px-0">
        <SearchDialog />
        <Sidebar />
        <Prose>{children}</Prose>
        <TableOfContents headings={headings} />
      </div>
    </main>
  );
}
