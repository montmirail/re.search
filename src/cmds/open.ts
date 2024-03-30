import { exec } from 'child_process';
import { Browser } from '../browsers';

import { readCsv } from '../read-csv';

export const search = async (path: string) => {
  const links = await readCsv(path);

  const searchHrefs = links.map(
    ({ title }) => `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`,
  );

  console.log(Browser.list());

  exec(`brave ${searchHrefs.join(' ')} --new-window`);
};
