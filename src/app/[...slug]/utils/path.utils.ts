import { parse, sep } from 'path';

export const pathnameToSlug = (pathname: string) => {
  const { dir, name } = parse(pathname);
  const parts = dir.split(sep);
  parts.push(name);
  return parts.slice(2);
};
