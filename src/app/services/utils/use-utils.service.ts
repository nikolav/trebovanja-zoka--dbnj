import { Injectable } from "@angular/core";

import lodash from "lodash";
import { v4 as uuid } from "uuid";
import md5 from "md5";
import urlParse from "url-parse";
import qs from "qs";

// #https://github.com/validatorjs/validator.js
import isEmail from "validator/es/lib/isEmail";
import isURL from "validator/es/lib/isURL";
import isJWT from "validator/es/lib/isJWT";
import isDataURI from "validator/es/lib/isDataURI";

// #https://github.com/alexei/sprintf.js#readme
import { sprintf, vsprintf } from "sprintf-js";

import {
  coreHasOwn,
  cat,
  coreType,
  deepmerge,
  dumpJson,
  idGen,
  isNumeric,
  onDebug,
  parseShellInput,
  untilDestroyed,
} from "../../utils";

const {
  assign,
  debounce,
  clone,
  each,
  escapeRegExp,
  every,
  filter,
  find,
  findKey,
  first,
  get,
  has: owns,
  hasIn: has,
  includes,
  isEmpty,
  isEqual,
  isString,
  kebabCase,
  last,
  map,
  merge,
  noop,
  omit,
  once,
  pick,
  range,
  reduce,
  sample,
  set,
  shuffle,
  size: len,
  some,
  startCase,
  take,
  takeRight,
  throttle,
  trim,
  trimEnd,
  trimStart,
  uniqueId,
  unset,
} = lodash;

@Injectable({
  providedIn: "root",
})
export class UseUtilsService {
  assign = assign;
  cat = cat;
  clone = clone;
  coreHasOwn = coreHasOwn;
  coreType = coreType;
  Date = Date;
  debounce = debounce;
  deepmerge = deepmerge;
  dumpJson = dumpJson;
  each = each;
  escapeRegExp = escapeRegExp;
  every = every;
  False = () => false;
  filter = filter;
  find = find;
  findKey = findKey;
  first = first;
  get = get;
  has = has;
  idGen = idGen;
  includes = includes;
  isDataURI = isDataURI;
  isEmail = isEmail;
  isEmpty = isEmpty;
  isEqual = isEqual;
  isJWT = isJWT;
  isNumeric = isNumeric;
  isString = isString;
  isURL = isURL;
  JSON = JSON;
  kebabCase = kebabCase;
  last = last;
  len = len;
  map = map;
  Math = Math;
  md5 = md5;
  merge = merge;
  noop = noop;
  omit = omit;
  once = once;
  onDebug = onDebug;
  owns = owns;
  parseShellInput = parseShellInput;
  pick = pick;
  qs = qs;
  range = range;
  reduce = reduce;
  sample = sample;
  set = set;
  shuffle = shuffle;
  some = some;
  sprintf = sprintf;
  startCase = startCase;
  take = take;
  takeRight = takeRight;
  throttle = throttle;
  trim = trim;
  trimEnd = trimEnd;
  trimStart = trimStart;
  True = () => true;
  uniqueId = uniqueId;
  unset = unset;
  untilDestroyed = untilDestroyed;
  urlParse = urlParse;
  uuid = uuid;
  vsprintf = vsprintf;
}
