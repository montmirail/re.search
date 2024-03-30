import { exec } from 'child_process';

type SUPPORTED_BROWSER = 'brave' | 'firefox';

interface Browser {
  name: string;

  search: (query: string) => void;
}

export abstract class Browsers {
  protected static browsers: Map<string, Browser> = new Map();

  static add(browser: Browser) {
    Browsers.browsers.set(browser.name, browser);
  }
  static list() {
    return Browsers.browsers;
  }

  static get(name: SUPPORTED_BROWSER) {
    const browser = Browsers.browsers.get(name);

    if (!browser) {
      console.log('Browser not supported.');
      process.exit(0);
    }

    return browser;
  }
}

function Register(a: any, b: any) {
  Browsers.add(new a());
}

@Register
class Firefox implements Browser {
  name = 'firefox';

  search(query: string) {
    exec(`firefox ${query} --new-window`);
  }
}

@Register
class Brave implements Browser {
  name = 'brave';

  search(query: string) {
    exec(`brave ${query} --new-window`);
  }
}
