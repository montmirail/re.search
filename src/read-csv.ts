import { createReadStream } from 'fs';
import csv from 'csv-parser';

export const readCsv = (src: string): Promise<{ title: string }[]> =>
  new Promise((resolve, reject) => {
    const links: { title: string }[] = [];

    const stream = createReadStream(src).pipe(csv());

    stream.on('data', (data) => {
      links.push(data);
    });

    stream.on('end', async () => {
      resolve(links);
    });
  });
