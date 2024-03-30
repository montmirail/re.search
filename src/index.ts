import { Command } from 'commander';
import { search } from './cmds/open';

const program = new Command();

program.command('search').argument('<string>').option('-b, --browser <string>').action(search);

program.parse();
