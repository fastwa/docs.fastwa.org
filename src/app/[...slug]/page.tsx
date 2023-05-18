import { glob } from 'glob';

import { useMarkdoc } from '../hooks';
import { pathnameToSlug } from './utils';

import {
  MobileSidebar,
  Prose,
  SearchDialog,
  Sidebar,
  TableOfContents
} from '../components';

type Props = {
  params: { slug: string[] };
};

export async function generateStaticParams() {
  const posts = await glob('src/docs/**/*.md');
  return posts.map((i) => ({ slug: pathnameToSlug(i) }));
}

export default async function ArticlePage({ params }: Props) {
  const { children, headings } = useMarkdoc(params.slug.join('/'));

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
