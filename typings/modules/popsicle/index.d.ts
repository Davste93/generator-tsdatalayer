// Generated by typings
// Source: node_modules/any-promise/index.d.ts
declare module '~popsicle~any-promise' {
class Promise <R> implements Promise.Thenable <R> {
  /**
   * If you call resolve in the body of the callback passed to the constructor,
   * your promise is fulfilled with result object passed to resolve.
   * If you call reject your promise is rejected with the object passed to resolve.
   * For consistency and debugging (eg stack traces), obj should be an instanceof Error.
   * Any errors thrown in the constructor callback will be implicitly passed to reject().
   */
  constructor (callback: (resolve : (value?: R | Promise.Thenable<R>) => void, reject: (error?: any) => void) => void);

  /**
   * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
   * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
   * Both callbacks have a single parameter , the fulfillment value or rejection reason.
   * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
   * If an error is thrown in the callback, the returned promise rejects with that error.
   *
   * @param onFulfilled called when/if "promise" resolves
   * @param onRejected called when/if "promise" rejects
   */
  then <U> (onFulfilled?: (value: R) => U | Promise.Thenable<U>, onRejected?: (error: any) => U | Promise.Thenable<U>): Promise<U>;
  then <U> (onFulfilled?: (value: R) => U | Promise.Thenable<U>, onRejected?: (error: any) => void): Promise<U>;

  /**
   * Sugar for promise.then(undefined, onRejected)
   *
   * @param onRejected called when/if "promise" rejects
   */
  catch <U> (onRejected?: (error: any) => U | Promise.Thenable<U>): Promise<U>;

  /**
   * Make a new promise from the thenable.
   * A thenable is promise-like in as far as it has a "then" method.
   */
  static resolve (): Promise<void>;
  static resolve <R> (value: R | Promise.Thenable<R>): Promise<R>;

  /**
   * Make a promise that rejects to obj. For consistency and debugging (eg stack traces), obj should be an instanceof Error
   */
  static reject <R> (error: any): Promise<R>;

