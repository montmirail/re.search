import { Browsers } from '../browsers';

import { readCsv } from '../read-csv';

export const search = async (path: string, options: any, o: any) => {
  const links = await readCsv(path);

  const searchHrefs = links.map(
    ({ title }) => `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`,
  );

  const browser = Browsers.get(options.browser);

  browser.search(searchHrefs.join(' '));
};
