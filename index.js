var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
System.register("browsers", ["child_process"], function (exports_1, context_1) {
    "use strict";
    var child_process_1, Browsers, Firefox, Brave;
    var __moduleName = context_1 && context_1.id;
    function Register(a, b) {
        Browsers.add(new a());
    }
    return {
        setters: [
            function (child_process_1_1) {
                child_process_1 = child_process_1_1;
            }
        ],
        execute: function () {
            Browsers = class Browsers {
                static add(browser) {
                    Browsers.browsers.set(browser.name, browser);
                }
                static list() {
                    return Browsers.browsers;
                }
                static get(name) {
                    const browser = Browsers.browsers.get(name);
                    if (!browser) {
                        console.log('Browser not supported.');
                        process.exit(0);
                    }
                    return browser;
                }
            };
            exports_1("Browsers", Browsers);
            Browsers.browsers = new Map();
            Firefox = (() => {
                let _classDecorators = [Register];
                let _classDescriptor;
                let _classExtraInitializers = [];
                let _classThis;
                var Firefox = _classThis = class {
                    constructor() {
                        this.name = 'firefox';
                    }
                    search(query) {
                        child_process_1.exec(`firefox ${query} --new-window`);
                    }
                };
                __setFunctionName(_classThis, "Firefox");
                (() => {
                    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
                    __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
                    Firefox = _classThis = _classDescriptor.value;
                    if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
                    __runInitializers(_classThis, _classExtraInitializers);
                })();
                return Firefox = _classThis;
            })();
            Brave = (() => {
                let _classDecorators = [Register];
                let _classDescriptor;
                let _classExtraInitializers = [];
                let _classThis;
                var Brave = _classThis = class {
                    constructor() {
                        this.name = 'brave';
                    }
                    search(query) {
                        child_process_1.exec(`brave ${query} --new-window`);
                    }
                };
                __setFunctionName(_classThis, "Brave");
                (() => {
                    const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
                    __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
                    Brave = _classThis = _classDescriptor.value;
                    if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
                    __runInitializers(_classThis, _classExtraInitializers);
                })();
                return Brave = _classThis;
            })();
        }
    };
});
System.register("read-csv", ["fs", "csv-parser"], function (exports_2, context_2) {
    "use strict";
    var fs_1, csv_parser_1, readCsv;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (fs_1_1) {
                fs_1 = fs_1_1;
            },
            function (csv_parser_1_1) {
                csv_parser_1 = csv_parser_1_1;
            }
        ],
        execute: function () {
            exports_2("readCsv", readCsv = (src) => new Promise((resolve, reject) => {
                const links = [];
                const stream = fs_1.createReadStream(src).pipe(csv_parser_1.default());
                stream.on('data', (data) => {
                    links.push(data);
                });
                stream.on('end', () => __awaiter(void 0, void 0, void 0, function* () {
                    resolve(links);
                }));
            }));
        }
    };
});
System.register("cmds/open", ["browsers", "read-csv"], function (exports_3, context_3) {
    "use strict";
    var browsers_1, read_csv_1, search;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (browsers_1_1) {
                browsers_1 = browsers_1_1;
            },
            function (read_csv_1_1) {
                read_csv_1 = read_csv_1_1;
            }
        ],
        execute: function () {
            exports_3("search", search = (path, options, o) => __awaiter(void 0, void 0, void 0, function* () {
                const links = yield read_csv_1.readCsv(path);
                const searchHrefs = links.map(({ title }) => `https://scholar.google.com/scholar?q=${encodeURIComponent(title)}`);
                const browser = browsers_1.Browsers.get(options.browser);
                browser.search(searchHrefs.join(' '));
            }));
        }
    };
});
System.register("index", ["commander", "cmds/open"], function (exports_4, context_4) {
    "use strict";
    var commander_1, open_1, program;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (commander_1_1) {
                commander_1 = commander_1_1;
            },
            function (open_1_1) {
                open_1 = open_1_1;
            }
        ],
        execute: function () {
            program = new commander_1.Command();
            program.command('search').argument('<string>').option('-b, --browser <string>').action(open_1.search);
            program.parse();
        }
    };
});
