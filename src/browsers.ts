export abstract class Browser {
  protected static browsers: any[] = [];

  static add(browser: Browser) {
    Browser.browsers.push(browser);
  }
  static list() {
    return Browser.browsers;
  }
}

function Register(a: any, b: any) {
  Browser.add(new a());
}

@Register
class Firefox {
  hello() {
    console.log('hello');
  }
}

class Brave {}
