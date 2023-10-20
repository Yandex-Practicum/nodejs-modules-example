import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
import { summator } from "./summator.js";
const lodash = __require("lodash");
const result = summator(1, 2);
const object = lodash.clone({ a: { b: { c: 1 } } });