  /**
   * Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
   * the array passed to all can be a mixture of promise-like objects and other objects.
   * The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.
   */
  static all <T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> (values: [T1 | Promise.Thenable<T1>, T2 | Promise.Thenable<T2>, T3 | Promise.Thenable<T3>, T4 | Promise.Thenable <T4>, T5 | Promise.Thenable<T5>, T6 | Promise.Thenable<T6>, T7 | Promise.Thenable<T7>, T8 | Promise.Thenable<T8>, T9 | Promise.Thenable<T9>, T10 | Promise.Thenable<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
  static all <T1, T2, T3, T4, T5, T6, T7, T8, T9> (values: [T1 | Promise.Thenable<T1>, T2 | Promise.Thenable<T2>, T3 | Promise.Thenable<T3>, T4 | Promise.Thenable <T4>, T5 | Promise.Thenable<T5>, T6 | Promise.Thenable<T6>, T7 | Promise.Thenable<T7>, T8 | Promise.Thenable<T8>, T9 | Promise.Thenable<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
  static all <T1, T2, T3, T4, T5, T6, T7, T8> (values: [T1 | Promise.Thenable<T1>, T2 | Promise.Thenable<T2>, T3 | Promise.Thenable<T3>, T4 | Promise.Thenable <T4>, T5 | Promise.Thenable<T5>, T6 | Promise.Thenable<T6>, T7 | Promise.Thenable<T7>, T8 | Promise.Thenable<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
  static all <T1, T2, T3, T4, T5, T6, T7> (values: [T1 | Promise.Thenable<T1>, T2 | Promise.Thenable<T2>, T3 | Promise.Thenable<T3>, T4 | Promise.Thenable <T4>, T5 | Promise.Thenable<T5>, T6 | Promise.Thenable<T6>, T7 | Promise.Thenable<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;
  static all <T1, T2, T3, T4, T5, T6> (values: [T1 | Promise.Thenable<T1>, T2 | Promise.Thenable<T2>, T3 | Promise.Thenable<T3>, T4 | Promise.Thenable <T4>, T5 | Promise.Thenable<T5>, T6 | Promise.Thenable<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>;
  static all <T1, T2, T3, T4, T5> (values: [T1 | Promise.Thenable<T1>, T2 | Promise.Thenable<T2>, T3 | Promise.Thenable<T3>, T4 | Promise.Thenable <T4>, T5 | Promise.Thenable<T5>]): Promise<[T1, T2, T3, T4, T5]>;
  static all <T1, T2, T3, T4> (values: [T1 | Promise.Thenable<T1>, T2 | Promise.Thenable<T2>, T3 | Promise.Thenable<T3>, T4 | Promise.Thenable <T4>]): Promise<[T1, T2, T3, T4]>;
  static all <T1, T2, T3> (values: [T1 | Promise.Thenable<T1>, T2 | Promise.Thenable<T2>, T3 | Promise.Thenable<T3>]): Promise<[T1, T2, T3]>;
  static all <T1, T2> (values: [T1 | Promise.Thenable<T1>, T2 | Promise.Thenable<T2>]): Promise<[T1, T2]>;
  static all <T1> (values: [T1 | Promise.Thenable<T1>]): Promise<[T1]>;
  static all <TAll> (values: Array<TAll | Promise.Thenable<TAll>>): Promise<TAll[]>;

  /**
   * Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.
   */
  static race <R> (promises: (R | Promise.Thenable<R>)[]): Promise<R>;
}

namespace Promise {
  export interface Thenable <R> {
    then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
    then <U> (onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void): Thenable<U>;
  }
}

export = Promise;
}

// Generated by typings
// Source: node_modules/popsicle/dist/base.d.ts
declare module '~popsicle/dist/base' {
import { Url } from 'url';
export interface Query {
    [key: string]: string | string[];
}
export interface Headers {
    [name: string]: string | string[];
}
export type RawHeaders = string[];
export interface BaseOptions {
    url?: string;
    query?: string | Query;
    headers?: Headers;
    rawHeaders?: RawHeaders;
}
export default class Base {
    Url: Url;
    rawHeaders: RawHeaders;
    constructor({url, headers, rawHeaders, query}: BaseOptions);
    url: string;
    query: string | Query;
    headers: Headers;
    toHeaders(): Headers;
    set(name: string, value: string | string[]): Base;
    append(name: string, value: string | string[]): this;
    name(name: string): string;
    get(name: string): string;
    remove(name: string): this;
    type(): string;
    type(value: string): Base;
}
}
declare module 'popsicle/dist/base' {
export * from '~popsicle/dist/base';
export { default } from '~popsicle/dist/base';
}

// Generated by typings
// Source: node_modules/popsicle/dist/request.d.ts
declare module '~popsicle/dist/request' {
import Promise = require('~popsicle~any-promise');
import Base, { BaseOptions, Headers } from '~popsicle/dist/base';
import Response, { ResponseOptions } from '~popsicle/dist/response';
import PopsicleError from '~popsicle/dist/error';
export interface DefaultsOptions extends BaseOptions {
    url?: string;
    method?: string;
    timeout?: number;
    body?: any;
    options?: any;
    use?: Middleware[];
    progress?: ProgressFunction[];
    transport?: TransportOptions;
}
export interface RequestOptions extends DefaultsOptions {
    url: string;
}
export interface RequestJSON {
    url: string;
    headers: Headers;
    body: any;
    timeout: number;
    options: any;
    method: string;
}
export interface TransportOptions {
    open: OpenHandler;
    abort?: AbortHandler;
    use?: Middleware[];
}
export type Middleware = (request: Request, next: () => Promise<Response>) => Response | Promise<Response>;
export type ProgressFunction = (request: Request) => any;
export type OpenHandler = (request: Request) => Promise<ResponseOptions>;
export type AbortHandler = (request: Request) => any;
export default class Request extends Base implements Promise<Response> {
    method: string;
    timeout: number;
    body: any;
    options: any;
    transport: TransportOptions;
    middleware: Middleware[];
    opened: boolean;
    aborted: boolean;
    uploadLength: number;
    downloadLength: number;
    private _uploadedBytes;
    private _downloadedBytes;
    _raw: any;
    _progress: ProgressFunction[];
    private _promise;
    private _resolve;
    private _reject;
    constructor(options: RequestOptions);
    error(message: string, code: string, original?: Error): PopsicleError;
    then(onFulfilled: (response?: Response) => any, onRejected?: (error?: PopsicleError) => any): Promise<any>;
    catch(onRejected: (error?: PopsicleError) => any): Promise<any>;
    exec(cb: (err: PopsicleError, response?: Response) => any): void;
    toOptions(): RequestOptions;
    toJSON(): RequestJSON;
    clone(): Request;
    use(fns: Middleware | Middleware[]): this;
    progress(fns: ProgressFunction | ProgressFunction[]): this;
    abort(): this;
    private _emit();
    private _handle();
    uploaded: number;
    downloaded: number;
    completed: number;
    completedBytes: number;
    totalBytes: number;
    uploadedBytes: number;
    downloadedBytes: number;
}
}
declare module 'popsicle/dist/request' {
export * from '~popsicle/dist/request';
export { default } from '~popsicle/dist/request';
}

// Generated by typings
// Source: node_modules/popsicle/dist/response.d.ts
declare module '~popsicle/dist/response' {
import Base, { BaseOptions, Headers, RawHeaders } from '~popsicle/dist/base';
export interface ResponseOptions extends BaseOptions {
    body: any;
    status: number;
    statusText: string;
}
export interface ResponseJSON {
    headers: Headers;
    rawHeaders: RawHeaders;
    body: any;
    url: string;
    status: number;
    statusText: string;
}
export default class Response extends Base {
    status: number;
    statusText: string;
    body: any;
    constructor(options: ResponseOptions);
    statusType(): number;
    toJSON(): ResponseJSON;
}
}
declare module 'popsicle/dist/response' {
export * from '~popsicle/dist/response';
export { default } from '~popsicle/dist/response';
}

// Generated by typings
// Source: node_modules/popsicle/dist/plugins/common.d.ts
declare module '~popsicle/dist/plugins/common' {
import Promise = require('~popsicle~any-promise');
import Request from '~popsicle/dist/request';
import Response from '~popsicle/dist/response';
export function wrap<T>(value: T): () => T;
export const headers: () => (request: Request, next: () => Promise<Response>) => Promise<Response>;
export const stringify: () => (request: Request, next: () => Promise<Response>) => Promise<Response>;
export const parse: () => (request: Request, next: () => Promise<Response>) => Promise<{}>;
}
declare module 'popsicle/dist/plugins/common' {
export * from '~popsicle/dist/plugins/common';
}

// Generated by typings
// Source: node_modules/popsicle/dist/plugins/index.d.ts
declare module '~popsicle/dist/plugins/index' {
import Promise = require('~popsicle~any-promise');
export * from '~popsicle/dist/plugins/common';
import Request, { Middleware } from '~popsicle/dist/request';
import Response from '~popsicle/dist/response';
export const unzip: () => (request: Request, next: () => Promise<Response>) => Promise<Response>;
export function concatStream(encoding: string): (request: Request, next: () => Promise<Response>) => Promise<{}>;
export function headers(): (request: Request, next: () => Promise<Response>) => Promise<Response>;
export const defaults: Middleware[];
}
declare module 'popsicle/dist/plugins/index' {
export * from '~popsicle/dist/plugins/index';
}

// Generated by typings
// Source: https://raw.githubusercontent.com/typed-typings/npm-form-data/edc32200ec6065d98bfaa7ff9cfd104e17c5d3e4/lib/form_data.d.ts
declare module '~popsicle~form-data/lib/form_data' {
class FormData {
  static LINE_BREAK: string;
  static DEFAULT_CONTENT_TYPE: string;

  append (key: string, value: any, options?: string | FormData.Options): FormData;
  getHeaders <T> (userHeaders?: T): T & FormData.Headers;
  getCustomHeaders (contentType?: string): FormData.CustomHeaders;
  getBoundary (): string;
  getLengthSync (): number;
  getLength (cb: (error: Error, length?: number) => any): void;
  submit (params: string | Object, cb: (error: Error, response?: any) => any): any;
  pipe <T> (to: T): T;
}

module FormData {
  export interface Options {
    filename: string;
  }

  export interface Headers {
    'content-type': string;
  }

  export interface CustomHeaders extends Headers {
    'content-length': string;
  }
}

export = FormData;
}
declare module '~popsicle~form-data' {
import main = require('~popsicle~form-data/lib/form_data');
export = main;
}

// Generated by typings
// Source: node_modules/popsicle/dist/form.d.ts
declare module '~popsicle/dist/form' {
import FormData = require('~popsicle~form-data');
export default function form(obj: any): FormData;
}
declare module 'popsicle/dist/form' {
export * from '~popsicle/dist/form';
export { default } from '~popsicle/dist/form';
}

// Generated by typings
// Source: https://raw.githubusercontent.com/typed-typings/npm-tough-cookie/3e37dc2e6d448130d2fa4be1026e195ffda2b398/lib/cookie.d.ts
declare module '~popsicle~tough-cookie/lib/cookie' {
/**
 * Parse a cookie date string into a Date. Parses according to RFC6265
 * Section 5.1.1, not Date.parse().
 */
export function parseDate (date: string): Date;

/**
 * Format a Date into a RFC1123 string (the RFC6265-recommended format).
 */
export function formatDate (date: Date): string;

/**
 * Transforms a domain-name into a canonical domain-name. The canonical domain-name
 * is a trimmed, lowercased, stripped-of-leading-dot and optionally punycode-encoded
 * domain-name (Section 5.1.2 of RFC6265). For the most part, this function is
 * idempotent (can be run again on its output without ill effects).
 */
export function canonicalDomain (domain: string): string;

/**
 * Answers "does this real domain match the domain in a cookie?". The str is the
 * "current" domain-name and the domStr is the "cookie" domain-name. Matches
 * according to RFC6265 Section 5.1.3, but it helps to think of it as a "suffix match".
 *
 * The canonicalize parameter will run the other two paramters through canonicalDomain or not.
 */
export function domainMatch (str: string, domStr: string, canonicalize?: boolean): boolean;

/**
 * Given a current request/response path, gives the Path apropriate for storing in
 * a cookie. This is basically the "directory" of a "file" in the path, but is
 * specified by Section 5.1.4 of the RFC.
 *
 * The path parameter MUST be only the pathname part of a URI (i.e. excludes the hostname,
 * query, fragment, etc.). This is the .pathname property of node's uri.parse() output.
 */
export function defaultPath (path: string): string;

/**
 * Answers "does the request-path path-match a given cookie-path?" as
 * per RFC6265 Section 5.1.4. Returns a boolean.
 *
 * This is essentially a prefix-match where cookiePath is a prefix of reqPath.
 */
export function pathMatch (reqPath: string, cookiePath: string): boolean;

/**
 * alias for Cookie.parse(cookieString[, options])
 */
export function parse (cookieString: string, options?: CookieParseOptions): Cookie;

/**
 * alias for Cookie.fromJSON(string)
 */
export function fromJSON (json: string): Cookie;

/**
 * Returns the public suffix of this hostname. The public suffix is the shortest
 * domain-name upon which a cookie can be set. Returns null if the hostname cannot
 * have cookies set for it.
 *
 * For example: www.example.com and www.subdomain.example.com both have public suffix example.com.
 *
 * For further information, see http://publicsuffix.org/. This module derives its list from that site.
 */
export function getPublicSuffix (hostname: string): string;

/**
 * For use with .sort(), sorts a list of cookies into the recommended order
 * given in the RFC (Section 5.4 step 2). The sort algorithm is, in order of precedence:

 * - Longest .path
 * - oldest .creation (which has a 1ms precision, same as Date)
 * - lowest .creationIndex (to get beyond the 1ms precision)
 *
 * ```
 * var cookies = [ \/* unsorted array of Cookie objects *\/ ];
 * cookies = cookies.sort(cookieCompare);
 * ```
 *
 * Note: Since JavaScript's Date is limited to a 1ms precision, cookies within
 * the same milisecond are entirely possible. This is especially true when using
 * the now option to .setCookie(). The .creationIndex property is a per-process
 * global counter, assigned during construction with new Cookie(). This preserves
 * the spirit of the RFC sorting: older cookies go first. This works great for
 * MemoryCookieStore, since Set-Cookie headers are parsed in order, but may not
 * be so great for distributed systems. Sophisticated Stores may wish to set this
 * to some other logical clock such that if cookies A and B are created in the
 * same millisecond, but cookie A is created before cookie B, then
 * A.creationIndex < B.creationIndex. If you want to alter the global counter,
 * which you probably shouldn't do, it's stored in Cookie.cookiesCreated.
 */
export function cookieCompare (a: Cookie, b: Cookie): number;

/**
 * Generates a list of all possible domains that domainMatch() the parameter.
 * May be handy for implementing cookie stores.
 */
export function permuteDomain (domain: string): string[];

/**
 * Generates a list of all possible paths that pathMatch() the parameter.
 * May be handy for implementing cookie stores.
 */
export function permutePath (path: string): string[];

/**
 * Base class for CookieJar stores. Available as tough.Store.
 */
export class Store {
  // TODO(blakeembrey): Finish this.
  // https://github.com/SalesforceEng/tough-cookie#store
}

/**
 * A just-in-memory CookieJar synchronous store implementation, used by default.
 * Despite being a synchronous implementation, it's usable with both the
 * synchronous and asynchronous forms of the CookieJar API.
 */
export class MemoryCookieStore extends Store {}

/**
 * Exported via tough.Cookie.
 */
export class Cookie {
  /**
   * Parses a single Cookie or Set-Cookie HTTP header into a Cookie object. Returns
   * undefined if the string can't be parsed.
   *
   * The options parameter is not required and currently has only one property:
   *
   * - loose - boolean - if true enable parsing of key-less cookies like =abc and =, which are not RFC-compliant.
   * If options is not an object, it is ignored, which means you can use Array#map with it.
   *
   * Here's how to process the Set-Cookie header(s) on a node HTTP/HTTPS response:
   *
   * ```
   * if (res.headers['set-cookie'] instanceof Array)
   *   cookies = res.headers['set-cookie'].map(Cookie.parse);
   * else
   *   cookies = [Cookie.parse(res.headers['set-cookie'])];
   * ```
   */
  static parse (cookieString: string, options?: CookieParseOptions): Cookie;

  /**
   * the name or key of the cookie (default "")
   */
  key: string;

  /**
   * the value of the cookie (default "")
   */
  value: string;

  /**
   * if set, the Expires= attribute of the cookie (defaults to the string "Infinity").
   * See setExpires()
   */
  expires: Date;

  /**
   * (seconds) if set, the Max-Age= attribute in seconds of the cookie. May also
   * be set to strings "Infinity" and "-Infinity" for non-expiry and immediate-expiry,
   * respectively. See setMaxAge()
   */
  maxAge: number;

  /**
   * the Domain= attribute of the cookie
   */
  domain: string;

  /**
   * the Path= of the cookie
   */
  path: string;

  /**
   * the Secure cookie flag
   */
  secure: boolean;

  /**
   * the HttpOnly cookie flag
   */
  httpOnly: boolean;

  /**
   * any unrecognized cookie attributes as strings (even if equal-signs inside)
   */
  extensions: string[];

  /**
   * when this cookie was constructed
   */
  creation: Date;

  /**
   * set at construction, used to provide greater sort precision
   * (please see cookieCompare(a,b) for a full explanation)
   */
  creationIndex: number;

  /**
   * is this a host-only cookie (i.e. no Domain field was set, but was instead implied)
   */
  hostOnly: boolean;

  /**
   * if true, there was no Path field on the cookie and defaultPath() was used to derive one.
   */
  pathIsDefault: boolean;

  /**
   * last time the cookie got accessed. Will affect cookie cleaning once
   * implemented. Using cookiejar.getCookies(...) will update this attribute.
   */
  lastAccessed: Date;

  /**
   * encode to a Set-Cookie header value. The Expires cookie field is set
   * using formatDate(), but is omitted entirely if .expires is Infinity.
   */
  toString (): string;

  /**
   * encode to a Cookie header value (i.e. the .key and .value properties joined with '=').
   */
  cookieString (): string;

  /**
   * sets the expiry based on a date-string passed through parseDate(). If parseDate
   * returns null (i.e. can't parse this date string), .expires is set to "Infinity" (a string) is set.
   */
  setExpires (expires: string): void;

  /**
   * sets the maxAge in seconds. Coerces -Infinity to "-Infinity" and
   * Infinity to "Infinity" so it JSON serializes correctly.
   */
  setMaxAge (maxAge: number): void;

  /**
   * expiryTime() Computes the absolute unix-epoch milliseconds that this cookie
   * expires. expiryDate() works similarly, except it returns a Date object. Note
   * that in both cases the now parameter should be milliseconds.
   *
   * Max-Age takes precedence over Expires (as per the RFC). The .creation
   * attribute -- or, by default, the now paramter -- is used to offset the .maxAge attribute.
   *
   * If Expires (.expires) is set, that's returned.
   *
   * Otherwise, expiryTime() returns Infinity and expiryDate() returns a Date
   * object for "Tue, 19 Jan 2038 03:14:07 GMT" (latest date that can be
   * expressed by a 32-bit time_t; the common limit for most user-agents).
   */
  expiryTime (now?: number): number;
  expiryDate (now?: number): Date;

  /**
   * compute the TTL relative to now (milliseconds). The same precedence rules
   * as for expiryTime/expiryDate apply.
   *
   * The "number" Infinity is returned for cookies without an explicit
   * expiry and 0 is returned if the cookie is expired. Otherwise a time-to-live
   * in milliseconds is returned.
   */
  TTL (now?: number): number;

  /**
   * return the canonicalized .domain field. This is lower-cased and punycode
   * (RFC3490) encoded if the domain has any non-ASCII characters.
   */
  cdomain (): string;
  canonicalizedDomain (): string;

  /**
   * For convenience in using JSON.serialize(cookie). Returns a plain-old Object that can be JSON-serialized.
   *
   * Any Date properties (i.e., .expires, .creation, and .lastAccessed) are
   * exported in ISO format (.toISOString()).
   *
   * NOTE: Custom Cookie properties will be discarded. In tough-cookie 1.x, since
   * there was no .toJSON method explicitly defined, all enumerable properties were
   * captured. If you want a property to be serialized, add the property name to
   * the Cookie.serializableProperties Array.
   */
  toJSON (): Object;

  /**
   * Does the reverse of cookie.toJSON(). If passed a string, will JSON.parse() that first.
   *
   * Any Date properties (i.e., .expires, .creation, and .lastAccessed) are parsed
   * via Date.parse(), not the tough-cookie parseDate, since it's JavaScript/JSON-y
   * timestamps being handled at this layer.
   *
   * Returns null upon JSON parsing error.
   */
  static fromJSON (json: string): Cookie;

  /**
   * Does a deep clone of this cookie, exactly implemented as Cookie.fromJSON(cookie.toJSON()).
   */
  clone (): Cookie;
}

export interface CookieParseOptions {
  loose: boolean;
}

export interface SetCookieOptions {
  /**
   * default true - indicates if this is an HTTP or non-HTTP API. Affects HttpOnly cookies.
   */
  http?: boolean;

  /**
   * autodetect from url - indicates if this is a "Secure" API. If the currentUrl
   * starts with https: or wss: then this is defaulted to true, otherwise false.
   */
  secure?: boolean;

  /**
   * default new Date() - what to use for the creation/access time of cookies
   */
  now?: Date;

  /**
   * default false - silently ignore things like parse errors and invalid
   * domains. Store errors aren't ignored by this option.
   */
  ignoreError?: boolean;
}

export interface GetCookieOptions {
  /**
   * default true - indicates if this is an HTTP or non-HTTP API. Affects HttpOnly cookies.
   */
  http?: boolean;

  /**
   * autodetect from url - indicates if this is a "Secure" API. If the currentUrl
   * starts with https: or wss: then this is defaulted to true, otherwise false.
   */
  secure?: boolean;

  /**
   * default new Date() - what to use for the creation/access time of cookies
   */
  now?: Date;

  /**
   * default true - perform expiry-time checking of cookies and asynchronously
   * remove expired cookies from the store. Using false will return expired cookies
   * and not remove them from the store (which is useful for replaying Set-Cookie headers, potentially).
   */
  expire?: boolean;

  /**
   * default false - if true, do not scope cookies by path. The default uses
   * RFC-compliant path scoping. Note: may not be supported by the underlying
   * store (the default MemoryCookieStore supports it).
   */
  allPaths?: boolean;
}

export interface CookieJarOptions {
  /**
   * default true - reject cookies with domains like "com" and "co.uk"
   */
  rejectPublicSuffixes: boolean;

  /**
   * default false - accept malformed cookies like bar and =bar, which have an
   * implied empty name. This is not in the standard, but is used sometimes
   * on the web and is accepted by (most) browsers.
   */
  looseMode: boolean;
}

/**
 * Simply use new CookieJar(). If you'd like to use a custom store, pass that
 * to the constructor otherwise a MemoryCookieStore will be created and used.
 */
export class CookieJar {
  enableLooseMode: boolean;
  rejectPublicSuffixes: boolean;

  constructor (store?: Store, options?: boolean | CookieJarOptions);

  /**
   * Attempt to set the cookie in the cookie jar. If the operation fails, an
   * error will be given to the callback cb, otherwise the cookie is passed
   * through. The cookie will have updated .creation, .lastAccessed and .hostOnly properties.
   */
  setCookie (cookieOrString: string | Cookie, currentUrl: string, cb: (err: Error, cookie?: Cookie) => any): void;
  setCookie (cookieOrString: string | Cookie, currentUrl: string, options: SetCookieOptions, cb: (err: Error, cookie?: Cookie) => any): void;

  /**
   * Synchronous version of setCookie; only works with synchronous stores
   * (e.g. the default MemoryCookieStore).
   */
  setCookieSync (cookieOrString: string | Cookie, currentUrl: string, options?: SetCookieOptions): void;

  /**
   * Retrieve the list of cookies that can be sent in a Cookie header for the current url.
   *
   * If an error is encountered, that's passed as err to the callback, otherwise
   * an Array of Cookie objects is passed. The array is sorted with cookieCompare()
   * unless the {sort:false} option is given.
   */
  getCookies (currentUrl: string, cb: (err: Error, cookies?: Cookie[]) => any): void;
  getCookies (currentUrl: string, options: GetCookieOptions, cb: (err: Error, cookies?: Cookie[]) => any): void;

  /**
   * Synchronous version of getCookies; only works with synchronous stores
   * (e.g. the default MemoryCookieStore).
   */
  getCookiesSync (currentUrl: string, options?: GetCookieOptions): Cookie[];

  /**
   * Accepts the same options as .getCookies() but passes a string suitable
   * for a Cookie header rather than an array to the callback. Simply maps the
   * Cookie array via .cookieString().
   */
  getCookieString (currentUrl: string, cb: (err: Error, cookies?: string) => any): void;
  getCookieString (currentUrl: string, options: GetCookieOptions, cb: (err: Error, cookies?: string) => any): void;

  /**
   * Synchronous version of getCookieString; only works with synchronous stores
   * (e.g. the default MemoryCookieStore).
   */
  getCookieStringSync (currentUrl: string, options?: GetCookieOptions): string;

  /**
   * Serialize the Jar if the underlying store supports .getAllCookies.
   *
   * NOTE: Custom Cookie properties will be discarded. If you want a property
   * to be serialized, add the property name to the Cookie.serializableProperties Array.
   *
   * See [Serialization Format].
   */
  serialize (cb: (error: Error, serializedObject: Object) => any): void;

  /**
   * Sync version of .serialize
   */
  serializeSync (): Object;

  /**
   * Alias of .serializeSync() for the convenience of JSON.stringify(cookiejar).
   */
  toJSON (): Object;

  /**
   * A new Jar is created and the serialized Cookies are added to the
   * underlying store. Each Cookie is added via store.putCookie in the order
   * in which they appear in the serialization.
   *
   * The store argument is optional, but should be an instance of Store. By
   * default, a new instance of MemoryCookieStore is created.
   *
   * As a convenience, if serialized is a string, it is passed through
   * JSON.parse first. If that throws an error, this is passed to the callback.
   */
  static deserialize (serialized: string | Object, cb: (error: Error, object: Object) =>any): CookieJar;
  static deserialize (serialized: string | Object, store: Store, cb: (error: Error, object: Object) => any): CookieJar;

  /**
   * Sync version of .deserialize. Note that the store must be synchronous
   * for this to work.
   */
  static deserializeSync (serialized: string | Object, store: Store): Object;

  /**
   * Alias of .deserializeSync to provide consistency with Cookie.fromJSON().
   */
  static fromJSON (string: string): Object;

  /**
   * Produces a deep clone of this jar. Modifications to the original won't
   * affect the clone, and vice versa.
   *
   * The store argument is optional, but should be an instance of Store. By
   * default, a new instance of MemoryCookieStore is created. Transferring
   * between store types is supported so long as the source implements
   * .getAllCookies() and the destination implements .putCookie().
   */
  clone (cb: (error: Error, newJar: CookieJar) => any): void;
  clone (store: Store, cb: (error: Error, newJar: CookieJar) => any): void;

  /**
   * Synchronous version of .clone, returning a new CookieJar instance.
   *
   * The store argument is optional, but must be a synchronous Store instance
   * if specified. If not passed, a new instance of MemoryCookieStore is used.
   *
   * The source and destination must both be synchronous Stores. If one or both
   * stores are asynchronous, use .clone instead. Recall that MemoryCookieStore
   * supports both synchronous and asynchronous API calls.
   */
  cloneSync (store?: Store): CookieJar;
}
}
declare module '~popsicle~tough-cookie' {
export * from '~popsicle~tough-cookie/lib/cookie';
}

// Generated by typings
// Source: node_modules/popsicle/dist/jar.d.ts
declare module '~popsicle/dist/jar' {
import { CookieJar } from '~popsicle~tough-cookie';
export default function cookieJar(store?: any): CookieJar;
}
declare module 'popsicle/dist/jar' {
export * from '~popsicle/dist/jar';
export { default } from '~popsicle/dist/jar';
}

// Generated by typings
// Source: https://raw.githubusercontent.com/typings/typed-make-error/310953e35a2c6927b5743dc2d2215384d056fa7a/index.d.ts
declare module '~popsicle~make-error-cause~make-error/index' {
/**
 * Create a new error constructor instance.
 */
function makeError(name: string): makeError.Constructor<makeError.BaseError>;

/**
 * Set the constructor prototype to `BaseError`.
 */
function makeError<T extends Error>(super_: { new (...args: any[]): T }): makeError.Constructor<T & makeError.BaseError>;

/**
 * Create a specialized error instance.
 */
function makeError<T extends Error>(name: string | Function, super_: { new (...args: any[]): T }): makeError.Constructor<T>;

module makeError {
  /**
   * Use with ES6 inheritance.
   */
  export class BaseError implements Error {
    message: string;
    name: string;
    stack: string;

    constructor(message: string);
  }

  export interface Constructor <T> {
    new (message: string): T
    super_: any
    prototype: T
  }
}

export = makeError;
}
declare module '~popsicle~make-error-cause~make-error' {
import main = require('~popsicle~make-error-cause~make-error/index');
export = main;
}

// Generated by typings
// Source: node_modules/make-error-cause/dist/index.d.ts
declare module '~popsicle~make-error-cause/dist/index' {
import makeError = require('~popsicle~make-error-cause~make-error');
function makeErrorCause(value: string | Function): makeErrorCause.Constructor<makeErrorCause.BaseError>;
namespace makeErrorCause {
    class BaseError extends makeError.BaseError {
        cause: Error;
        constructor(message: string, cause?: Error);
        toString(): string;
    }
    interface Constructor<T> {
        new (message: string, cause?: Error): T;
        super_: any;
        prototype: T;
    }
}
export = makeErrorCause;
}
declare module '~popsicle~make-error-cause' {
import main = require('~popsicle~make-error-cause/dist/index');
export = main;
}

// Generated by typings
// Source: node_modules/popsicle/dist/error.d.ts
declare module '~popsicle/dist/error' {
import makeErrorCause = require('~popsicle~make-error-cause');
import Request from '~popsicle/dist/request';
export default class PopsicleError extends makeErrorCause.BaseError {
    code: string;
    popsicle: Request;
    name: string;
    constructor(message: string, code: string, original: Error, popsicle: Request);
}
}
declare module 'popsicle/dist/error' {
export * from '~popsicle/dist/error';
export { default } from '~popsicle/dist/error';
}

// Generated by typings
// Source: node_modules/popsicle/dist/index.d.ts
declare module '~popsicle/dist/index' {
import Promise = require('~popsicle~any-promise');
import Request from '~popsicle/dist/request';
import { defaults as use } from '~popsicle/dist/plugins/index';
export { open, abort, use };
function open(request: Request): Promise<{}>;
function abort(request: Request): void;
}
declare module 'popsicle/dist/index' {
export * from '~popsicle/dist/index';
}

// Generated by typings
// Source: node_modules/popsicle/dist/common.d.ts
declare module '~popsicle/dist/common' {
import Request, { RequestOptions, DefaultsOptions } from '~popsicle/dist/request';
import Response from '~popsicle/dist/response';
import * as plugins from '~popsicle/dist/plugins/index';
import form from '~popsicle/dist/form';
import jar from '~popsicle/dist/jar';
import PopsicleError from '~popsicle/dist/error';
import * as transport from '~popsicle/dist/index';
export function defaults(defaultsOptions: DefaultsOptions): (options: RequestOptions | string) => Request;
export const browser: boolean;
export const request: (options: RequestOptions | string) => Request;
export const get: (options: RequestOptions | string) => Request;
export const post: (options: RequestOptions | string) => Request;
export const put: (options: RequestOptions | string) => Request;
export const patch: (options: RequestOptions | string) => Request;
export const del: (options: RequestOptions | string) => Request;
export const head: (options: RequestOptions | string) => Request;
export { Request, Response, PopsicleError, plugins, form, jar, transport };
export default request;
}
declare module 'popsicle/dist/common' {
export * from '~popsicle/dist/common';
export { default } from '~popsicle/dist/common';
}
declare module 'popsicle' {
export * from '~popsicle/dist/common';
export { default } from '~popsicle/dist/common';
}
