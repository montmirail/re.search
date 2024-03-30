import { program } from 'commander';
import { search } from './cmds/open';

program.command('search').argument('<string>').action(search);

program.parse();
