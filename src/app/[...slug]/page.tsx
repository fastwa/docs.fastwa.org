import { glob } from 'glob';

import { Prose } from '../components';
import { useMarkdoc } from '../hooks';
import { pathnameToSlug } from './utils';

type Props = {
  params: { slug: string[] };
};

export async function generateStaticParams() {
  const posts = await glob('src/docs/**/*.md');
  return posts.map((i) => ({ slug: pathnameToSlug(i) }));
}

export default async function ArticlePage({ params }: Props) {
  const { render } = useMarkdoc(params.slug.join('/'));
  return <Prose>{render}</Prose>;
}
