
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Color
 * 
 */
export type Color = $Result.DefaultSelection<Prisma.$ColorPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductCartDetailes
 * 
 */
export type ProductCartDetailes = $Result.DefaultSelection<Prisma.$ProductCartDetailesPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Heart
 * 
 */
export type Heart = $Result.DefaultSelection<Prisma.$HeartPayload>
/**
 * Model ContactSignup
 * 
 */
export type ContactSignup = $Result.DefaultSelection<Prisma.$ContactSignupPayload>
/**
 * Model NewsLetter
 * 
 */
export type NewsLetter = $Result.DefaultSelection<Prisma.$NewsLetterPayload>
/**
 * Model Faq
 * 
 */
export type Faq = $Result.DefaultSelection<Prisma.$FaqPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  WOMEN: 'WOMEN',
  MEN: 'MEN'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Colors
 * const colors = await prisma.color.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Colors
   * const colors = await prisma.color.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.color`: Exposes CRUD operations for the **Color** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colors
    * const colors = await prisma.color.findMany()
    * ```
    */
  get color(): Prisma.ColorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productCartDetailes`: Exposes CRUD operations for the **ProductCartDetailes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductCartDetailes
    * const productCartDetailes = await prisma.productCartDetailes.findMany()
    * ```
    */
  get productCartDetailes(): Prisma.ProductCartDetailesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.heart`: Exposes CRUD operations for the **Heart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hearts
    * const hearts = await prisma.heart.findMany()
    * ```
    */
  get heart(): Prisma.HeartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactSignup`: Exposes CRUD operations for the **ContactSignup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactSignups
    * const contactSignups = await prisma.contactSignup.findMany()
    * ```
    */
  get contactSignup(): Prisma.ContactSignupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsLetter`: Exposes CRUD operations for the **NewsLetter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsLetters
    * const newsLetters = await prisma.newsLetter.findMany()
    * ```
    */
  get newsLetter(): Prisma.NewsLetterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.faq`: Exposes CRUD operations for the **Faq** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faqs
    * const faqs = await prisma.faq.findMany()
    * ```
    */
  get faq(): Prisma.FaqDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Color: 'Color',
    Product: 'Product',
    ProductCartDetailes: 'ProductCartDetailes',
    Account: 'Account',
    Heart: 'Heart',
    ContactSignup: 'ContactSignup',
    NewsLetter: 'NewsLetter',
    Faq: 'Faq'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "color" | "product" | "productCartDetailes" | "account" | "heart" | "contactSignup" | "newsLetter" | "faq"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Color: {
        payload: Prisma.$ColorPayload<ExtArgs>
        fields: Prisma.ColorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          findFirst: {
            args: Prisma.ColorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          findMany: {
            args: Prisma.ColorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>[]
          }
          create: {
            args: Prisma.ColorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          createMany: {
            args: Prisma.ColorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>[]
          }
          delete: {
            args: Prisma.ColorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          update: {
            args: Prisma.ColorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          deleteMany: {
            args: Prisma.ColorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>[]
          }
          upsert: {
            args: Prisma.ColorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          aggregate: {
            args: Prisma.ColorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColor>
          }
          groupBy: {
            args: Prisma.ColorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColorCountArgs<ExtArgs>
            result: $Utils.Optional<ColorCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductCartDetailes: {
        payload: Prisma.$ProductCartDetailesPayload<ExtArgs>
        fields: Prisma.ProductCartDetailesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductCartDetailesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCartDetailesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductCartDetailesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCartDetailesPayload>
          }
          findFirst: {
            args: Prisma.ProductCartDetailesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCartDetailesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductCartDetailesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCartDetailesPayload>
          }
          findMany: {
            args: Prisma.ProductCartDetailesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCartDetailesPayload>[]
          }
          create: {
            args: Prisma.ProductCartDetailesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCartDetailesPayload>
          }
          createMany: {
            args: Prisma.ProductCartDetailesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCartDetailesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCartDetailesPayload>[]
          }
          delete: {
            args: Prisma.ProductCartDetailesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCartDetailesPayload>
          }
          update: {
            args: Prisma.ProductCartDetailesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCartDetailesPayload>
          }
          deleteMany: {
            args: Prisma.ProductCartDetailesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductCartDetailesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductCartDetailesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCartDetailesPayload>[]
          }
          upsert: {
            args: Prisma.ProductCartDetailesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductCartDetailesPayload>
          }
          aggregate: {
            args: Prisma.ProductCartDetailesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductCartDetailes>
          }
          groupBy: {
            args: Prisma.ProductCartDetailesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductCartDetailesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCartDetailesCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCartDetailesCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Heart: {
        payload: Prisma.$HeartPayload<ExtArgs>
        fields: Prisma.HeartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartPayload>
          }
          findFirst: {
            args: Prisma.HeartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartPayload>
          }
          findMany: {
            args: Prisma.HeartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartPayload>[]
          }
          create: {
            args: Prisma.HeartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartPayload>
          }
          createMany: {
            args: Prisma.HeartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartPayload>[]
          }
          delete: {
            args: Prisma.HeartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartPayload>
          }
          update: {
            args: Prisma.HeartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartPayload>
          }
          deleteMany: {
            args: Prisma.HeartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartPayload>[]
          }
          upsert: {
            args: Prisma.HeartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeartPayload>
          }
          aggregate: {
            args: Prisma.HeartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeart>
          }
          groupBy: {
            args: Prisma.HeartGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeartGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeartCountArgs<ExtArgs>
            result: $Utils.Optional<HeartCountAggregateOutputType> | number
          }
        }
      }
      ContactSignup: {
        payload: Prisma.$ContactSignupPayload<ExtArgs>
        fields: Prisma.ContactSignupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactSignupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSignupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactSignupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSignupPayload>
          }
          findFirst: {
            args: Prisma.ContactSignupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSignupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactSignupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSignupPayload>
          }
          findMany: {
            args: Prisma.ContactSignupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSignupPayload>[]
          }
          create: {
            args: Prisma.ContactSignupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSignupPayload>
          }
          createMany: {
            args: Prisma.ContactSignupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactSignupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSignupPayload>[]
          }
          delete: {
            args: Prisma.ContactSignupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSignupPayload>
          }
          update: {
            args: Prisma.ContactSignupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSignupPayload>
          }
          deleteMany: {
            args: Prisma.ContactSignupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactSignupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactSignupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSignupPayload>[]
          }
          upsert: {
            args: Prisma.ContactSignupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSignupPayload>
          }
          aggregate: {
            args: Prisma.ContactSignupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactSignup>
          }
          groupBy: {
            args: Prisma.ContactSignupGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactSignupGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactSignupCountArgs<ExtArgs>
            result: $Utils.Optional<ContactSignupCountAggregateOutputType> | number
          }
        }
      }
      NewsLetter: {
        payload: Prisma.$NewsLetterPayload<ExtArgs>
        fields: Prisma.NewsLetterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsLetterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsLetterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload>
          }
          findFirst: {
            args: Prisma.NewsLetterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsLetterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload>
          }
          findMany: {
            args: Prisma.NewsLetterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload>[]
          }
          create: {
            args: Prisma.NewsLetterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload>
          }
          createMany: {
            args: Prisma.NewsLetterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsLetterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload>[]
          }
          delete: {
            args: Prisma.NewsLetterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload>
          }
          update: {
            args: Prisma.NewsLetterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload>
          }
          deleteMany: {
            args: Prisma.NewsLetterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsLetterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsLetterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload>[]
          }
          upsert: {
            args: Prisma.NewsLetterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsLetterPayload>
          }
          aggregate: {
            args: Prisma.NewsLetterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsLetter>
          }
          groupBy: {
            args: Prisma.NewsLetterGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsLetterGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsLetterCountArgs<ExtArgs>
            result: $Utils.Optional<NewsLetterCountAggregateOutputType> | number
          }
        }
      }
      Faq: {
        payload: Prisma.$FaqPayload<ExtArgs>
        fields: Prisma.FaqFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FaqFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FaqFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          findFirst: {
            args: Prisma.FaqFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FaqFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          findMany: {
            args: Prisma.FaqFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>[]
          }
          create: {
            args: Prisma.FaqCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          createMany: {
            args: Prisma.FaqCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FaqCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>[]
          }
          delete: {
            args: Prisma.FaqDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          update: {
            args: Prisma.FaqUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          deleteMany: {
            args: Prisma.FaqDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FaqUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FaqUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>[]
          }
          upsert: {
            args: Prisma.FaqUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          aggregate: {
            args: Prisma.FaqAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaq>
          }
          groupBy: {
            args: Prisma.FaqGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaqGroupByOutputType>[]
          }
          count: {
            args: Prisma.FaqCountArgs<ExtArgs>
            result: $Utils.Optional<FaqCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    color?: ColorOmit
    product?: ProductOmit
    productCartDetailes?: ProductCartDetailesOmit
    account?: AccountOmit
    heart?: HeartOmit
    contactSignup?: ContactSignupOmit
    newsLetter?: NewsLetterOmit
    faq?: FaqOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    colors: number
    cartDetails: number
    hearts: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colors?: boolean | ProductCountOutputTypeCountColorsArgs
    cartDetails?: boolean | ProductCountOutputTypeCountCartDetailsArgs
    hearts?: boolean | ProductCountOutputTypeCountHeartsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountColorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColorWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCartDetailesWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountHeartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeartWhereInput
  }


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    hearts: number
    cart: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hearts?: boolean | AccountCountOutputTypeCountHeartsArgs
    cart?: boolean | AccountCountOutputTypeCountCartArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountHeartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeartWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCartDetailesWhereInput
  }


  /**
   * Count Type HeartCountOutputType
   */

  export type HeartCountOutputType = {
    products: number
  }

  export type HeartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | HeartCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * HeartCountOutputType without action
   */
  export type HeartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeartCountOutputType
     */
    select?: HeartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HeartCountOutputType without action
   */
  export type HeartCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Color
   */

  export type AggregateColor = {
    _count: ColorCountAggregateOutputType | null
    _avg: ColorAvgAggregateOutputType | null
    _sum: ColorSumAggregateOutputType | null
    _min: ColorMinAggregateOutputType | null
    _max: ColorMaxAggregateOutputType | null
  }

  export type ColorAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ColorSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ColorMinAggregateOutputType = {
    id: number | null
    colorHex: string | null
    colorName: string | null
    productId: number | null
  }

  export type ColorMaxAggregateOutputType = {
    id: number | null
    colorHex: string | null
    colorName: string | null
    productId: number | null
  }

  export type ColorCountAggregateOutputType = {
    id: number
    colorHex: number
    colorName: number
    productId: number
    _all: number
  }


  export type ColorAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ColorSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ColorMinAggregateInputType = {
    id?: true
    colorHex?: true
    colorName?: true
    productId?: true
  }

  export type ColorMaxAggregateInputType = {
    id?: true
    colorHex?: true
    colorName?: true
    productId?: true
  }

  export type ColorCountAggregateInputType = {
    id?: true
    colorHex?: true
    colorName?: true
    productId?: true
    _all?: true
  }

  export type ColorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Color to aggregate.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colors
    **/
    _count?: true | ColorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColorMaxAggregateInputType
  }

  export type GetColorAggregateType<T extends ColorAggregateArgs> = {
        [P in keyof T & keyof AggregateColor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColor[P]>
      : GetScalarType<T[P], AggregateColor[P]>
  }




  export type ColorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColorWhereInput
    orderBy?: ColorOrderByWithAggregationInput | ColorOrderByWithAggregationInput[]
    by: ColorScalarFieldEnum[] | ColorScalarFieldEnum
    having?: ColorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColorCountAggregateInputType | true
    _avg?: ColorAvgAggregateInputType
    _sum?: ColorSumAggregateInputType
    _min?: ColorMinAggregateInputType
    _max?: ColorMaxAggregateInputType
  }

  export type ColorGroupByOutputType = {
    id: number
    colorHex: string
    colorName: string
    productId: number
    _count: ColorCountAggregateOutputType | null
    _avg: ColorAvgAggregateOutputType | null
    _sum: ColorSumAggregateOutputType | null
    _min: ColorMinAggregateOutputType | null
    _max: ColorMaxAggregateOutputType | null
  }

  type GetColorGroupByPayload<T extends ColorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColorGroupByOutputType[P]>
            : GetScalarType<T[P], ColorGroupByOutputType[P]>
        }
      >
    >


  export type ColorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    colorHex?: boolean
    colorName?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["color"]>

  export type ColorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    colorHex?: boolean
    colorName?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["color"]>

  export type ColorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    colorHex?: boolean
    colorName?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["color"]>

  export type ColorSelectScalar = {
    id?: boolean
    colorHex?: boolean
    colorName?: boolean
    productId?: boolean
  }

  export type ColorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "colorHex" | "colorName" | "productId", ExtArgs["result"]["color"]>
  export type ColorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ColorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ColorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ColorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Color"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      colorHex: string
      colorName: string
      productId: number
    }, ExtArgs["result"]["color"]>
    composites: {}
  }

  type ColorGetPayload<S extends boolean | null | undefined | ColorDefaultArgs> = $Result.GetResult<Prisma.$ColorPayload, S>

  type ColorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColorCountAggregateInputType | true
    }

  export interface ColorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Color'], meta: { name: 'Color' } }
    /**
     * Find zero or one Color that matches the filter.
     * @param {ColorFindUniqueArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColorFindUniqueArgs>(args: SelectSubset<T, ColorFindUniqueArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Color that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColorFindUniqueOrThrowArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColorFindUniqueOrThrowArgs>(args: SelectSubset<T, ColorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Color that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorFindFirstArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColorFindFirstArgs>(args?: SelectSubset<T, ColorFindFirstArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Color that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorFindFirstOrThrowArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColorFindFirstOrThrowArgs>(args?: SelectSubset<T, ColorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colors
     * const colors = await prisma.color.findMany()
     * 
     * // Get first 10 Colors
     * const colors = await prisma.color.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colorWithIdOnly = await prisma.color.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColorFindManyArgs>(args?: SelectSubset<T, ColorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Color.
     * @param {ColorCreateArgs} args - Arguments to create a Color.
     * @example
     * // Create one Color
     * const Color = await prisma.color.create({
     *   data: {
     *     // ... data to create a Color
     *   }
     * })
     * 
     */
    create<T extends ColorCreateArgs>(args: SelectSubset<T, ColorCreateArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colors.
     * @param {ColorCreateManyArgs} args - Arguments to create many Colors.
     * @example
     * // Create many Colors
     * const color = await prisma.color.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColorCreateManyArgs>(args?: SelectSubset<T, ColorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colors and returns the data saved in the database.
     * @param {ColorCreateManyAndReturnArgs} args - Arguments to create many Colors.
     * @example
     * // Create many Colors
     * const color = await prisma.color.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colors and only return the `id`
     * const colorWithIdOnly = await prisma.color.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColorCreateManyAndReturnArgs>(args?: SelectSubset<T, ColorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Color.
     * @param {ColorDeleteArgs} args - Arguments to delete one Color.
     * @example
     * // Delete one Color
     * const Color = await prisma.color.delete({
     *   where: {
     *     // ... filter to delete one Color
     *   }
     * })
     * 
     */
    delete<T extends ColorDeleteArgs>(args: SelectSubset<T, ColorDeleteArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Color.
     * @param {ColorUpdateArgs} args - Arguments to update one Color.
     * @example
     * // Update one Color
     * const color = await prisma.color.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColorUpdateArgs>(args: SelectSubset<T, ColorUpdateArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colors.
     * @param {ColorDeleteManyArgs} args - Arguments to filter Colors to delete.
     * @example
     * // Delete a few Colors
     * const { count } = await prisma.color.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColorDeleteManyArgs>(args?: SelectSubset<T, ColorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colors
     * const color = await prisma.color.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColorUpdateManyArgs>(args: SelectSubset<T, ColorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colors and returns the data updated in the database.
     * @param {ColorUpdateManyAndReturnArgs} args - Arguments to update many Colors.
     * @example
     * // Update many Colors
     * const color = await prisma.color.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colors and only return the `id`
     * const colorWithIdOnly = await prisma.color.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ColorUpdateManyAndReturnArgs>(args: SelectSubset<T, ColorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Color.
     * @param {ColorUpsertArgs} args - Arguments to update or create a Color.
     * @example
     * // Update or create a Color
     * const color = await prisma.color.upsert({
     *   create: {
     *     // ... data to create a Color
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Color we want to update
     *   }
     * })
     */
    upsert<T extends ColorUpsertArgs>(args: SelectSubset<T, ColorUpsertArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorCountArgs} args - Arguments to filter Colors to count.
     * @example
     * // Count the number of Colors
     * const count = await prisma.color.count({
     *   where: {
     *     // ... the filter for the Colors we want to count
     *   }
     * })
    **/
    count<T extends ColorCountArgs>(
      args?: Subset<T, ColorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Color.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ColorAggregateArgs>(args: Subset<T, ColorAggregateArgs>): Prisma.PrismaPromise<GetColorAggregateType<T>>

    /**
     * Group by Color.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ColorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColorGroupByArgs['orderBy'] }
        : { orderBy?: ColorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ColorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Color model
   */
  readonly fields: ColorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Color.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Color model
   */
  interface ColorFieldRefs {
    readonly id: FieldRef<"Color", 'Int'>
    readonly colorHex: FieldRef<"Color", 'String'>
    readonly colorName: FieldRef<"Color", 'String'>
    readonly productId: FieldRef<"Color", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Color findUnique
   */
  export type ColorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where: ColorWhereUniqueInput
  }

  /**
   * Color findUniqueOrThrow
   */
  export type ColorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where: ColorWhereUniqueInput
  }

  /**
   * Color findFirst
   */
  export type ColorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colors.
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colors.
     */
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }

  /**
   * Color findFirstOrThrow
   */
  export type ColorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colors.
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colors.
     */
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }

  /**
   * Color findMany
   */
  export type ColorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Colors to fetch.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colors.
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }

  /**
   * Color create
   */
  export type ColorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * The data needed to create a Color.
     */
    data: XOR<ColorCreateInput, ColorUncheckedCreateInput>
  }

  /**
   * Color createMany
   */
  export type ColorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colors.
     */
    data: ColorCreateManyInput | ColorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Color createManyAndReturn
   */
  export type ColorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * The data used to create many Colors.
     */
    data: ColorCreateManyInput | ColorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Color update
   */
  export type ColorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * The data needed to update a Color.
     */
    data: XOR<ColorUpdateInput, ColorUncheckedUpdateInput>
    /**
     * Choose, which Color to update.
     */
    where: ColorWhereUniqueInput
  }

  /**
   * Color updateMany
   */
  export type ColorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colors.
     */
    data: XOR<ColorUpdateManyMutationInput, ColorUncheckedUpdateManyInput>
    /**
     * Filter which Colors to update
     */
    where?: ColorWhereInput
    /**
     * Limit how many Colors to update.
     */
    limit?: number
  }

  /**
   * Color updateManyAndReturn
   */
  export type ColorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * The data used to update Colors.
     */
    data: XOR<ColorUpdateManyMutationInput, ColorUncheckedUpdateManyInput>
    /**
     * Filter which Colors to update
     */
    where?: ColorWhereInput
    /**
     * Limit how many Colors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Color upsert
   */
  export type ColorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * The filter to search for the Color to update in case it exists.
     */
    where: ColorWhereUniqueInput
    /**
     * In case the Color found by the `where` argument doesn't exist, create a new Color with this data.
     */
    create: XOR<ColorCreateInput, ColorUncheckedCreateInput>
    /**
     * In case the Color was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColorUpdateInput, ColorUncheckedUpdateInput>
  }

  /**
   * Color delete
   */
  export type ColorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter which Color to delete.
     */
    where: ColorWhereUniqueInput
  }

  /**
   * Color deleteMany
   */
  export type ColorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colors to delete
     */
    where?: ColorWhereInput
    /**
     * Limit how many Colors to delete.
     */
    limit?: number
  }

  /**
   * Color without action
   */
  export type ColorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    inventory: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    inventory: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    status: string | null
    title: string | null
    price: number | null
    description: string | null
    productDetails: string | null
    productCare: string | null
    inventory: number | null
    gender: $Enums.Gender | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    status: string | null
    title: string | null
    price: number | null
    description: string | null
    productDetails: string | null
    productCare: string | null
    inventory: number | null
    gender: $Enums.Gender | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    status: number
    size: number
    title: number
    price: number
    description: number
    productDetails: number
    productCare: number
    images: number
    inventory: number
    gender: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    inventory?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    inventory?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    status?: true
    title?: true
    price?: true
    description?: true
    productDetails?: true
    productCare?: true
    inventory?: true
    gender?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    status?: true
    title?: true
    price?: true
    description?: true
    productDetails?: true
    productCare?: true
    inventory?: true
    gender?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    status?: true
    size?: true
    title?: true
    price?: true
    description?: true
    productDetails?: true
    productCare?: true
    images?: true
    inventory?: true
    gender?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    status: string
    size: string[]
    title: string
    price: number
    description: string
    productDetails: string
    productCare: string
    images: string[]
    inventory: number
    gender: $Enums.Gender | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    size?: boolean
    title?: boolean
    price?: boolean
    description?: boolean
    productDetails?: boolean
    productCare?: boolean
    images?: boolean
    inventory?: boolean
    gender?: boolean
    colors?: boolean | Product$colorsArgs<ExtArgs>
    cartDetails?: boolean | Product$cartDetailsArgs<ExtArgs>
    hearts?: boolean | Product$heartsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    size?: boolean
    title?: boolean
    price?: boolean
    description?: boolean
    productDetails?: boolean
    productCare?: boolean
    images?: boolean
    inventory?: boolean
    gender?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    size?: boolean
    title?: boolean
    price?: boolean
    description?: boolean
    productDetails?: boolean
    productCare?: boolean
    images?: boolean
    inventory?: boolean
    gender?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    status?: boolean
    size?: boolean
    title?: boolean
    price?: boolean
    description?: boolean
    productDetails?: boolean
    productCare?: boolean
    images?: boolean
    inventory?: boolean
    gender?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "size" | "title" | "price" | "description" | "productDetails" | "productCare" | "images" | "inventory" | "gender", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colors?: boolean | Product$colorsArgs<ExtArgs>
    cartDetails?: boolean | Product$cartDetailsArgs<ExtArgs>
    hearts?: boolean | Product$heartsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      colors: Prisma.$ColorPayload<ExtArgs>[]
      cartDetails: Prisma.$ProductCartDetailesPayload<ExtArgs>[]
      hearts: Prisma.$HeartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      size: string[]
      title: string
      price: number
      description: string
      productDetails: string
      productCare: string
      images: string[]
      inventory: number
      gender: $Enums.Gender | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    colors<T extends Product$colorsArgs<ExtArgs> = {}>(args?: Subset<T, Product$colorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartDetails<T extends Product$cartDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Product$cartDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCartDetailesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hearts<T extends Product$heartsArgs<ExtArgs> = {}>(args?: Subset<T, Product$heartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly status: FieldRef<"Product", 'String'>
    readonly size: FieldRef<"Product", 'String[]'>
    readonly title: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly description: FieldRef<"Product", 'String'>
    readonly productDetails: FieldRef<"Product", 'String'>
    readonly productCare: FieldRef<"Product", 'String'>
    readonly images: FieldRef<"Product", 'String[]'>
    readonly inventory: FieldRef<"Product", 'Int'>
    readonly gender: FieldRef<"Product", 'Gender'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.colors
   */
  export type Product$colorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    where?: ColorWhereInput
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    cursor?: ColorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }

  /**
   * Product.cartDetails
   */
  export type Product$cartDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCartDetailes
     */
    select?: ProductCartDetailesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCartDetailes
     */
    omit?: ProductCartDetailesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCartDetailesInclude<ExtArgs> | null
    where?: ProductCartDetailesWhereInput
    orderBy?: ProductCartDetailesOrderByWithRelationInput | ProductCartDetailesOrderByWithRelationInput[]
    cursor?: ProductCartDetailesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductCartDetailesScalarFieldEnum | ProductCartDetailesScalarFieldEnum[]
  }

  /**
   * Product.hearts
   */
  export type Product$heartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heart
     */
    select?: HeartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heart
     */
    omit?: HeartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartInclude<ExtArgs> | null
    where?: HeartWhereInput
    orderBy?: HeartOrderByWithRelationInput | HeartOrderByWithRelationInput[]
    cursor?: HeartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HeartScalarFieldEnum | HeartScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductCartDetailes
   */

  export type AggregateProductCartDetailes = {
    _count: ProductCartDetailesCountAggregateOutputType | null
    _avg: ProductCartDetailesAvgAggregateOutputType | null
    _sum: ProductCartDetailesSumAggregateOutputType | null
    _min: ProductCartDetailesMinAggregateOutputType | null
    _max: ProductCartDetailesMaxAggregateOutputType | null
  }

  export type ProductCartDetailesAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    accountId: number | null
    productId: number | null
  }

  export type ProductCartDetailesSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    accountId: number | null
    productId: number | null
  }

  export type ProductCartDetailesMinAggregateOutputType = {
    id: number | null
    selectedColorName: string | null
    selectedColor: string | null
    size: string | null
    quantity: number | null
    accountId: number | null
    productId: number | null
  }

  export type ProductCartDetailesMaxAggregateOutputType = {
    id: number | null
    selectedColorName: string | null
    selectedColor: string | null
    size: string | null
    quantity: number | null
    accountId: number | null
    productId: number | null
  }

  export type ProductCartDetailesCountAggregateOutputType = {
    id: number
    selectedColorName: number
    selectedColor: number
    size: number
    quantity: number
    accountId: number
    productId: number
    _all: number
  }


  export type ProductCartDetailesAvgAggregateInputType = {
    id?: true
    quantity?: true
    accountId?: true
    productId?: true
  }

  export type ProductCartDetailesSumAggregateInputType = {
    id?: true
    quantity?: true
    accountId?: true
    productId?: true
  }

  export type ProductCartDetailesMinAggregateInputType = {
    id?: true
    selectedColorName?: true
    selectedColor?: true
    size?: true
    quantity?: true
    accountId?: true
    productId?: true
  }

  export type ProductCartDetailesMaxAggregateInputType = {
    id?: true
    selectedColorName?: true
    selectedColor?: true
    size?: true
    quantity?: true
    accountId?: true
    productId?: true
  }

  export type ProductCartDetailesCountAggregateInputType = {
    id?: true
    selectedColorName?: true
    selectedColor?: true
    size?: true
    quantity?: true
    accountId?: true
    productId?: true
    _all?: true
  }

  export type ProductCartDetailesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCartDetailes to aggregate.
     */
    where?: ProductCartDetailesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCartDetailes to fetch.
     */
    orderBy?: ProductCartDetailesOrderByWithRelationInput | ProductCartDetailesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductCartDetailesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCartDetailes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCartDetailes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductCartDetailes
    **/
    _count?: true | ProductCartDetailesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductCartDetailesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductCartDetailesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductCartDetailesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductCartDetailesMaxAggregateInputType
  }

  export type GetProductCartDetailesAggregateType<T extends ProductCartDetailesAggregateArgs> = {
        [P in keyof T & keyof AggregateProductCartDetailes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductCartDetailes[P]>
      : GetScalarType<T[P], AggregateProductCartDetailes[P]>
  }




  export type ProductCartDetailesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductCartDetailesWhereInput
    orderBy?: ProductCartDetailesOrderByWithAggregationInput | ProductCartDetailesOrderByWithAggregationInput[]
    by: ProductCartDetailesScalarFieldEnum[] | ProductCartDetailesScalarFieldEnum
    having?: ProductCartDetailesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCartDetailesCountAggregateInputType | true
    _avg?: ProductCartDetailesAvgAggregateInputType
    _sum?: ProductCartDetailesSumAggregateInputType
    _min?: ProductCartDetailesMinAggregateInputType
    _max?: ProductCartDetailesMaxAggregateInputType
  }

  export type ProductCartDetailesGroupByOutputType = {
    id: number
    selectedColorName: string | null
    selectedColor: string | null
    size: string | null
    quantity: number | null
    accountId: number
    productId: number | null
    _count: ProductCartDetailesCountAggregateOutputType | null
    _avg: ProductCartDetailesAvgAggregateOutputType | null
    _sum: ProductCartDetailesSumAggregateOutputType | null
    _min: ProductCartDetailesMinAggregateOutputType | null
    _max: ProductCartDetailesMaxAggregateOutputType | null
  }

  type GetProductCartDetailesGroupByPayload<T extends ProductCartDetailesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductCartDetailesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductCartDetailesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductCartDetailesGroupByOutputType[P]>
            : GetScalarType<T[P], ProductCartDetailesGroupByOutputType[P]>
        }
      >
    >


  export type ProductCartDetailesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    selectedColorName?: boolean
    selectedColor?: boolean
    size?: boolean
    quantity?: boolean
    accountId?: boolean
    productId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    product?: boolean | ProductCartDetailes$productArgs<ExtArgs>
  }, ExtArgs["result"]["productCartDetailes"]>

  export type ProductCartDetailesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    selectedColorName?: boolean
    selectedColor?: boolean
    size?: boolean
    quantity?: boolean
    accountId?: boolean
    productId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    product?: boolean | ProductCartDetailes$productArgs<ExtArgs>
  }, ExtArgs["result"]["productCartDetailes"]>

  export type ProductCartDetailesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    selectedColorName?: boolean
    selectedColor?: boolean
    size?: boolean
    quantity?: boolean
    accountId?: boolean
    productId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    product?: boolean | ProductCartDetailes$productArgs<ExtArgs>
  }, ExtArgs["result"]["productCartDetailes"]>

  export type ProductCartDetailesSelectScalar = {
    id?: boolean
    selectedColorName?: boolean
    selectedColor?: boolean
    size?: boolean
    quantity?: boolean
    accountId?: boolean
    productId?: boolean
  }

  export type ProductCartDetailesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "selectedColorName" | "selectedColor" | "size" | "quantity" | "accountId" | "productId", ExtArgs["result"]["productCartDetailes"]>
  export type ProductCartDetailesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    product?: boolean | ProductCartDetailes$productArgs<ExtArgs>
  }
  export type ProductCartDetailesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    product?: boolean | ProductCartDetailes$productArgs<ExtArgs>
  }
  export type ProductCartDetailesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    product?: boolean | ProductCartDetailes$productArgs<ExtArgs>
  }

  export type $ProductCartDetailesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductCartDetailes"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      selectedColorName: string | null
      selectedColor: string | null
      size: string | null
      quantity: number | null
      accountId: number
      productId: number | null
    }, ExtArgs["result"]["productCartDetailes"]>
    composites: {}
  }

  type ProductCartDetailesGetPayload<S extends boolean | null | undefined | ProductCartDetailesDefaultArgs> = $Result.GetResult<Prisma.$ProductCartDetailesPayload, S>

  type ProductCartDetailesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductCartDetailesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCartDetailesCountAggregateInputType | true
    }

  export interface ProductCartDetailesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductCartDetailes'], meta: { name: 'ProductCartDetailes' } }
    /**
     * Find zero or one ProductCartDetailes that matches the filter.
     * @param {ProductCartDetailesFindUniqueArgs} args - Arguments to find a ProductCartDetailes
     * @example
     * // Get one ProductCartDetailes
     * const productCartDetailes = await prisma.productCartDetailes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductCartDetailesFindUniqueArgs>(args: SelectSubset<T, ProductCartDetailesFindUniqueArgs<ExtArgs>>): Prisma__ProductCartDetailesClient<$Result.GetResult<Prisma.$ProductCartDetailesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductCartDetailes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductCartDetailesFindUniqueOrThrowArgs} args - Arguments to find a ProductCartDetailes
     * @example
     * // Get one ProductCartDetailes
     * const productCartDetailes = await prisma.productCartDetailes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductCartDetailesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductCartDetailesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductCartDetailesClient<$Result.GetResult<Prisma.$ProductCartDetailesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCartDetailes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCartDetailesFindFirstArgs} args - Arguments to find a ProductCartDetailes
     * @example
     * // Get one ProductCartDetailes
     * const productCartDetailes = await prisma.productCartDetailes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductCartDetailesFindFirstArgs>(args?: SelectSubset<T, ProductCartDetailesFindFirstArgs<ExtArgs>>): Prisma__ProductCartDetailesClient<$Result.GetResult<Prisma.$ProductCartDetailesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductCartDetailes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCartDetailesFindFirstOrThrowArgs} args - Arguments to find a ProductCartDetailes
     * @example
     * // Get one ProductCartDetailes
     * const productCartDetailes = await prisma.productCartDetailes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductCartDetailesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductCartDetailesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductCartDetailesClient<$Result.GetResult<Prisma.$ProductCartDetailesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductCartDetailes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCartDetailesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductCartDetailes
     * const productCartDetailes = await prisma.productCartDetailes.findMany()
     * 
     * // Get first 10 ProductCartDetailes
     * const productCartDetailes = await prisma.productCartDetailes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productCartDetailesWithIdOnly = await prisma.productCartDetailes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductCartDetailesFindManyArgs>(args?: SelectSubset<T, ProductCartDetailesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCartDetailesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductCartDetailes.
     * @param {ProductCartDetailesCreateArgs} args - Arguments to create a ProductCartDetailes.
     * @example
     * // Create one ProductCartDetailes
     * const ProductCartDetailes = await prisma.productCartDetailes.create({
     *   data: {
     *     // ... data to create a ProductCartDetailes
     *   }
     * })
     * 
     */
    create<T extends ProductCartDetailesCreateArgs>(args: SelectSubset<T, ProductCartDetailesCreateArgs<ExtArgs>>): Prisma__ProductCartDetailesClient<$Result.GetResult<Prisma.$ProductCartDetailesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductCartDetailes.
     * @param {ProductCartDetailesCreateManyArgs} args - Arguments to create many ProductCartDetailes.
     * @example
     * // Create many ProductCartDetailes
     * const productCartDetailes = await prisma.productCartDetailes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCartDetailesCreateManyArgs>(args?: SelectSubset<T, ProductCartDetailesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductCartDetailes and returns the data saved in the database.
     * @param {ProductCartDetailesCreateManyAndReturnArgs} args - Arguments to create many ProductCartDetailes.
     * @example
     * // Create many ProductCartDetailes
     * const productCartDetailes = await prisma.productCartDetailes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductCartDetailes and only return the `id`
     * const productCartDetailesWithIdOnly = await prisma.productCartDetailes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCartDetailesCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCartDetailesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCartDetailesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductCartDetailes.
     * @param {ProductCartDetailesDeleteArgs} args - Arguments to delete one ProductCartDetailes.
     * @example
     * // Delete one ProductCartDetailes
     * const ProductCartDetailes = await prisma.productCartDetailes.delete({
     *   where: {
     *     // ... filter to delete one ProductCartDetailes
     *   }
     * })
     * 
     */
    delete<T extends ProductCartDetailesDeleteArgs>(args: SelectSubset<T, ProductCartDetailesDeleteArgs<ExtArgs>>): Prisma__ProductCartDetailesClient<$Result.GetResult<Prisma.$ProductCartDetailesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductCartDetailes.
     * @param {ProductCartDetailesUpdateArgs} args - Arguments to update one ProductCartDetailes.
     * @example
     * // Update one ProductCartDetailes
     * const productCartDetailes = await prisma.productCartDetailes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductCartDetailesUpdateArgs>(args: SelectSubset<T, ProductCartDetailesUpdateArgs<ExtArgs>>): Prisma__ProductCartDetailesClient<$Result.GetResult<Prisma.$ProductCartDetailesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductCartDetailes.
     * @param {ProductCartDetailesDeleteManyArgs} args - Arguments to filter ProductCartDetailes to delete.
     * @example
     * // Delete a few ProductCartDetailes
     * const { count } = await prisma.productCartDetailes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductCartDetailesDeleteManyArgs>(args?: SelectSubset<T, ProductCartDetailesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCartDetailes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCartDetailesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductCartDetailes
     * const productCartDetailes = await prisma.productCartDetailes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductCartDetailesUpdateManyArgs>(args: SelectSubset<T, ProductCartDetailesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductCartDetailes and returns the data updated in the database.
     * @param {ProductCartDetailesUpdateManyAndReturnArgs} args - Arguments to update many ProductCartDetailes.
     * @example
     * // Update many ProductCartDetailes
     * const productCartDetailes = await prisma.productCartDetailes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductCartDetailes and only return the `id`
     * const productCartDetailesWithIdOnly = await prisma.productCartDetailes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductCartDetailesUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductCartDetailesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCartDetailesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductCartDetailes.
     * @param {ProductCartDetailesUpsertArgs} args - Arguments to update or create a ProductCartDetailes.
     * @example
     * // Update or create a ProductCartDetailes
     * const productCartDetailes = await prisma.productCartDetailes.upsert({
     *   create: {
     *     // ... data to create a ProductCartDetailes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductCartDetailes we want to update
     *   }
     * })
     */
    upsert<T extends ProductCartDetailesUpsertArgs>(args: SelectSubset<T, ProductCartDetailesUpsertArgs<ExtArgs>>): Prisma__ProductCartDetailesClient<$Result.GetResult<Prisma.$ProductCartDetailesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductCartDetailes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCartDetailesCountArgs} args - Arguments to filter ProductCartDetailes to count.
     * @example
     * // Count the number of ProductCartDetailes
     * const count = await prisma.productCartDetailes.count({
     *   where: {
     *     // ... the filter for the ProductCartDetailes we want to count
     *   }
     * })
    **/
    count<T extends ProductCartDetailesCountArgs>(
      args?: Subset<T, ProductCartDetailesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCartDetailesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductCartDetailes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCartDetailesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductCartDetailesAggregateArgs>(args: Subset<T, ProductCartDetailesAggregateArgs>): Prisma.PrismaPromise<GetProductCartDetailesAggregateType<T>>

    /**
     * Group by ProductCartDetailes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCartDetailesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductCartDetailesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductCartDetailesGroupByArgs['orderBy'] }
        : { orderBy?: ProductCartDetailesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductCartDetailesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductCartDetailesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductCartDetailes model
   */
  readonly fields: ProductCartDetailesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductCartDetailes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductCartDetailesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductCartDetailes$productArgs<ExtArgs> = {}>(args?: Subset<T, ProductCartDetailes$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductCartDetailes model
   */
  interface ProductCartDetailesFieldRefs {
    readonly id: FieldRef<"ProductCartDetailes", 'Int'>
    readonly selectedColorName: FieldRef<"ProductCartDetailes", 'String'>
    readonly selectedColor: FieldRef<"ProductCartDetailes", 'String'>
    readonly size: FieldRef<"ProductCartDetailes", 'String'>
    readonly quantity: FieldRef<"ProductCartDetailes", 'Int'>
    readonly accountId: FieldRef<"ProductCartDetailes", 'Int'>
    readonly productId: FieldRef<"ProductCartDetailes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductCartDetailes findUnique
   */
  export type ProductCartDetailesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCartDetailes
     */
    select?: ProductCartDetailesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCartDetailes
     */
    omit?: ProductCartDetailesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCartDetailesInclude<ExtArgs> | null
    /**
     * Filter, which ProductCartDetailes to fetch.
     */
    where: ProductCartDetailesWhereUniqueInput
  }

  /**
   * ProductCartDetailes findUniqueOrThrow
   */
  export type ProductCartDetailesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCartDetailes
     */
    select?: ProductCartDetailesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCartDetailes
     */
    omit?: ProductCartDetailesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCartDetailesInclude<ExtArgs> | null
    /**
     * Filter, which ProductCartDetailes to fetch.
     */
    where: ProductCartDetailesWhereUniqueInput
  }

  /**
   * ProductCartDetailes findFirst
   */
  export type ProductCartDetailesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCartDetailes
     */
    select?: ProductCartDetailesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCartDetailes
     */
    omit?: ProductCartDetailesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCartDetailesInclude<ExtArgs> | null
    /**
     * Filter, which ProductCartDetailes to fetch.
     */
    where?: ProductCartDetailesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCartDetailes to fetch.
     */
    orderBy?: ProductCartDetailesOrderByWithRelationInput | ProductCartDetailesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCartDetailes.
     */
    cursor?: ProductCartDetailesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCartDetailes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCartDetailes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCartDetailes.
     */
    distinct?: ProductCartDetailesScalarFieldEnum | ProductCartDetailesScalarFieldEnum[]
  }

  /**
   * ProductCartDetailes findFirstOrThrow
   */
  export type ProductCartDetailesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCartDetailes
     */
    select?: ProductCartDetailesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCartDetailes
     */
    omit?: ProductCartDetailesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCartDetailesInclude<ExtArgs> | null
    /**
     * Filter, which ProductCartDetailes to fetch.
     */
    where?: ProductCartDetailesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCartDetailes to fetch.
     */
    orderBy?: ProductCartDetailesOrderByWithRelationInput | ProductCartDetailesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductCartDetailes.
     */
    cursor?: ProductCartDetailesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCartDetailes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCartDetailes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductCartDetailes.
     */
    distinct?: ProductCartDetailesScalarFieldEnum | ProductCartDetailesScalarFieldEnum[]
  }

  /**
   * ProductCartDetailes findMany
   */
  export type ProductCartDetailesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCartDetailes
     */
    select?: ProductCartDetailesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCartDetailes
     */
    omit?: ProductCartDetailesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCartDetailesInclude<ExtArgs> | null
    /**
     * Filter, which ProductCartDetailes to fetch.
     */
    where?: ProductCartDetailesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductCartDetailes to fetch.
     */
    orderBy?: ProductCartDetailesOrderByWithRelationInput | ProductCartDetailesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductCartDetailes.
     */
    cursor?: ProductCartDetailesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductCartDetailes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductCartDetailes.
     */
    skip?: number
    distinct?: ProductCartDetailesScalarFieldEnum | ProductCartDetailesScalarFieldEnum[]
  }

  /**
   * ProductCartDetailes create
   */
  export type ProductCartDetailesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCartDetailes
     */
    select?: ProductCartDetailesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCartDetailes
     */
    omit?: ProductCartDetailesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCartDetailesInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductCartDetailes.
     */
    data: XOR<ProductCartDetailesCreateInput, ProductCartDetailesUncheckedCreateInput>
  }

  /**
   * ProductCartDetailes createMany
   */
  export type ProductCartDetailesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductCartDetailes.
     */
    data: ProductCartDetailesCreateManyInput | ProductCartDetailesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductCartDetailes createManyAndReturn
   */
  export type ProductCartDetailesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCartDetailes
     */
    select?: ProductCartDetailesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCartDetailes
     */
    omit?: ProductCartDetailesOmit<ExtArgs> | null
    /**
     * The data used to create many ProductCartDetailes.
     */
    data: ProductCartDetailesCreateManyInput | ProductCartDetailesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCartDetailesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductCartDetailes update
   */
  export type ProductCartDetailesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCartDetailes
     */
    select?: ProductCartDetailesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCartDetailes
     */
    omit?: ProductCartDetailesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCartDetailesInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductCartDetailes.
     */
    data: XOR<ProductCartDetailesUpdateInput, ProductCartDetailesUncheckedUpdateInput>
    /**
     * Choose, which ProductCartDetailes to update.
     */
    where: ProductCartDetailesWhereUniqueInput
  }

  /**
   * ProductCartDetailes updateMany
   */
  export type ProductCartDetailesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductCartDetailes.
     */
    data: XOR<ProductCartDetailesUpdateManyMutationInput, ProductCartDetailesUncheckedUpdateManyInput>
    /**
     * Filter which ProductCartDetailes to update
     */
    where?: ProductCartDetailesWhereInput
    /**
     * Limit how many ProductCartDetailes to update.
     */
    limit?: number
  }

  /**
   * ProductCartDetailes updateManyAndReturn
   */
  export type ProductCartDetailesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCartDetailes
     */
    select?: ProductCartDetailesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCartDetailes
     */
    omit?: ProductCartDetailesOmit<ExtArgs> | null
    /**
     * The data used to update ProductCartDetailes.
     */
    data: XOR<ProductCartDetailesUpdateManyMutationInput, ProductCartDetailesUncheckedUpdateManyInput>
    /**
     * Filter which ProductCartDetailes to update
     */
    where?: ProductCartDetailesWhereInput
    /**
     * Limit how many ProductCartDetailes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCartDetailesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductCartDetailes upsert
   */
  export type ProductCartDetailesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCartDetailes
     */
    select?: ProductCartDetailesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCartDetailes
     */
    omit?: ProductCartDetailesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCartDetailesInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductCartDetailes to update in case it exists.
     */
    where: ProductCartDetailesWhereUniqueInput
    /**
     * In case the ProductCartDetailes found by the `where` argument doesn't exist, create a new ProductCartDetailes with this data.
     */
    create: XOR<ProductCartDetailesCreateInput, ProductCartDetailesUncheckedCreateInput>
    /**
     * In case the ProductCartDetailes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductCartDetailesUpdateInput, ProductCartDetailesUncheckedUpdateInput>
  }

  /**
   * ProductCartDetailes delete
   */
  export type ProductCartDetailesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCartDetailes
     */
    select?: ProductCartDetailesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCartDetailes
     */
    omit?: ProductCartDetailesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCartDetailesInclude<ExtArgs> | null
    /**
     * Filter which ProductCartDetailes to delete.
     */
    where: ProductCartDetailesWhereUniqueInput
  }

  /**
   * ProductCartDetailes deleteMany
   */
  export type ProductCartDetailesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductCartDetailes to delete
     */
    where?: ProductCartDetailesWhereInput
    /**
     * Limit how many ProductCartDetailes to delete.
     */
    limit?: number
  }

  /**
   * ProductCartDetailes.product
   */
  export type ProductCartDetailes$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * ProductCartDetailes without action
   */
  export type ProductCartDetailesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCartDetailes
     */
    select?: ProductCartDetailesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCartDetailes
     */
    omit?: ProductCartDetailesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCartDetailesInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    permission: $Enums.Role | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    permission: $Enums.Role | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    permission: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    permission?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    permission?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    permission?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    permission: $Enums.Role | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    permission?: boolean
    hearts?: boolean | Account$heartsArgs<ExtArgs>
    cart?: boolean | Account$cartArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    permission?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    permission?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    permission?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "permission", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hearts?: boolean | Account$heartsArgs<ExtArgs>
    cart?: boolean | Account$cartArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      hearts: Prisma.$HeartPayload<ExtArgs>[]
      cart: Prisma.$ProductCartDetailesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      permission: $Enums.Role | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hearts<T extends Account$heartsArgs<ExtArgs> = {}>(args?: Subset<T, Account$heartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart<T extends Account$cartArgs<ExtArgs> = {}>(args?: Subset<T, Account$cartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductCartDetailesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'Int'>
    readonly username: FieldRef<"Account", 'String'>
    readonly email: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly permission: FieldRef<"Account", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.hearts
   */
  export type Account$heartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heart
     */
    select?: HeartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heart
     */
    omit?: HeartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartInclude<ExtArgs> | null
    where?: HeartWhereInput
    orderBy?: HeartOrderByWithRelationInput | HeartOrderByWithRelationInput[]
    cursor?: HeartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HeartScalarFieldEnum | HeartScalarFieldEnum[]
  }

  /**
   * Account.cart
   */
  export type Account$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCartDetailes
     */
    select?: ProductCartDetailesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductCartDetailes
     */
    omit?: ProductCartDetailesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductCartDetailesInclude<ExtArgs> | null
    where?: ProductCartDetailesWhereInput
    orderBy?: ProductCartDetailesOrderByWithRelationInput | ProductCartDetailesOrderByWithRelationInput[]
    cursor?: ProductCartDetailesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductCartDetailesScalarFieldEnum | ProductCartDetailesScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Heart
   */

  export type AggregateHeart = {
    _count: HeartCountAggregateOutputType | null
    _avg: HeartAvgAggregateOutputType | null
    _sum: HeartSumAggregateOutputType | null
    _min: HeartMinAggregateOutputType | null
    _max: HeartMaxAggregateOutputType | null
  }

  export type HeartAvgAggregateOutputType = {
    id: number | null
    accountId: number | null
  }

  export type HeartSumAggregateOutputType = {
    id: number | null
    accountId: number | null
  }

  export type HeartMinAggregateOutputType = {
    id: number | null
    accountId: number | null
  }

  export type HeartMaxAggregateOutputType = {
    id: number | null
    accountId: number | null
  }

  export type HeartCountAggregateOutputType = {
    id: number
    accountId: number
    _all: number
  }


  export type HeartAvgAggregateInputType = {
    id?: true
    accountId?: true
  }

  export type HeartSumAggregateInputType = {
    id?: true
    accountId?: true
  }

  export type HeartMinAggregateInputType = {
    id?: true
    accountId?: true
  }

  export type HeartMaxAggregateInputType = {
    id?: true
    accountId?: true
  }

  export type HeartCountAggregateInputType = {
    id?: true
    accountId?: true
    _all?: true
  }

  export type HeartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Heart to aggregate.
     */
    where?: HeartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hearts to fetch.
     */
    orderBy?: HeartOrderByWithRelationInput | HeartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hearts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hearts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hearts
    **/
    _count?: true | HeartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeartMaxAggregateInputType
  }

  export type GetHeartAggregateType<T extends HeartAggregateArgs> = {
        [P in keyof T & keyof AggregateHeart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeart[P]>
      : GetScalarType<T[P], AggregateHeart[P]>
  }




  export type HeartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeartWhereInput
    orderBy?: HeartOrderByWithAggregationInput | HeartOrderByWithAggregationInput[]
    by: HeartScalarFieldEnum[] | HeartScalarFieldEnum
    having?: HeartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeartCountAggregateInputType | true
    _avg?: HeartAvgAggregateInputType
    _sum?: HeartSumAggregateInputType
    _min?: HeartMinAggregateInputType
    _max?: HeartMaxAggregateInputType
  }

  export type HeartGroupByOutputType = {
    id: number
    accountId: number | null
    _count: HeartCountAggregateOutputType | null
    _avg: HeartAvgAggregateOutputType | null
    _sum: HeartSumAggregateOutputType | null
    _min: HeartMinAggregateOutputType | null
    _max: HeartMaxAggregateOutputType | null
  }

  type GetHeartGroupByPayload<T extends HeartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeartGroupByOutputType[P]>
            : GetScalarType<T[P], HeartGroupByOutputType[P]>
        }
      >
    >


  export type HeartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    account?: boolean | Heart$accountArgs<ExtArgs>
    products?: boolean | Heart$productsArgs<ExtArgs>
    _count?: boolean | HeartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["heart"]>

  export type HeartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    account?: boolean | Heart$accountArgs<ExtArgs>
  }, ExtArgs["result"]["heart"]>

  export type HeartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    account?: boolean | Heart$accountArgs<ExtArgs>
  }, ExtArgs["result"]["heart"]>

  export type HeartSelectScalar = {
    id?: boolean
    accountId?: boolean
  }

  export type HeartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId", ExtArgs["result"]["heart"]>
  export type HeartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Heart$accountArgs<ExtArgs>
    products?: boolean | Heart$productsArgs<ExtArgs>
    _count?: boolean | HeartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HeartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Heart$accountArgs<ExtArgs>
  }
  export type HeartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Heart$accountArgs<ExtArgs>
  }

  export type $HeartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Heart"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs> | null
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      accountId: number | null
    }, ExtArgs["result"]["heart"]>
    composites: {}
  }

  type HeartGetPayload<S extends boolean | null | undefined | HeartDefaultArgs> = $Result.GetResult<Prisma.$HeartPayload, S>

  type HeartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeartCountAggregateInputType | true
    }

  export interface HeartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Heart'], meta: { name: 'Heart' } }
    /**
     * Find zero or one Heart that matches the filter.
     * @param {HeartFindUniqueArgs} args - Arguments to find a Heart
     * @example
     * // Get one Heart
     * const heart = await prisma.heart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeartFindUniqueArgs>(args: SelectSubset<T, HeartFindUniqueArgs<ExtArgs>>): Prisma__HeartClient<$Result.GetResult<Prisma.$HeartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Heart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeartFindUniqueOrThrowArgs} args - Arguments to find a Heart
     * @example
     * // Get one Heart
     * const heart = await prisma.heart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeartFindUniqueOrThrowArgs>(args: SelectSubset<T, HeartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeartClient<$Result.GetResult<Prisma.$HeartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Heart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartFindFirstArgs} args - Arguments to find a Heart
     * @example
     * // Get one Heart
     * const heart = await prisma.heart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeartFindFirstArgs>(args?: SelectSubset<T, HeartFindFirstArgs<ExtArgs>>): Prisma__HeartClient<$Result.GetResult<Prisma.$HeartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Heart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartFindFirstOrThrowArgs} args - Arguments to find a Heart
     * @example
     * // Get one Heart
     * const heart = await prisma.heart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeartFindFirstOrThrowArgs>(args?: SelectSubset<T, HeartFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeartClient<$Result.GetResult<Prisma.$HeartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hearts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hearts
     * const hearts = await prisma.heart.findMany()
     * 
     * // Get first 10 Hearts
     * const hearts = await prisma.heart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heartWithIdOnly = await prisma.heart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeartFindManyArgs>(args?: SelectSubset<T, HeartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Heart.
     * @param {HeartCreateArgs} args - Arguments to create a Heart.
     * @example
     * // Create one Heart
     * const Heart = await prisma.heart.create({
     *   data: {
     *     // ... data to create a Heart
     *   }
     * })
     * 
     */
    create<T extends HeartCreateArgs>(args: SelectSubset<T, HeartCreateArgs<ExtArgs>>): Prisma__HeartClient<$Result.GetResult<Prisma.$HeartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hearts.
     * @param {HeartCreateManyArgs} args - Arguments to create many Hearts.
     * @example
     * // Create many Hearts
     * const heart = await prisma.heart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeartCreateManyArgs>(args?: SelectSubset<T, HeartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hearts and returns the data saved in the database.
     * @param {HeartCreateManyAndReturnArgs} args - Arguments to create many Hearts.
     * @example
     * // Create many Hearts
     * const heart = await prisma.heart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hearts and only return the `id`
     * const heartWithIdOnly = await prisma.heart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeartCreateManyAndReturnArgs>(args?: SelectSubset<T, HeartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Heart.
     * @param {HeartDeleteArgs} args - Arguments to delete one Heart.
     * @example
     * // Delete one Heart
     * const Heart = await prisma.heart.delete({
     *   where: {
     *     // ... filter to delete one Heart
     *   }
     * })
     * 
     */
    delete<T extends HeartDeleteArgs>(args: SelectSubset<T, HeartDeleteArgs<ExtArgs>>): Prisma__HeartClient<$Result.GetResult<Prisma.$HeartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Heart.
     * @param {HeartUpdateArgs} args - Arguments to update one Heart.
     * @example
     * // Update one Heart
     * const heart = await prisma.heart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeartUpdateArgs>(args: SelectSubset<T, HeartUpdateArgs<ExtArgs>>): Prisma__HeartClient<$Result.GetResult<Prisma.$HeartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hearts.
     * @param {HeartDeleteManyArgs} args - Arguments to filter Hearts to delete.
     * @example
     * // Delete a few Hearts
     * const { count } = await prisma.heart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeartDeleteManyArgs>(args?: SelectSubset<T, HeartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hearts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hearts
     * const heart = await prisma.heart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeartUpdateManyArgs>(args: SelectSubset<T, HeartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hearts and returns the data updated in the database.
     * @param {HeartUpdateManyAndReturnArgs} args - Arguments to update many Hearts.
     * @example
     * // Update many Hearts
     * const heart = await prisma.heart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hearts and only return the `id`
     * const heartWithIdOnly = await prisma.heart.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HeartUpdateManyAndReturnArgs>(args: SelectSubset<T, HeartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Heart.
     * @param {HeartUpsertArgs} args - Arguments to update or create a Heart.
     * @example
     * // Update or create a Heart
     * const heart = await prisma.heart.upsert({
     *   create: {
     *     // ... data to create a Heart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Heart we want to update
     *   }
     * })
     */
    upsert<T extends HeartUpsertArgs>(args: SelectSubset<T, HeartUpsertArgs<ExtArgs>>): Prisma__HeartClient<$Result.GetResult<Prisma.$HeartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hearts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartCountArgs} args - Arguments to filter Hearts to count.
     * @example
     * // Count the number of Hearts
     * const count = await prisma.heart.count({
     *   where: {
     *     // ... the filter for the Hearts we want to count
     *   }
     * })
    **/
    count<T extends HeartCountArgs>(
      args?: Subset<T, HeartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Heart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HeartAggregateArgs>(args: Subset<T, HeartAggregateArgs>): Prisma.PrismaPromise<GetHeartAggregateType<T>>

    /**
     * Group by Heart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HeartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeartGroupByArgs['orderBy'] }
        : { orderBy?: HeartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HeartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Heart model
   */
  readonly fields: HeartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Heart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends Heart$accountArgs<ExtArgs> = {}>(args?: Subset<T, Heart$accountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    products<T extends Heart$productsArgs<ExtArgs> = {}>(args?: Subset<T, Heart$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Heart model
   */
  interface HeartFieldRefs {
    readonly id: FieldRef<"Heart", 'Int'>
    readonly accountId: FieldRef<"Heart", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Heart findUnique
   */
  export type HeartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heart
     */
    select?: HeartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heart
     */
    omit?: HeartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartInclude<ExtArgs> | null
    /**
     * Filter, which Heart to fetch.
     */
    where: HeartWhereUniqueInput
  }

  /**
   * Heart findUniqueOrThrow
   */
  export type HeartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heart
     */
    select?: HeartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heart
     */
    omit?: HeartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartInclude<ExtArgs> | null
    /**
     * Filter, which Heart to fetch.
     */
    where: HeartWhereUniqueInput
  }

  /**
   * Heart findFirst
   */
  export type HeartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heart
     */
    select?: HeartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heart
     */
    omit?: HeartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartInclude<ExtArgs> | null
    /**
     * Filter, which Heart to fetch.
     */
    where?: HeartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hearts to fetch.
     */
    orderBy?: HeartOrderByWithRelationInput | HeartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hearts.
     */
    cursor?: HeartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hearts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hearts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hearts.
     */
    distinct?: HeartScalarFieldEnum | HeartScalarFieldEnum[]
  }

  /**
   * Heart findFirstOrThrow
   */
  export type HeartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heart
     */
    select?: HeartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heart
     */
    omit?: HeartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartInclude<ExtArgs> | null
    /**
     * Filter, which Heart to fetch.
     */
    where?: HeartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hearts to fetch.
     */
    orderBy?: HeartOrderByWithRelationInput | HeartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hearts.
     */
    cursor?: HeartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hearts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hearts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hearts.
     */
    distinct?: HeartScalarFieldEnum | HeartScalarFieldEnum[]
  }

  /**
   * Heart findMany
   */
  export type HeartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heart
     */
    select?: HeartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heart
     */
    omit?: HeartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartInclude<ExtArgs> | null
    /**
     * Filter, which Hearts to fetch.
     */
    where?: HeartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hearts to fetch.
     */
    orderBy?: HeartOrderByWithRelationInput | HeartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hearts.
     */
    cursor?: HeartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hearts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hearts.
     */
    skip?: number
    distinct?: HeartScalarFieldEnum | HeartScalarFieldEnum[]
  }

  /**
   * Heart create
   */
  export type HeartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heart
     */
    select?: HeartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heart
     */
    omit?: HeartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartInclude<ExtArgs> | null
    /**
     * The data needed to create a Heart.
     */
    data?: XOR<HeartCreateInput, HeartUncheckedCreateInput>
  }

  /**
   * Heart createMany
   */
  export type HeartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hearts.
     */
    data: HeartCreateManyInput | HeartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Heart createManyAndReturn
   */
  export type HeartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heart
     */
    select?: HeartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Heart
     */
    omit?: HeartOmit<ExtArgs> | null
    /**
     * The data used to create many Hearts.
     */
    data: HeartCreateManyInput | HeartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Heart update
   */
  export type HeartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heart
     */
    select?: HeartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heart
     */
    omit?: HeartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartInclude<ExtArgs> | null
    /**
     * The data needed to update a Heart.
     */
    data: XOR<HeartUpdateInput, HeartUncheckedUpdateInput>
    /**
     * Choose, which Heart to update.
     */
    where: HeartWhereUniqueInput
  }

  /**
   * Heart updateMany
   */
  export type HeartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hearts.
     */
    data: XOR<HeartUpdateManyMutationInput, HeartUncheckedUpdateManyInput>
    /**
     * Filter which Hearts to update
     */
    where?: HeartWhereInput
    /**
     * Limit how many Hearts to update.
     */
    limit?: number
  }

  /**
   * Heart updateManyAndReturn
   */
  export type HeartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heart
     */
    select?: HeartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Heart
     */
    omit?: HeartOmit<ExtArgs> | null
    /**
     * The data used to update Hearts.
     */
    data: XOR<HeartUpdateManyMutationInput, HeartUncheckedUpdateManyInput>
    /**
     * Filter which Hearts to update
     */
    where?: HeartWhereInput
    /**
     * Limit how many Hearts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Heart upsert
   */
  export type HeartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heart
     */
    select?: HeartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heart
     */
    omit?: HeartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartInclude<ExtArgs> | null
    /**
     * The filter to search for the Heart to update in case it exists.
     */
    where: HeartWhereUniqueInput
    /**
     * In case the Heart found by the `where` argument doesn't exist, create a new Heart with this data.
     */
    create: XOR<HeartCreateInput, HeartUncheckedCreateInput>
    /**
     * In case the Heart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeartUpdateInput, HeartUncheckedUpdateInput>
  }

  /**
   * Heart delete
   */
  export type HeartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heart
     */
    select?: HeartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heart
     */
    omit?: HeartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartInclude<ExtArgs> | null
    /**
     * Filter which Heart to delete.
     */
    where: HeartWhereUniqueInput
  }

  /**
   * Heart deleteMany
   */
  export type HeartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hearts to delete
     */
    where?: HeartWhereInput
    /**
     * Limit how many Hearts to delete.
     */
    limit?: number
  }

  /**
   * Heart.account
   */
  export type Heart$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * Heart.products
   */
  export type Heart$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Heart without action
   */
  export type HeartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heart
     */
    select?: HeartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heart
     */
    omit?: HeartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeartInclude<ExtArgs> | null
  }


  /**
   * Model ContactSignup
   */

  export type AggregateContactSignup = {
    _count: ContactSignupCountAggregateOutputType | null
    _avg: ContactSignupAvgAggregateOutputType | null
    _sum: ContactSignupSumAggregateOutputType | null
    _min: ContactSignupMinAggregateOutputType | null
    _max: ContactSignupMaxAggregateOutputType | null
  }

  export type ContactSignupAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSignupSumAggregateOutputType = {
    id: number | null
  }

  export type ContactSignupMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    message: string | null
  }

  export type ContactSignupMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    message: string | null
  }

  export type ContactSignupCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    message: number
    _all: number
  }


  export type ContactSignupAvgAggregateInputType = {
    id?: true
  }

  export type ContactSignupSumAggregateInputType = {
    id?: true
  }

  export type ContactSignupMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    message?: true
  }

  export type ContactSignupMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    message?: true
  }

  export type ContactSignupCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    message?: true
    _all?: true
  }

  export type ContactSignupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactSignup to aggregate.
     */
    where?: ContactSignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSignups to fetch.
     */
    orderBy?: ContactSignupOrderByWithRelationInput | ContactSignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactSignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSignups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSignups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactSignups
    **/
    _count?: true | ContactSignupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactSignupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSignupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactSignupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactSignupMaxAggregateInputType
  }

  export type GetContactSignupAggregateType<T extends ContactSignupAggregateArgs> = {
        [P in keyof T & keyof AggregateContactSignup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactSignup[P]>
      : GetScalarType<T[P], AggregateContactSignup[P]>
  }




  export type ContactSignupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactSignupWhereInput
    orderBy?: ContactSignupOrderByWithAggregationInput | ContactSignupOrderByWithAggregationInput[]
    by: ContactSignupScalarFieldEnum[] | ContactSignupScalarFieldEnum
    having?: ContactSignupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactSignupCountAggregateInputType | true
    _avg?: ContactSignupAvgAggregateInputType
    _sum?: ContactSignupSumAggregateInputType
    _min?: ContactSignupMinAggregateInputType
    _max?: ContactSignupMaxAggregateInputType
  }

  export type ContactSignupGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    message: string
    _count: ContactSignupCountAggregateOutputType | null
    _avg: ContactSignupAvgAggregateOutputType | null
    _sum: ContactSignupSumAggregateOutputType | null
    _min: ContactSignupMinAggregateOutputType | null
    _max: ContactSignupMaxAggregateOutputType | null
  }

  type GetContactSignupGroupByPayload<T extends ContactSignupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactSignupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactSignupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactSignupGroupByOutputType[P]>
            : GetScalarType<T[P], ContactSignupGroupByOutputType[P]>
        }
      >
    >


  export type ContactSignupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    message?: boolean
  }, ExtArgs["result"]["contactSignup"]>

  export type ContactSignupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    message?: boolean
  }, ExtArgs["result"]["contactSignup"]>

  export type ContactSignupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    message?: boolean
  }, ExtArgs["result"]["contactSignup"]>

  export type ContactSignupSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    message?: boolean
  }

  export type ContactSignupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "message", ExtArgs["result"]["contactSignup"]>

  export type $ContactSignupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactSignup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      message: string
    }, ExtArgs["result"]["contactSignup"]>
    composites: {}
  }

  type ContactSignupGetPayload<S extends boolean | null | undefined | ContactSignupDefaultArgs> = $Result.GetResult<Prisma.$ContactSignupPayload, S>

  type ContactSignupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactSignupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactSignupCountAggregateInputType | true
    }

  export interface ContactSignupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactSignup'], meta: { name: 'ContactSignup' } }
    /**
     * Find zero or one ContactSignup that matches the filter.
     * @param {ContactSignupFindUniqueArgs} args - Arguments to find a ContactSignup
     * @example
     * // Get one ContactSignup
     * const contactSignup = await prisma.contactSignup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactSignupFindUniqueArgs>(args: SelectSubset<T, ContactSignupFindUniqueArgs<ExtArgs>>): Prisma__ContactSignupClient<$Result.GetResult<Prisma.$ContactSignupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactSignup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactSignupFindUniqueOrThrowArgs} args - Arguments to find a ContactSignup
     * @example
     * // Get one ContactSignup
     * const contactSignup = await prisma.contactSignup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactSignupFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactSignupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactSignupClient<$Result.GetResult<Prisma.$ContactSignupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactSignup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSignupFindFirstArgs} args - Arguments to find a ContactSignup
     * @example
     * // Get one ContactSignup
     * const contactSignup = await prisma.contactSignup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactSignupFindFirstArgs>(args?: SelectSubset<T, ContactSignupFindFirstArgs<ExtArgs>>): Prisma__ContactSignupClient<$Result.GetResult<Prisma.$ContactSignupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactSignup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSignupFindFirstOrThrowArgs} args - Arguments to find a ContactSignup
     * @example
     * // Get one ContactSignup
     * const contactSignup = await prisma.contactSignup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactSignupFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactSignupFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactSignupClient<$Result.GetResult<Prisma.$ContactSignupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactSignups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSignupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactSignups
     * const contactSignups = await prisma.contactSignup.findMany()
     * 
     * // Get first 10 ContactSignups
     * const contactSignups = await prisma.contactSignup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactSignupWithIdOnly = await prisma.contactSignup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactSignupFindManyArgs>(args?: SelectSubset<T, ContactSignupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSignupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactSignup.
     * @param {ContactSignupCreateArgs} args - Arguments to create a ContactSignup.
     * @example
     * // Create one ContactSignup
     * const ContactSignup = await prisma.contactSignup.create({
     *   data: {
     *     // ... data to create a ContactSignup
     *   }
     * })
     * 
     */
    create<T extends ContactSignupCreateArgs>(args: SelectSubset<T, ContactSignupCreateArgs<ExtArgs>>): Prisma__ContactSignupClient<$Result.GetResult<Prisma.$ContactSignupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactSignups.
     * @param {ContactSignupCreateManyArgs} args - Arguments to create many ContactSignups.
     * @example
     * // Create many ContactSignups
     * const contactSignup = await prisma.contactSignup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactSignupCreateManyArgs>(args?: SelectSubset<T, ContactSignupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactSignups and returns the data saved in the database.
     * @param {ContactSignupCreateManyAndReturnArgs} args - Arguments to create many ContactSignups.
     * @example
     * // Create many ContactSignups
     * const contactSignup = await prisma.contactSignup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactSignups and only return the `id`
     * const contactSignupWithIdOnly = await prisma.contactSignup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactSignupCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactSignupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSignupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactSignup.
     * @param {ContactSignupDeleteArgs} args - Arguments to delete one ContactSignup.
     * @example
     * // Delete one ContactSignup
     * const ContactSignup = await prisma.contactSignup.delete({
     *   where: {
     *     // ... filter to delete one ContactSignup
     *   }
     * })
     * 
     */
    delete<T extends ContactSignupDeleteArgs>(args: SelectSubset<T, ContactSignupDeleteArgs<ExtArgs>>): Prisma__ContactSignupClient<$Result.GetResult<Prisma.$ContactSignupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactSignup.
     * @param {ContactSignupUpdateArgs} args - Arguments to update one ContactSignup.
     * @example
     * // Update one ContactSignup
     * const contactSignup = await prisma.contactSignup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactSignupUpdateArgs>(args: SelectSubset<T, ContactSignupUpdateArgs<ExtArgs>>): Prisma__ContactSignupClient<$Result.GetResult<Prisma.$ContactSignupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactSignups.
     * @param {ContactSignupDeleteManyArgs} args - Arguments to filter ContactSignups to delete.
     * @example
     * // Delete a few ContactSignups
     * const { count } = await prisma.contactSignup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactSignupDeleteManyArgs>(args?: SelectSubset<T, ContactSignupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactSignups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSignupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactSignups
     * const contactSignup = await prisma.contactSignup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactSignupUpdateManyArgs>(args: SelectSubset<T, ContactSignupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactSignups and returns the data updated in the database.
     * @param {ContactSignupUpdateManyAndReturnArgs} args - Arguments to update many ContactSignups.
     * @example
     * // Update many ContactSignups
     * const contactSignup = await prisma.contactSignup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactSignups and only return the `id`
     * const contactSignupWithIdOnly = await prisma.contactSignup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactSignupUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactSignupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSignupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactSignup.
     * @param {ContactSignupUpsertArgs} args - Arguments to update or create a ContactSignup.
     * @example
     * // Update or create a ContactSignup
     * const contactSignup = await prisma.contactSignup.upsert({
     *   create: {
     *     // ... data to create a ContactSignup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactSignup we want to update
     *   }
     * })
     */
    upsert<T extends ContactSignupUpsertArgs>(args: SelectSubset<T, ContactSignupUpsertArgs<ExtArgs>>): Prisma__ContactSignupClient<$Result.GetResult<Prisma.$ContactSignupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactSignups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSignupCountArgs} args - Arguments to filter ContactSignups to count.
     * @example
     * // Count the number of ContactSignups
     * const count = await prisma.contactSignup.count({
     *   where: {
     *     // ... the filter for the ContactSignups we want to count
     *   }
     * })
    **/
    count<T extends ContactSignupCountArgs>(
      args?: Subset<T, ContactSignupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactSignupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactSignup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSignupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactSignupAggregateArgs>(args: Subset<T, ContactSignupAggregateArgs>): Prisma.PrismaPromise<GetContactSignupAggregateType<T>>

    /**
     * Group by ContactSignup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSignupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactSignupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactSignupGroupByArgs['orderBy'] }
        : { orderBy?: ContactSignupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactSignupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactSignupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactSignup model
   */
  readonly fields: ContactSignupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactSignup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactSignupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactSignup model
   */
  interface ContactSignupFieldRefs {
    readonly id: FieldRef<"ContactSignup", 'Int'>
    readonly firstName: FieldRef<"ContactSignup", 'String'>
    readonly lastName: FieldRef<"ContactSignup", 'String'>
    readonly email: FieldRef<"ContactSignup", 'String'>
    readonly message: FieldRef<"ContactSignup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContactSignup findUnique
   */
  export type ContactSignupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSignup
     */
    select?: ContactSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSignup
     */
    omit?: ContactSignupOmit<ExtArgs> | null
    /**
     * Filter, which ContactSignup to fetch.
     */
    where: ContactSignupWhereUniqueInput
  }

  /**
   * ContactSignup findUniqueOrThrow
   */
  export type ContactSignupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSignup
     */
    select?: ContactSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSignup
     */
    omit?: ContactSignupOmit<ExtArgs> | null
    /**
     * Filter, which ContactSignup to fetch.
     */
    where: ContactSignupWhereUniqueInput
  }

  /**
   * ContactSignup findFirst
   */
  export type ContactSignupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSignup
     */
    select?: ContactSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSignup
     */
    omit?: ContactSignupOmit<ExtArgs> | null
    /**
     * Filter, which ContactSignup to fetch.
     */
    where?: ContactSignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSignups to fetch.
     */
    orderBy?: ContactSignupOrderByWithRelationInput | ContactSignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactSignups.
     */
    cursor?: ContactSignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSignups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSignups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSignups.
     */
    distinct?: ContactSignupScalarFieldEnum | ContactSignupScalarFieldEnum[]
  }

  /**
   * ContactSignup findFirstOrThrow
   */
  export type ContactSignupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSignup
     */
    select?: ContactSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSignup
     */
    omit?: ContactSignupOmit<ExtArgs> | null
    /**
     * Filter, which ContactSignup to fetch.
     */
    where?: ContactSignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSignups to fetch.
     */
    orderBy?: ContactSignupOrderByWithRelationInput | ContactSignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactSignups.
     */
    cursor?: ContactSignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSignups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSignups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSignups.
     */
    distinct?: ContactSignupScalarFieldEnum | ContactSignupScalarFieldEnum[]
  }

  /**
   * ContactSignup findMany
   */
  export type ContactSignupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSignup
     */
    select?: ContactSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSignup
     */
    omit?: ContactSignupOmit<ExtArgs> | null
    /**
     * Filter, which ContactSignups to fetch.
     */
    where?: ContactSignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSignups to fetch.
     */
    orderBy?: ContactSignupOrderByWithRelationInput | ContactSignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactSignups.
     */
    cursor?: ContactSignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSignups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSignups.
     */
    skip?: number
    distinct?: ContactSignupScalarFieldEnum | ContactSignupScalarFieldEnum[]
  }

  /**
   * ContactSignup create
   */
  export type ContactSignupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSignup
     */
    select?: ContactSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSignup
     */
    omit?: ContactSignupOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactSignup.
     */
    data: XOR<ContactSignupCreateInput, ContactSignupUncheckedCreateInput>
  }

  /**
   * ContactSignup createMany
   */
  export type ContactSignupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactSignups.
     */
    data: ContactSignupCreateManyInput | ContactSignupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactSignup createManyAndReturn
   */
  export type ContactSignupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSignup
     */
    select?: ContactSignupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSignup
     */
    omit?: ContactSignupOmit<ExtArgs> | null
    /**
     * The data used to create many ContactSignups.
     */
    data: ContactSignupCreateManyInput | ContactSignupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactSignup update
   */
  export type ContactSignupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSignup
     */
    select?: ContactSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSignup
     */
    omit?: ContactSignupOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactSignup.
     */
    data: XOR<ContactSignupUpdateInput, ContactSignupUncheckedUpdateInput>
    /**
     * Choose, which ContactSignup to update.
     */
    where: ContactSignupWhereUniqueInput
  }

  /**
   * ContactSignup updateMany
   */
  export type ContactSignupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactSignups.
     */
    data: XOR<ContactSignupUpdateManyMutationInput, ContactSignupUncheckedUpdateManyInput>
    /**
     * Filter which ContactSignups to update
     */
    where?: ContactSignupWhereInput
    /**
     * Limit how many ContactSignups to update.
     */
    limit?: number
  }

  /**
   * ContactSignup updateManyAndReturn
   */
  export type ContactSignupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSignup
     */
    select?: ContactSignupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSignup
     */
    omit?: ContactSignupOmit<ExtArgs> | null
    /**
     * The data used to update ContactSignups.
     */
    data: XOR<ContactSignupUpdateManyMutationInput, ContactSignupUncheckedUpdateManyInput>
    /**
     * Filter which ContactSignups to update
     */
    where?: ContactSignupWhereInput
    /**
     * Limit how many ContactSignups to update.
     */
    limit?: number
  }

  /**
   * ContactSignup upsert
   */
  export type ContactSignupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSignup
     */
    select?: ContactSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSignup
     */
    omit?: ContactSignupOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactSignup to update in case it exists.
     */
    where: ContactSignupWhereUniqueInput
    /**
     * In case the ContactSignup found by the `where` argument doesn't exist, create a new ContactSignup with this data.
     */
    create: XOR<ContactSignupCreateInput, ContactSignupUncheckedCreateInput>
    /**
     * In case the ContactSignup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactSignupUpdateInput, ContactSignupUncheckedUpdateInput>
  }

  /**
   * ContactSignup delete
   */
  export type ContactSignupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSignup
     */
    select?: ContactSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSignup
     */
    omit?: ContactSignupOmit<ExtArgs> | null
    /**
     * Filter which ContactSignup to delete.
     */
    where: ContactSignupWhereUniqueInput
  }

  /**
   * ContactSignup deleteMany
   */
  export type ContactSignupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactSignups to delete
     */
    where?: ContactSignupWhereInput
    /**
     * Limit how many ContactSignups to delete.
     */
    limit?: number
  }

  /**
   * ContactSignup without action
   */
  export type ContactSignupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSignup
     */
    select?: ContactSignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSignup
     */
    omit?: ContactSignupOmit<ExtArgs> | null
  }


  /**
   * Model NewsLetter
   */

  export type AggregateNewsLetter = {
    _count: NewsLetterCountAggregateOutputType | null
    _avg: NewsLetterAvgAggregateOutputType | null
    _sum: NewsLetterSumAggregateOutputType | null
    _min: NewsLetterMinAggregateOutputType | null
    _max: NewsLetterMaxAggregateOutputType | null
  }

  export type NewsLetterAvgAggregateOutputType = {
    id: number | null
  }

  export type NewsLetterSumAggregateOutputType = {
    id: number | null
  }

  export type NewsLetterMinAggregateOutputType = {
    id: number | null
    email: string | null
  }

  export type NewsLetterMaxAggregateOutputType = {
    id: number | null
    email: string | null
  }

  export type NewsLetterCountAggregateOutputType = {
    id: number
    email: number
    _all: number
  }


  export type NewsLetterAvgAggregateInputType = {
    id?: true
  }

  export type NewsLetterSumAggregateInputType = {
    id?: true
  }

  export type NewsLetterMinAggregateInputType = {
    id?: true
    email?: true
  }

  export type NewsLetterMaxAggregateInputType = {
    id?: true
    email?: true
  }

  export type NewsLetterCountAggregateInputType = {
    id?: true
    email?: true
    _all?: true
  }

  export type NewsLetterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsLetter to aggregate.
     */
    where?: NewsLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLetters to fetch.
     */
    orderBy?: NewsLetterOrderByWithRelationInput | NewsLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsLetters
    **/
    _count?: true | NewsLetterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsLetterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsLetterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsLetterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsLetterMaxAggregateInputType
  }

  export type GetNewsLetterAggregateType<T extends NewsLetterAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsLetter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsLetter[P]>
      : GetScalarType<T[P], AggregateNewsLetter[P]>
  }




  export type NewsLetterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsLetterWhereInput
    orderBy?: NewsLetterOrderByWithAggregationInput | NewsLetterOrderByWithAggregationInput[]
    by: NewsLetterScalarFieldEnum[] | NewsLetterScalarFieldEnum
    having?: NewsLetterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsLetterCountAggregateInputType | true
    _avg?: NewsLetterAvgAggregateInputType
    _sum?: NewsLetterSumAggregateInputType
    _min?: NewsLetterMinAggregateInputType
    _max?: NewsLetterMaxAggregateInputType
  }

  export type NewsLetterGroupByOutputType = {
    id: number
    email: string
    _count: NewsLetterCountAggregateOutputType | null
    _avg: NewsLetterAvgAggregateOutputType | null
    _sum: NewsLetterSumAggregateOutputType | null
    _min: NewsLetterMinAggregateOutputType | null
    _max: NewsLetterMaxAggregateOutputType | null
  }

  type GetNewsLetterGroupByPayload<T extends NewsLetterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsLetterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsLetterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsLetterGroupByOutputType[P]>
            : GetScalarType<T[P], NewsLetterGroupByOutputType[P]>
        }
      >
    >


  export type NewsLetterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
  }, ExtArgs["result"]["newsLetter"]>

  export type NewsLetterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
  }, ExtArgs["result"]["newsLetter"]>

  export type NewsLetterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
  }, ExtArgs["result"]["newsLetter"]>

  export type NewsLetterSelectScalar = {
    id?: boolean
    email?: boolean
  }

  export type NewsLetterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email", ExtArgs["result"]["newsLetter"]>

  export type $NewsLetterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsLetter"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
    }, ExtArgs["result"]["newsLetter"]>
    composites: {}
  }

  type NewsLetterGetPayload<S extends boolean | null | undefined | NewsLetterDefaultArgs> = $Result.GetResult<Prisma.$NewsLetterPayload, S>

  type NewsLetterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsLetterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsLetterCountAggregateInputType | true
    }

  export interface NewsLetterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsLetter'], meta: { name: 'NewsLetter' } }
    /**
     * Find zero or one NewsLetter that matches the filter.
     * @param {NewsLetterFindUniqueArgs} args - Arguments to find a NewsLetter
     * @example
     * // Get one NewsLetter
     * const newsLetter = await prisma.newsLetter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsLetterFindUniqueArgs>(args: SelectSubset<T, NewsLetterFindUniqueArgs<ExtArgs>>): Prisma__NewsLetterClient<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsLetter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsLetterFindUniqueOrThrowArgs} args - Arguments to find a NewsLetter
     * @example
     * // Get one NewsLetter
     * const newsLetter = await prisma.newsLetter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsLetterFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsLetterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsLetterClient<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsLetter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterFindFirstArgs} args - Arguments to find a NewsLetter
     * @example
     * // Get one NewsLetter
     * const newsLetter = await prisma.newsLetter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsLetterFindFirstArgs>(args?: SelectSubset<T, NewsLetterFindFirstArgs<ExtArgs>>): Prisma__NewsLetterClient<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsLetter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterFindFirstOrThrowArgs} args - Arguments to find a NewsLetter
     * @example
     * // Get one NewsLetter
     * const newsLetter = await prisma.newsLetter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsLetterFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsLetterFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsLetterClient<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsLetters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsLetters
     * const newsLetters = await prisma.newsLetter.findMany()
     * 
     * // Get first 10 NewsLetters
     * const newsLetters = await prisma.newsLetter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsLetterWithIdOnly = await prisma.newsLetter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsLetterFindManyArgs>(args?: SelectSubset<T, NewsLetterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsLetter.
     * @param {NewsLetterCreateArgs} args - Arguments to create a NewsLetter.
     * @example
     * // Create one NewsLetter
     * const NewsLetter = await prisma.newsLetter.create({
     *   data: {
     *     // ... data to create a NewsLetter
     *   }
     * })
     * 
     */
    create<T extends NewsLetterCreateArgs>(args: SelectSubset<T, NewsLetterCreateArgs<ExtArgs>>): Prisma__NewsLetterClient<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsLetters.
     * @param {NewsLetterCreateManyArgs} args - Arguments to create many NewsLetters.
     * @example
     * // Create many NewsLetters
     * const newsLetter = await prisma.newsLetter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsLetterCreateManyArgs>(args?: SelectSubset<T, NewsLetterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsLetters and returns the data saved in the database.
     * @param {NewsLetterCreateManyAndReturnArgs} args - Arguments to create many NewsLetters.
     * @example
     * // Create many NewsLetters
     * const newsLetter = await prisma.newsLetter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsLetters and only return the `id`
     * const newsLetterWithIdOnly = await prisma.newsLetter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsLetterCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsLetterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsLetter.
     * @param {NewsLetterDeleteArgs} args - Arguments to delete one NewsLetter.
     * @example
     * // Delete one NewsLetter
     * const NewsLetter = await prisma.newsLetter.delete({
     *   where: {
     *     // ... filter to delete one NewsLetter
     *   }
     * })
     * 
     */
    delete<T extends NewsLetterDeleteArgs>(args: SelectSubset<T, NewsLetterDeleteArgs<ExtArgs>>): Prisma__NewsLetterClient<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsLetter.
     * @param {NewsLetterUpdateArgs} args - Arguments to update one NewsLetter.
     * @example
     * // Update one NewsLetter
     * const newsLetter = await prisma.newsLetter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsLetterUpdateArgs>(args: SelectSubset<T, NewsLetterUpdateArgs<ExtArgs>>): Prisma__NewsLetterClient<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsLetters.
     * @param {NewsLetterDeleteManyArgs} args - Arguments to filter NewsLetters to delete.
     * @example
     * // Delete a few NewsLetters
     * const { count } = await prisma.newsLetter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsLetterDeleteManyArgs>(args?: SelectSubset<T, NewsLetterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsLetters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsLetters
     * const newsLetter = await prisma.newsLetter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsLetterUpdateManyArgs>(args: SelectSubset<T, NewsLetterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsLetters and returns the data updated in the database.
     * @param {NewsLetterUpdateManyAndReturnArgs} args - Arguments to update many NewsLetters.
     * @example
     * // Update many NewsLetters
     * const newsLetter = await prisma.newsLetter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsLetters and only return the `id`
     * const newsLetterWithIdOnly = await prisma.newsLetter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsLetterUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsLetterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsLetter.
     * @param {NewsLetterUpsertArgs} args - Arguments to update or create a NewsLetter.
     * @example
     * // Update or create a NewsLetter
     * const newsLetter = await prisma.newsLetter.upsert({
     *   create: {
     *     // ... data to create a NewsLetter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsLetter we want to update
     *   }
     * })
     */
    upsert<T extends NewsLetterUpsertArgs>(args: SelectSubset<T, NewsLetterUpsertArgs<ExtArgs>>): Prisma__NewsLetterClient<$Result.GetResult<Prisma.$NewsLetterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsLetters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterCountArgs} args - Arguments to filter NewsLetters to count.
     * @example
     * // Count the number of NewsLetters
     * const count = await prisma.newsLetter.count({
     *   where: {
     *     // ... the filter for the NewsLetters we want to count
     *   }
     * })
    **/
    count<T extends NewsLetterCountArgs>(
      args?: Subset<T, NewsLetterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsLetterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsLetter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsLetterAggregateArgs>(args: Subset<T, NewsLetterAggregateArgs>): Prisma.PrismaPromise<GetNewsLetterAggregateType<T>>

    /**
     * Group by NewsLetter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsLetterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsLetterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsLetterGroupByArgs['orderBy'] }
        : { orderBy?: NewsLetterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsLetterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsLetterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsLetter model
   */
  readonly fields: NewsLetterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsLetter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsLetterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsLetter model
   */
  interface NewsLetterFieldRefs {
    readonly id: FieldRef<"NewsLetter", 'Int'>
    readonly email: FieldRef<"NewsLetter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NewsLetter findUnique
   */
  export type NewsLetterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * Filter, which NewsLetter to fetch.
     */
    where: NewsLetterWhereUniqueInput
  }

  /**
   * NewsLetter findUniqueOrThrow
   */
  export type NewsLetterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * Filter, which NewsLetter to fetch.
     */
    where: NewsLetterWhereUniqueInput
  }

  /**
   * NewsLetter findFirst
   */
  export type NewsLetterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * Filter, which NewsLetter to fetch.
     */
    where?: NewsLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLetters to fetch.
     */
    orderBy?: NewsLetterOrderByWithRelationInput | NewsLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsLetters.
     */
    cursor?: NewsLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsLetters.
     */
    distinct?: NewsLetterScalarFieldEnum | NewsLetterScalarFieldEnum[]
  }

  /**
   * NewsLetter findFirstOrThrow
   */
  export type NewsLetterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * Filter, which NewsLetter to fetch.
     */
    where?: NewsLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLetters to fetch.
     */
    orderBy?: NewsLetterOrderByWithRelationInput | NewsLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsLetters.
     */
    cursor?: NewsLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLetters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsLetters.
     */
    distinct?: NewsLetterScalarFieldEnum | NewsLetterScalarFieldEnum[]
  }

  /**
   * NewsLetter findMany
   */
  export type NewsLetterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * Filter, which NewsLetters to fetch.
     */
    where?: NewsLetterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsLetters to fetch.
     */
    orderBy?: NewsLetterOrderByWithRelationInput | NewsLetterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsLetters.
     */
    cursor?: NewsLetterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsLetters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsLetters.
     */
    skip?: number
    distinct?: NewsLetterScalarFieldEnum | NewsLetterScalarFieldEnum[]
  }

  /**
   * NewsLetter create
   */
  export type NewsLetterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * The data needed to create a NewsLetter.
     */
    data: XOR<NewsLetterCreateInput, NewsLetterUncheckedCreateInput>
  }

  /**
   * NewsLetter createMany
   */
  export type NewsLetterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsLetters.
     */
    data: NewsLetterCreateManyInput | NewsLetterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsLetter createManyAndReturn
   */
  export type NewsLetterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * The data used to create many NewsLetters.
     */
    data: NewsLetterCreateManyInput | NewsLetterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsLetter update
   */
  export type NewsLetterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * The data needed to update a NewsLetter.
     */
    data: XOR<NewsLetterUpdateInput, NewsLetterUncheckedUpdateInput>
    /**
     * Choose, which NewsLetter to update.
     */
    where: NewsLetterWhereUniqueInput
  }

  /**
   * NewsLetter updateMany
   */
  export type NewsLetterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsLetters.
     */
    data: XOR<NewsLetterUpdateManyMutationInput, NewsLetterUncheckedUpdateManyInput>
    /**
     * Filter which NewsLetters to update
     */
    where?: NewsLetterWhereInput
    /**
     * Limit how many NewsLetters to update.
     */
    limit?: number
  }

  /**
   * NewsLetter updateManyAndReturn
   */
  export type NewsLetterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * The data used to update NewsLetters.
     */
    data: XOR<NewsLetterUpdateManyMutationInput, NewsLetterUncheckedUpdateManyInput>
    /**
     * Filter which NewsLetters to update
     */
    where?: NewsLetterWhereInput
    /**
     * Limit how many NewsLetters to update.
     */
    limit?: number
  }

  /**
   * NewsLetter upsert
   */
  export type NewsLetterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * The filter to search for the NewsLetter to update in case it exists.
     */
    where: NewsLetterWhereUniqueInput
    /**
     * In case the NewsLetter found by the `where` argument doesn't exist, create a new NewsLetter with this data.
     */
    create: XOR<NewsLetterCreateInput, NewsLetterUncheckedCreateInput>
    /**
     * In case the NewsLetter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsLetterUpdateInput, NewsLetterUncheckedUpdateInput>
  }

  /**
   * NewsLetter delete
   */
  export type NewsLetterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
    /**
     * Filter which NewsLetter to delete.
     */
    where: NewsLetterWhereUniqueInput
  }

  /**
   * NewsLetter deleteMany
   */
  export type NewsLetterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsLetters to delete
     */
    where?: NewsLetterWhereInput
    /**
     * Limit how many NewsLetters to delete.
     */
    limit?: number
  }

  /**
   * NewsLetter without action
   */
  export type NewsLetterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsLetter
     */
    select?: NewsLetterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsLetter
     */
    omit?: NewsLetterOmit<ExtArgs> | null
  }


  /**
   * Model Faq
   */

  export type AggregateFaq = {
    _count: FaqCountAggregateOutputType | null
    _avg: FaqAvgAggregateOutputType | null
    _sum: FaqSumAggregateOutputType | null
    _min: FaqMinAggregateOutputType | null
    _max: FaqMaxAggregateOutputType | null
  }

  export type FaqAvgAggregateOutputType = {
    Id: number | null
  }

  export type FaqSumAggregateOutputType = {
    Id: number | null
  }

  export type FaqMinAggregateOutputType = {
    Id: number | null
    question: string | null
    answer: string | null
  }

  export type FaqMaxAggregateOutputType = {
    Id: number | null
    question: string | null
    answer: string | null
  }

  export type FaqCountAggregateOutputType = {
    Id: number
    question: number
    answer: number
    _all: number
  }


  export type FaqAvgAggregateInputType = {
    Id?: true
  }

  export type FaqSumAggregateInputType = {
    Id?: true
  }

  export type FaqMinAggregateInputType = {
    Id?: true
    question?: true
    answer?: true
  }

  export type FaqMaxAggregateInputType = {
    Id?: true
    question?: true
    answer?: true
  }

  export type FaqCountAggregateInputType = {
    Id?: true
    question?: true
    answer?: true
    _all?: true
  }

  export type FaqAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faq to aggregate.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faqs
    **/
    _count?: true | FaqCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FaqAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FaqSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaqMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaqMaxAggregateInputType
  }

  export type GetFaqAggregateType<T extends FaqAggregateArgs> = {
        [P in keyof T & keyof AggregateFaq]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaq[P]>
      : GetScalarType<T[P], AggregateFaq[P]>
  }




  export type FaqGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaqWhereInput
    orderBy?: FaqOrderByWithAggregationInput | FaqOrderByWithAggregationInput[]
    by: FaqScalarFieldEnum[] | FaqScalarFieldEnum
    having?: FaqScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaqCountAggregateInputType | true
    _avg?: FaqAvgAggregateInputType
    _sum?: FaqSumAggregateInputType
    _min?: FaqMinAggregateInputType
    _max?: FaqMaxAggregateInputType
  }

  export type FaqGroupByOutputType = {
    Id: number
    question: string
    answer: string
    _count: FaqCountAggregateOutputType | null
    _avg: FaqAvgAggregateOutputType | null
    _sum: FaqSumAggregateOutputType | null
    _min: FaqMinAggregateOutputType | null
    _max: FaqMaxAggregateOutputType | null
  }

  type GetFaqGroupByPayload<T extends FaqGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaqGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaqGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaqGroupByOutputType[P]>
            : GetScalarType<T[P], FaqGroupByOutputType[P]>
        }
      >
    >


  export type FaqSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    question?: boolean
    answer?: boolean
  }, ExtArgs["result"]["faq"]>

  export type FaqSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    question?: boolean
    answer?: boolean
  }, ExtArgs["result"]["faq"]>

  export type FaqSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    question?: boolean
    answer?: boolean
  }, ExtArgs["result"]["faq"]>

  export type FaqSelectScalar = {
    Id?: boolean
    question?: boolean
    answer?: boolean
  }

  export type FaqOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Id" | "question" | "answer", ExtArgs["result"]["faq"]>

  export type $FaqPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Faq"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      question: string
      answer: string
    }, ExtArgs["result"]["faq"]>
    composites: {}
  }

  type FaqGetPayload<S extends boolean | null | undefined | FaqDefaultArgs> = $Result.GetResult<Prisma.$FaqPayload, S>

  type FaqCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FaqFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FaqCountAggregateInputType | true
    }

  export interface FaqDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Faq'], meta: { name: 'Faq' } }
    /**
     * Find zero or one Faq that matches the filter.
     * @param {FaqFindUniqueArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FaqFindUniqueArgs>(args: SelectSubset<T, FaqFindUniqueArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Faq that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FaqFindUniqueOrThrowArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FaqFindUniqueOrThrowArgs>(args: SelectSubset<T, FaqFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faq that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindFirstArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FaqFindFirstArgs>(args?: SelectSubset<T, FaqFindFirstArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faq that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindFirstOrThrowArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FaqFindFirstOrThrowArgs>(args?: SelectSubset<T, FaqFindFirstOrThrowArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faqs
     * const faqs = await prisma.faq.findMany()
     * 
     * // Get first 10 Faqs
     * const faqs = await prisma.faq.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const faqWithIdOnly = await prisma.faq.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends FaqFindManyArgs>(args?: SelectSubset<T, FaqFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Faq.
     * @param {FaqCreateArgs} args - Arguments to create a Faq.
     * @example
     * // Create one Faq
     * const Faq = await prisma.faq.create({
     *   data: {
     *     // ... data to create a Faq
     *   }
     * })
     * 
     */
    create<T extends FaqCreateArgs>(args: SelectSubset<T, FaqCreateArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faqs.
     * @param {FaqCreateManyArgs} args - Arguments to create many Faqs.
     * @example
     * // Create many Faqs
     * const faq = await prisma.faq.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FaqCreateManyArgs>(args?: SelectSubset<T, FaqCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Faqs and returns the data saved in the database.
     * @param {FaqCreateManyAndReturnArgs} args - Arguments to create many Faqs.
     * @example
     * // Create many Faqs
     * const faq = await prisma.faq.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Faqs and only return the `Id`
     * const faqWithIdOnly = await prisma.faq.createManyAndReturn({
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FaqCreateManyAndReturnArgs>(args?: SelectSubset<T, FaqCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Faq.
     * @param {FaqDeleteArgs} args - Arguments to delete one Faq.
     * @example
     * // Delete one Faq
     * const Faq = await prisma.faq.delete({
     *   where: {
     *     // ... filter to delete one Faq
     *   }
     * })
     * 
     */
    delete<T extends FaqDeleteArgs>(args: SelectSubset<T, FaqDeleteArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Faq.
     * @param {FaqUpdateArgs} args - Arguments to update one Faq.
     * @example
     * // Update one Faq
     * const faq = await prisma.faq.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FaqUpdateArgs>(args: SelectSubset<T, FaqUpdateArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faqs.
     * @param {FaqDeleteManyArgs} args - Arguments to filter Faqs to delete.
     * @example
     * // Delete a few Faqs
     * const { count } = await prisma.faq.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FaqDeleteManyArgs>(args?: SelectSubset<T, FaqDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faqs
     * const faq = await prisma.faq.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FaqUpdateManyArgs>(args: SelectSubset<T, FaqUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faqs and returns the data updated in the database.
     * @param {FaqUpdateManyAndReturnArgs} args - Arguments to update many Faqs.
     * @example
     * // Update many Faqs
     * const faq = await prisma.faq.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Faqs and only return the `Id`
     * const faqWithIdOnly = await prisma.faq.updateManyAndReturn({
     *   select: { Id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FaqUpdateManyAndReturnArgs>(args: SelectSubset<T, FaqUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Faq.
     * @param {FaqUpsertArgs} args - Arguments to update or create a Faq.
     * @example
     * // Update or create a Faq
     * const faq = await prisma.faq.upsert({
     *   create: {
     *     // ... data to create a Faq
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faq we want to update
     *   }
     * })
     */
    upsert<T extends FaqUpsertArgs>(args: SelectSubset<T, FaqUpsertArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqCountArgs} args - Arguments to filter Faqs to count.
     * @example
     * // Count the number of Faqs
     * const count = await prisma.faq.count({
     *   where: {
     *     // ... the filter for the Faqs we want to count
     *   }
     * })
    **/
    count<T extends FaqCountArgs>(
      args?: Subset<T, FaqCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaqCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FaqAggregateArgs>(args: Subset<T, FaqAggregateArgs>): Prisma.PrismaPromise<GetFaqAggregateType<T>>

    /**
     * Group by Faq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FaqGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FaqGroupByArgs['orderBy'] }
        : { orderBy?: FaqGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FaqGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaqGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Faq model
   */
  readonly fields: FaqFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Faq.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FaqClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Faq model
   */
  interface FaqFieldRefs {
    readonly Id: FieldRef<"Faq", 'Int'>
    readonly question: FieldRef<"Faq", 'String'>
    readonly answer: FieldRef<"Faq", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Faq findUnique
   */
  export type FaqFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq findUniqueOrThrow
   */
  export type FaqFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq findFirst
   */
  export type FaqFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faqs.
     */
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq findFirstOrThrow
   */
  export type FaqFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faqs.
     */
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq findMany
   */
  export type FaqFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faqs to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq create
   */
  export type FaqCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The data needed to create a Faq.
     */
    data: XOR<FaqCreateInput, FaqUncheckedCreateInput>
  }

  /**
   * Faq createMany
   */
  export type FaqCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faqs.
     */
    data: FaqCreateManyInput | FaqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faq createManyAndReturn
   */
  export type FaqCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The data used to create many Faqs.
     */
    data: FaqCreateManyInput | FaqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faq update
   */
  export type FaqUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The data needed to update a Faq.
     */
    data: XOR<FaqUpdateInput, FaqUncheckedUpdateInput>
    /**
     * Choose, which Faq to update.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq updateMany
   */
  export type FaqUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faqs.
     */
    data: XOR<FaqUpdateManyMutationInput, FaqUncheckedUpdateManyInput>
    /**
     * Filter which Faqs to update
     */
    where?: FaqWhereInput
    /**
     * Limit how many Faqs to update.
     */
    limit?: number
  }

  /**
   * Faq updateManyAndReturn
   */
  export type FaqUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The data used to update Faqs.
     */
    data: XOR<FaqUpdateManyMutationInput, FaqUncheckedUpdateManyInput>
    /**
     * Filter which Faqs to update
     */
    where?: FaqWhereInput
    /**
     * Limit how many Faqs to update.
     */
    limit?: number
  }

  /**
   * Faq upsert
   */
  export type FaqUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The filter to search for the Faq to update in case it exists.
     */
    where: FaqWhereUniqueInput
    /**
     * In case the Faq found by the `where` argument doesn't exist, create a new Faq with this data.
     */
    create: XOR<FaqCreateInput, FaqUncheckedCreateInput>
    /**
     * In case the Faq was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FaqUpdateInput, FaqUncheckedUpdateInput>
  }

  /**
   * Faq delete
   */
  export type FaqDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter which Faq to delete.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq deleteMany
   */
  export type FaqDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faqs to delete
     */
    where?: FaqWhereInput
    /**
     * Limit how many Faqs to delete.
     */
    limit?: number
  }

  /**
   * Faq without action
   */
  export type FaqDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ColorScalarFieldEnum: {
    id: 'id',
    colorHex: 'colorHex',
    colorName: 'colorName',
    productId: 'productId'
  };

  export type ColorScalarFieldEnum = (typeof ColorScalarFieldEnum)[keyof typeof ColorScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    status: 'status',
    size: 'size',
    title: 'title',
    price: 'price',
    description: 'description',
    productDetails: 'productDetails',
    productCare: 'productCare',
    images: 'images',
    inventory: 'inventory',
    gender: 'gender'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductCartDetailesScalarFieldEnum: {
    id: 'id',
    selectedColorName: 'selectedColorName',
    selectedColor: 'selectedColor',
    size: 'size',
    quantity: 'quantity',
    accountId: 'accountId',
    productId: 'productId'
  };

  export type ProductCartDetailesScalarFieldEnum = (typeof ProductCartDetailesScalarFieldEnum)[keyof typeof ProductCartDetailesScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    permission: 'permission'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const HeartScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId'
  };

  export type HeartScalarFieldEnum = (typeof HeartScalarFieldEnum)[keyof typeof HeartScalarFieldEnum]


  export const ContactSignupScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    message: 'message'
  };

  export type ContactSignupScalarFieldEnum = (typeof ContactSignupScalarFieldEnum)[keyof typeof ContactSignupScalarFieldEnum]


  export const NewsLetterScalarFieldEnum: {
    id: 'id',
    email: 'email'
  };

  export type NewsLetterScalarFieldEnum = (typeof NewsLetterScalarFieldEnum)[keyof typeof NewsLetterScalarFieldEnum]


  export const FaqScalarFieldEnum: {
    Id: 'Id',
    question: 'question',
    answer: 'answer'
  };

  export type FaqScalarFieldEnum = (typeof FaqScalarFieldEnum)[keyof typeof FaqScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ColorWhereInput = {
    AND?: ColorWhereInput | ColorWhereInput[]
    OR?: ColorWhereInput[]
    NOT?: ColorWhereInput | ColorWhereInput[]
    id?: IntFilter<"Color"> | number
    colorHex?: StringFilter<"Color"> | string
    colorName?: StringFilter<"Color"> | string
    productId?: IntFilter<"Color"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ColorOrderByWithRelationInput = {
    id?: SortOrder
    colorHex?: SortOrder
    colorName?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ColorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ColorWhereInput | ColorWhereInput[]
    OR?: ColorWhereInput[]
    NOT?: ColorWhereInput | ColorWhereInput[]
    colorHex?: StringFilter<"Color"> | string
    colorName?: StringFilter<"Color"> | string
    productId?: IntFilter<"Color"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ColorOrderByWithAggregationInput = {
    id?: SortOrder
    colorHex?: SortOrder
    colorName?: SortOrder
    productId?: SortOrder
    _count?: ColorCountOrderByAggregateInput
    _avg?: ColorAvgOrderByAggregateInput
    _max?: ColorMaxOrderByAggregateInput
    _min?: ColorMinOrderByAggregateInput
    _sum?: ColorSumOrderByAggregateInput
  }

  export type ColorScalarWhereWithAggregatesInput = {
    AND?: ColorScalarWhereWithAggregatesInput | ColorScalarWhereWithAggregatesInput[]
    OR?: ColorScalarWhereWithAggregatesInput[]
    NOT?: ColorScalarWhereWithAggregatesInput | ColorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Color"> | number
    colorHex?: StringWithAggregatesFilter<"Color"> | string
    colorName?: StringWithAggregatesFilter<"Color"> | string
    productId?: IntWithAggregatesFilter<"Color"> | number
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    status?: StringFilter<"Product"> | string
    size?: StringNullableListFilter<"Product">
    title?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    description?: StringFilter<"Product"> | string
    productDetails?: StringFilter<"Product"> | string
    productCare?: StringFilter<"Product"> | string
    images?: StringNullableListFilter<"Product">
    inventory?: IntFilter<"Product"> | number
    gender?: EnumGenderNullableFilter<"Product"> | $Enums.Gender | null
    colors?: ColorListRelationFilter
    cartDetails?: ProductCartDetailesListRelationFilter
    hearts?: HeartListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    size?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrder
    productDetails?: SortOrder
    productCare?: SortOrder
    images?: SortOrder
    inventory?: SortOrder
    gender?: SortOrderInput | SortOrder
    colors?: ColorOrderByRelationAggregateInput
    cartDetails?: ProductCartDetailesOrderByRelationAggregateInput
    hearts?: HeartOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    status?: StringFilter<"Product"> | string
    size?: StringNullableListFilter<"Product">
    title?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    description?: StringFilter<"Product"> | string
    productDetails?: StringFilter<"Product"> | string
    productCare?: StringFilter<"Product"> | string
    images?: StringNullableListFilter<"Product">
    inventory?: IntFilter<"Product"> | number
    gender?: EnumGenderNullableFilter<"Product"> | $Enums.Gender | null
    colors?: ColorListRelationFilter
    cartDetails?: ProductCartDetailesListRelationFilter
    hearts?: HeartListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    size?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrder
    productDetails?: SortOrder
    productCare?: SortOrder
    images?: SortOrder
    inventory?: SortOrder
    gender?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    status?: StringWithAggregatesFilter<"Product"> | string
    size?: StringNullableListFilter<"Product">
    title?: StringWithAggregatesFilter<"Product"> | string
    price?: IntWithAggregatesFilter<"Product"> | number
    description?: StringWithAggregatesFilter<"Product"> | string
    productDetails?: StringWithAggregatesFilter<"Product"> | string
    productCare?: StringWithAggregatesFilter<"Product"> | string
    images?: StringNullableListFilter<"Product">
    inventory?: IntWithAggregatesFilter<"Product"> | number
    gender?: EnumGenderNullableWithAggregatesFilter<"Product"> | $Enums.Gender | null
  }

  export type ProductCartDetailesWhereInput = {
    AND?: ProductCartDetailesWhereInput | ProductCartDetailesWhereInput[]
    OR?: ProductCartDetailesWhereInput[]
    NOT?: ProductCartDetailesWhereInput | ProductCartDetailesWhereInput[]
    id?: IntFilter<"ProductCartDetailes"> | number
    selectedColorName?: StringNullableFilter<"ProductCartDetailes"> | string | null
    selectedColor?: StringNullableFilter<"ProductCartDetailes"> | string | null
    size?: StringNullableFilter<"ProductCartDetailes"> | string | null
    quantity?: IntNullableFilter<"ProductCartDetailes"> | number | null
    accountId?: IntFilter<"ProductCartDetailes"> | number
    productId?: IntNullableFilter<"ProductCartDetailes"> | number | null
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }

  export type ProductCartDetailesOrderByWithRelationInput = {
    id?: SortOrder
    selectedColorName?: SortOrderInput | SortOrder
    selectedColor?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    accountId?: SortOrder
    productId?: SortOrderInput | SortOrder
    account?: AccountOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ProductCartDetailesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductCartDetailesWhereInput | ProductCartDetailesWhereInput[]
    OR?: ProductCartDetailesWhereInput[]
    NOT?: ProductCartDetailesWhereInput | ProductCartDetailesWhereInput[]
    selectedColorName?: StringNullableFilter<"ProductCartDetailes"> | string | null
    selectedColor?: StringNullableFilter<"ProductCartDetailes"> | string | null
    size?: StringNullableFilter<"ProductCartDetailes"> | string | null
    quantity?: IntNullableFilter<"ProductCartDetailes"> | number | null
    accountId?: IntFilter<"ProductCartDetailes"> | number
    productId?: IntNullableFilter<"ProductCartDetailes"> | number | null
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }, "id">

  export type ProductCartDetailesOrderByWithAggregationInput = {
    id?: SortOrder
    selectedColorName?: SortOrderInput | SortOrder
    selectedColor?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    accountId?: SortOrder
    productId?: SortOrderInput | SortOrder
    _count?: ProductCartDetailesCountOrderByAggregateInput
    _avg?: ProductCartDetailesAvgOrderByAggregateInput
    _max?: ProductCartDetailesMaxOrderByAggregateInput
    _min?: ProductCartDetailesMinOrderByAggregateInput
    _sum?: ProductCartDetailesSumOrderByAggregateInput
  }

  export type ProductCartDetailesScalarWhereWithAggregatesInput = {
    AND?: ProductCartDetailesScalarWhereWithAggregatesInput | ProductCartDetailesScalarWhereWithAggregatesInput[]
    OR?: ProductCartDetailesScalarWhereWithAggregatesInput[]
    NOT?: ProductCartDetailesScalarWhereWithAggregatesInput | ProductCartDetailesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductCartDetailes"> | number
    selectedColorName?: StringNullableWithAggregatesFilter<"ProductCartDetailes"> | string | null
    selectedColor?: StringNullableWithAggregatesFilter<"ProductCartDetailes"> | string | null
    size?: StringNullableWithAggregatesFilter<"ProductCartDetailes"> | string | null
    quantity?: IntNullableWithAggregatesFilter<"ProductCartDetailes"> | number | null
    accountId?: IntWithAggregatesFilter<"ProductCartDetailes"> | number
    productId?: IntNullableWithAggregatesFilter<"ProductCartDetailes"> | number | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: IntFilter<"Account"> | number
    username?: StringFilter<"Account"> | string
    email?: StringFilter<"Account"> | string
    password?: StringFilter<"Account"> | string
    permission?: EnumRoleNullableFilter<"Account"> | $Enums.Role | null
    hearts?: HeartListRelationFilter
    cart?: ProductCartDetailesListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    permission?: SortOrderInput | SortOrder
    hearts?: HeartOrderByRelationAggregateInput
    cart?: ProductCartDetailesOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    password?: StringFilter<"Account"> | string
    permission?: EnumRoleNullableFilter<"Account"> | $Enums.Role | null
    hearts?: HeartListRelationFilter
    cart?: ProductCartDetailesListRelationFilter
  }, "id" | "username" | "email">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    permission?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Account"> | number
    username?: StringWithAggregatesFilter<"Account"> | string
    email?: StringWithAggregatesFilter<"Account"> | string
    password?: StringWithAggregatesFilter<"Account"> | string
    permission?: EnumRoleNullableWithAggregatesFilter<"Account"> | $Enums.Role | null
  }

  export type HeartWhereInput = {
    AND?: HeartWhereInput | HeartWhereInput[]
    OR?: HeartWhereInput[]
    NOT?: HeartWhereInput | HeartWhereInput[]
    id?: IntFilter<"Heart"> | number
    accountId?: IntNullableFilter<"Heart"> | number | null
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    products?: ProductListRelationFilter
  }

  export type HeartOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrderInput | SortOrder
    account?: AccountOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
  }

  export type HeartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HeartWhereInput | HeartWhereInput[]
    OR?: HeartWhereInput[]
    NOT?: HeartWhereInput | HeartWhereInput[]
    accountId?: IntNullableFilter<"Heart"> | number | null
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    products?: ProductListRelationFilter
  }, "id">

  export type HeartOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrderInput | SortOrder
    _count?: HeartCountOrderByAggregateInput
    _avg?: HeartAvgOrderByAggregateInput
    _max?: HeartMaxOrderByAggregateInput
    _min?: HeartMinOrderByAggregateInput
    _sum?: HeartSumOrderByAggregateInput
  }

  export type HeartScalarWhereWithAggregatesInput = {
    AND?: HeartScalarWhereWithAggregatesInput | HeartScalarWhereWithAggregatesInput[]
    OR?: HeartScalarWhereWithAggregatesInput[]
    NOT?: HeartScalarWhereWithAggregatesInput | HeartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Heart"> | number
    accountId?: IntNullableWithAggregatesFilter<"Heart"> | number | null
  }

  export type ContactSignupWhereInput = {
    AND?: ContactSignupWhereInput | ContactSignupWhereInput[]
    OR?: ContactSignupWhereInput[]
    NOT?: ContactSignupWhereInput | ContactSignupWhereInput[]
    id?: IntFilter<"ContactSignup"> | number
    firstName?: StringFilter<"ContactSignup"> | string
    lastName?: StringFilter<"ContactSignup"> | string
    email?: StringFilter<"ContactSignup"> | string
    message?: StringFilter<"ContactSignup"> | string
  }

  export type ContactSignupOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
  }

  export type ContactSignupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactSignupWhereInput | ContactSignupWhereInput[]
    OR?: ContactSignupWhereInput[]
    NOT?: ContactSignupWhereInput | ContactSignupWhereInput[]
    firstName?: StringFilter<"ContactSignup"> | string
    lastName?: StringFilter<"ContactSignup"> | string
    email?: StringFilter<"ContactSignup"> | string
    message?: StringFilter<"ContactSignup"> | string
  }, "id">

  export type ContactSignupOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
    _count?: ContactSignupCountOrderByAggregateInput
    _avg?: ContactSignupAvgOrderByAggregateInput
    _max?: ContactSignupMaxOrderByAggregateInput
    _min?: ContactSignupMinOrderByAggregateInput
    _sum?: ContactSignupSumOrderByAggregateInput
  }

  export type ContactSignupScalarWhereWithAggregatesInput = {
    AND?: ContactSignupScalarWhereWithAggregatesInput | ContactSignupScalarWhereWithAggregatesInput[]
    OR?: ContactSignupScalarWhereWithAggregatesInput[]
    NOT?: ContactSignupScalarWhereWithAggregatesInput | ContactSignupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactSignup"> | number
    firstName?: StringWithAggregatesFilter<"ContactSignup"> | string
    lastName?: StringWithAggregatesFilter<"ContactSignup"> | string
    email?: StringWithAggregatesFilter<"ContactSignup"> | string
    message?: StringWithAggregatesFilter<"ContactSignup"> | string
  }

  export type NewsLetterWhereInput = {
    AND?: NewsLetterWhereInput | NewsLetterWhereInput[]
    OR?: NewsLetterWhereInput[]
    NOT?: NewsLetterWhereInput | NewsLetterWhereInput[]
    id?: IntFilter<"NewsLetter"> | number
    email?: StringFilter<"NewsLetter"> | string
  }

  export type NewsLetterOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type NewsLetterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: NewsLetterWhereInput | NewsLetterWhereInput[]
    OR?: NewsLetterWhereInput[]
    NOT?: NewsLetterWhereInput | NewsLetterWhereInput[]
  }, "id" | "email">

  export type NewsLetterOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    _count?: NewsLetterCountOrderByAggregateInput
    _avg?: NewsLetterAvgOrderByAggregateInput
    _max?: NewsLetterMaxOrderByAggregateInput
    _min?: NewsLetterMinOrderByAggregateInput
    _sum?: NewsLetterSumOrderByAggregateInput
  }

  export type NewsLetterScalarWhereWithAggregatesInput = {
    AND?: NewsLetterScalarWhereWithAggregatesInput | NewsLetterScalarWhereWithAggregatesInput[]
    OR?: NewsLetterScalarWhereWithAggregatesInput[]
    NOT?: NewsLetterScalarWhereWithAggregatesInput | NewsLetterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NewsLetter"> | number
    email?: StringWithAggregatesFilter<"NewsLetter"> | string
  }

  export type FaqWhereInput = {
    AND?: FaqWhereInput | FaqWhereInput[]
    OR?: FaqWhereInput[]
    NOT?: FaqWhereInput | FaqWhereInput[]
    Id?: IntFilter<"Faq"> | number
    question?: StringFilter<"Faq"> | string
    answer?: StringFilter<"Faq"> | string
  }

  export type FaqOrderByWithRelationInput = {
    Id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
  }

  export type FaqWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: FaqWhereInput | FaqWhereInput[]
    OR?: FaqWhereInput[]
    NOT?: FaqWhereInput | FaqWhereInput[]
    question?: StringFilter<"Faq"> | string
    answer?: StringFilter<"Faq"> | string
  }, "Id">

  export type FaqOrderByWithAggregationInput = {
    Id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    _count?: FaqCountOrderByAggregateInput
    _avg?: FaqAvgOrderByAggregateInput
    _max?: FaqMaxOrderByAggregateInput
    _min?: FaqMinOrderByAggregateInput
    _sum?: FaqSumOrderByAggregateInput
  }

  export type FaqScalarWhereWithAggregatesInput = {
    AND?: FaqScalarWhereWithAggregatesInput | FaqScalarWhereWithAggregatesInput[]
    OR?: FaqScalarWhereWithAggregatesInput[]
    NOT?: FaqScalarWhereWithAggregatesInput | FaqScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"Faq"> | number
    question?: StringWithAggregatesFilter<"Faq"> | string
    answer?: StringWithAggregatesFilter<"Faq"> | string
  }

  export type ColorCreateInput = {
    colorHex: string
    colorName: string
    product: ProductCreateNestedOneWithoutColorsInput
  }

  export type ColorUncheckedCreateInput = {
    id?: number
    colorHex: string
    colorName: string
    productId: number
  }

  export type ColorUpdateInput = {
    colorHex?: StringFieldUpdateOperationsInput | string
    colorName?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutColorsNestedInput
  }

  export type ColorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorHex?: StringFieldUpdateOperationsInput | string
    colorName?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ColorCreateManyInput = {
    id?: number
    colorHex: string
    colorName: string
    productId: number
  }

  export type ColorUpdateManyMutationInput = {
    colorHex?: StringFieldUpdateOperationsInput | string
    colorName?: StringFieldUpdateOperationsInput | string
  }

  export type ColorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorHex?: StringFieldUpdateOperationsInput | string
    colorName?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateInput = {
    status: string
    size?: ProductCreatesizeInput | string[]
    title: string
    price: number
    description: string
    productDetails: string
    productCare: string
    images?: ProductCreateimagesInput | string[]
    inventory?: number
    gender?: $Enums.Gender | null
    colors?: ColorCreateNestedManyWithoutProductInput
    cartDetails?: ProductCartDetailesCreateNestedManyWithoutProductInput
    hearts?: HeartCreateNestedManyWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    status: string
    size?: ProductCreatesizeInput | string[]
    title: string
    price: number
    description: string
    productDetails: string
    productCare: string
    images?: ProductCreateimagesInput | string[]
    inventory?: number
    gender?: $Enums.Gender | null
    colors?: ColorUncheckedCreateNestedManyWithoutProductInput
    cartDetails?: ProductCartDetailesUncheckedCreateNestedManyWithoutProductInput
    hearts?: HeartUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    size?: ProductUpdatesizeInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    productDetails?: StringFieldUpdateOperationsInput | string
    productCare?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    inventory?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    colors?: ColorUpdateManyWithoutProductNestedInput
    cartDetails?: ProductCartDetailesUpdateManyWithoutProductNestedInput
    hearts?: HeartUpdateManyWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    size?: ProductUpdatesizeInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    productDetails?: StringFieldUpdateOperationsInput | string
    productCare?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    inventory?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    colors?: ColorUncheckedUpdateManyWithoutProductNestedInput
    cartDetails?: ProductCartDetailesUncheckedUpdateManyWithoutProductNestedInput
    hearts?: HeartUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    status: string
    size?: ProductCreatesizeInput | string[]
    title: string
    price: number
    description: string
    productDetails: string
    productCare: string
    images?: ProductCreateimagesInput | string[]
    inventory?: number
    gender?: $Enums.Gender | null
  }

  export type ProductUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    size?: ProductUpdatesizeInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    productDetails?: StringFieldUpdateOperationsInput | string
    productCare?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    inventory?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    size?: ProductUpdatesizeInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    productDetails?: StringFieldUpdateOperationsInput | string
    productCare?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    inventory?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
  }

  export type ProductCartDetailesCreateInput = {
    selectedColorName?: string | null
    selectedColor?: string | null
    size?: string | null
    quantity?: number | null
    account: AccountCreateNestedOneWithoutCartInput
    product?: ProductCreateNestedOneWithoutCartDetailsInput
  }

  export type ProductCartDetailesUncheckedCreateInput = {
    id?: number
    selectedColorName?: string | null
    selectedColor?: string | null
    size?: string | null
    quantity?: number | null
    accountId: number
    productId?: number | null
  }

  export type ProductCartDetailesUpdateInput = {
    selectedColorName?: NullableStringFieldUpdateOperationsInput | string | null
    selectedColor?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    account?: AccountUpdateOneRequiredWithoutCartNestedInput
    product?: ProductUpdateOneWithoutCartDetailsNestedInput
  }

  export type ProductCartDetailesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    selectedColorName?: NullableStringFieldUpdateOperationsInput | string | null
    selectedColor?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    accountId?: IntFieldUpdateOperationsInput | number
    productId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCartDetailesCreateManyInput = {
    id?: number
    selectedColorName?: string | null
    selectedColor?: string | null
    size?: string | null
    quantity?: number | null
    accountId: number
    productId?: number | null
  }

  export type ProductCartDetailesUpdateManyMutationInput = {
    selectedColorName?: NullableStringFieldUpdateOperationsInput | string | null
    selectedColor?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCartDetailesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    selectedColorName?: NullableStringFieldUpdateOperationsInput | string | null
    selectedColor?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    accountId?: IntFieldUpdateOperationsInput | number
    productId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateInput = {
    username: string
    email: string
    password: string
    permission?: $Enums.Role | null
    hearts?: HeartCreateNestedManyWithoutAccountInput
    cart?: ProductCartDetailesCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    permission?: $Enums.Role | null
    hearts?: HeartUncheckedCreateNestedManyWithoutAccountInput
    cart?: ProductCartDetailesUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permission?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    hearts?: HeartUpdateManyWithoutAccountNestedInput
    cart?: ProductCartDetailesUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permission?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    hearts?: HeartUncheckedUpdateManyWithoutAccountNestedInput
    cart?: ProductCartDetailesUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    permission?: $Enums.Role | null
  }

  export type AccountUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permission?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permission?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
  }

  export type HeartCreateInput = {
    account?: AccountCreateNestedOneWithoutHeartsInput
    products?: ProductCreateNestedManyWithoutHeartsInput
  }

  export type HeartUncheckedCreateInput = {
    id?: number
    accountId?: number | null
    products?: ProductUncheckedCreateNestedManyWithoutHeartsInput
  }

  export type HeartUpdateInput = {
    account?: AccountUpdateOneWithoutHeartsNestedInput
    products?: ProductUpdateManyWithoutHeartsNestedInput
  }

  export type HeartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    products?: ProductUncheckedUpdateManyWithoutHeartsNestedInput
  }

  export type HeartCreateManyInput = {
    id?: number
    accountId?: number | null
  }

  export type HeartUpdateManyMutationInput = {

  }

  export type HeartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContactSignupCreateInput = {
    firstName: string
    lastName: string
    email: string
    message: string
  }

  export type ContactSignupUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    message: string
  }

  export type ContactSignupUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ContactSignupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ContactSignupCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    message: string
  }

  export type ContactSignupUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ContactSignupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type NewsLetterCreateInput = {
    email: string
  }

  export type NewsLetterUncheckedCreateInput = {
    id?: number
    email: string
  }

  export type NewsLetterUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
  }

  export type NewsLetterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type NewsLetterCreateManyInput = {
    id?: number
    email: string
  }

  export type NewsLetterUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
  }

  export type NewsLetterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type FaqCreateInput = {
    question: string
    answer: string
  }

  export type FaqUncheckedCreateInput = {
    Id?: number
    question: string
    answer: string
  }

  export type FaqUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type FaqUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type FaqCreateManyInput = {
    Id?: number
    question: string
    answer: string
  }

  export type FaqUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type FaqUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ColorCountOrderByAggregateInput = {
    id?: SortOrder
    colorHex?: SortOrder
    colorName?: SortOrder
    productId?: SortOrder
  }

  export type ColorAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ColorMaxOrderByAggregateInput = {
    id?: SortOrder
    colorHex?: SortOrder
    colorName?: SortOrder
    productId?: SortOrder
  }

  export type ColorMinOrderByAggregateInput = {
    id?: SortOrder
    colorHex?: SortOrder
    colorName?: SortOrder
    productId?: SortOrder
  }

  export type ColorSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type ColorListRelationFilter = {
    every?: ColorWhereInput
    some?: ColorWhereInput
    none?: ColorWhereInput
  }

  export type ProductCartDetailesListRelationFilter = {
    every?: ProductCartDetailesWhereInput
    some?: ProductCartDetailesWhereInput
    none?: ProductCartDetailesWhereInput
  }

  export type HeartListRelationFilter = {
    every?: HeartWhereInput
    some?: HeartWhereInput
    none?: HeartWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ColorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCartDetailesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HeartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    size?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrder
    productDetails?: SortOrder
    productCare?: SortOrder
    images?: SortOrder
    inventory?: SortOrder
    gender?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    inventory?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrder
    productDetails?: SortOrder
    productCare?: SortOrder
    inventory?: SortOrder
    gender?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrder
    productDetails?: SortOrder
    productCare?: SortOrder
    inventory?: SortOrder
    gender?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    inventory?: SortOrder
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type ProductCartDetailesCountOrderByAggregateInput = {
    id?: SortOrder
    selectedColorName?: SortOrder
    selectedColor?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    accountId?: SortOrder
    productId?: SortOrder
  }

  export type ProductCartDetailesAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    accountId?: SortOrder
    productId?: SortOrder
  }

  export type ProductCartDetailesMaxOrderByAggregateInput = {
    id?: SortOrder
    selectedColorName?: SortOrder
    selectedColor?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    accountId?: SortOrder
    productId?: SortOrder
  }

  export type ProductCartDetailesMinOrderByAggregateInput = {
    id?: SortOrder
    selectedColorName?: SortOrder
    selectedColor?: SortOrder
    size?: SortOrder
    quantity?: SortOrder
    accountId?: SortOrder
    productId?: SortOrder
  }

  export type ProductCartDetailesSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    accountId?: SortOrder
    productId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    permission?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    permission?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    permission?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HeartCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
  }

  export type HeartAvgOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
  }

  export type HeartMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
  }

  export type HeartMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
  }

  export type HeartSumOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
  }

  export type ContactSignupCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
  }

  export type ContactSignupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactSignupMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
  }

  export type ContactSignupMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    message?: SortOrder
  }

  export type ContactSignupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsLetterCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type NewsLetterAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NewsLetterMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type NewsLetterMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type NewsLetterSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FaqCountOrderByAggregateInput = {
    Id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
  }

  export type FaqAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type FaqMaxOrderByAggregateInput = {
    Id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
  }

  export type FaqMinOrderByAggregateInput = {
    Id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
  }

  export type FaqSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type ProductCreateNestedOneWithoutColorsInput = {
    create?: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutColorsInput
    connect?: ProductWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProductUpdateOneRequiredWithoutColorsNestedInput = {
    create?: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutColorsInput
    upsert?: ProductUpsertWithoutColorsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutColorsInput, ProductUpdateWithoutColorsInput>, ProductUncheckedUpdateWithoutColorsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductCreatesizeInput = {
    set: string[]
  }

  export type ProductCreateimagesInput = {
    set: string[]
  }

  export type ColorCreateNestedManyWithoutProductInput = {
    create?: XOR<ColorCreateWithoutProductInput, ColorUncheckedCreateWithoutProductInput> | ColorCreateWithoutProductInput[] | ColorUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ColorCreateOrConnectWithoutProductInput | ColorCreateOrConnectWithoutProductInput[]
    createMany?: ColorCreateManyProductInputEnvelope
    connect?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
  }

  export type ProductCartDetailesCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductCartDetailesCreateWithoutProductInput, ProductCartDetailesUncheckedCreateWithoutProductInput> | ProductCartDetailesCreateWithoutProductInput[] | ProductCartDetailesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCartDetailesCreateOrConnectWithoutProductInput | ProductCartDetailesCreateOrConnectWithoutProductInput[]
    createMany?: ProductCartDetailesCreateManyProductInputEnvelope
    connect?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
  }

  export type HeartCreateNestedManyWithoutProductsInput = {
    create?: XOR<HeartCreateWithoutProductsInput, HeartUncheckedCreateWithoutProductsInput> | HeartCreateWithoutProductsInput[] | HeartUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: HeartCreateOrConnectWithoutProductsInput | HeartCreateOrConnectWithoutProductsInput[]
    connect?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
  }

  export type ColorUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ColorCreateWithoutProductInput, ColorUncheckedCreateWithoutProductInput> | ColorCreateWithoutProductInput[] | ColorUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ColorCreateOrConnectWithoutProductInput | ColorCreateOrConnectWithoutProductInput[]
    createMany?: ColorCreateManyProductInputEnvelope
    connect?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
  }

  export type ProductCartDetailesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductCartDetailesCreateWithoutProductInput, ProductCartDetailesUncheckedCreateWithoutProductInput> | ProductCartDetailesCreateWithoutProductInput[] | ProductCartDetailesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCartDetailesCreateOrConnectWithoutProductInput | ProductCartDetailesCreateOrConnectWithoutProductInput[]
    createMany?: ProductCartDetailesCreateManyProductInputEnvelope
    connect?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
  }

  export type HeartUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<HeartCreateWithoutProductsInput, HeartUncheckedCreateWithoutProductsInput> | HeartCreateWithoutProductsInput[] | HeartUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: HeartCreateOrConnectWithoutProductsInput | HeartCreateOrConnectWithoutProductsInput[]
    connect?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
  }

  export type ProductUpdatesizeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type ColorUpdateManyWithoutProductNestedInput = {
    create?: XOR<ColorCreateWithoutProductInput, ColorUncheckedCreateWithoutProductInput> | ColorCreateWithoutProductInput[] | ColorUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ColorCreateOrConnectWithoutProductInput | ColorCreateOrConnectWithoutProductInput[]
    upsert?: ColorUpsertWithWhereUniqueWithoutProductInput | ColorUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ColorCreateManyProductInputEnvelope
    set?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
    disconnect?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
    delete?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
    connect?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
    update?: ColorUpdateWithWhereUniqueWithoutProductInput | ColorUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ColorUpdateManyWithWhereWithoutProductInput | ColorUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ColorScalarWhereInput | ColorScalarWhereInput[]
  }

  export type ProductCartDetailesUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductCartDetailesCreateWithoutProductInput, ProductCartDetailesUncheckedCreateWithoutProductInput> | ProductCartDetailesCreateWithoutProductInput[] | ProductCartDetailesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCartDetailesCreateOrConnectWithoutProductInput | ProductCartDetailesCreateOrConnectWithoutProductInput[]
    upsert?: ProductCartDetailesUpsertWithWhereUniqueWithoutProductInput | ProductCartDetailesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductCartDetailesCreateManyProductInputEnvelope
    set?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
    disconnect?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
    delete?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
    connect?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
    update?: ProductCartDetailesUpdateWithWhereUniqueWithoutProductInput | ProductCartDetailesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductCartDetailesUpdateManyWithWhereWithoutProductInput | ProductCartDetailesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductCartDetailesScalarWhereInput | ProductCartDetailesScalarWhereInput[]
  }

  export type HeartUpdateManyWithoutProductsNestedInput = {
    create?: XOR<HeartCreateWithoutProductsInput, HeartUncheckedCreateWithoutProductsInput> | HeartCreateWithoutProductsInput[] | HeartUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: HeartCreateOrConnectWithoutProductsInput | HeartCreateOrConnectWithoutProductsInput[]
    upsert?: HeartUpsertWithWhereUniqueWithoutProductsInput | HeartUpsertWithWhereUniqueWithoutProductsInput[]
    set?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
    disconnect?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
    delete?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
    connect?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
    update?: HeartUpdateWithWhereUniqueWithoutProductsInput | HeartUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: HeartUpdateManyWithWhereWithoutProductsInput | HeartUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: HeartScalarWhereInput | HeartScalarWhereInput[]
  }

  export type ColorUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ColorCreateWithoutProductInput, ColorUncheckedCreateWithoutProductInput> | ColorCreateWithoutProductInput[] | ColorUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ColorCreateOrConnectWithoutProductInput | ColorCreateOrConnectWithoutProductInput[]
    upsert?: ColorUpsertWithWhereUniqueWithoutProductInput | ColorUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ColorCreateManyProductInputEnvelope
    set?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
    disconnect?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
    delete?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
    connect?: ColorWhereUniqueInput | ColorWhereUniqueInput[]
    update?: ColorUpdateWithWhereUniqueWithoutProductInput | ColorUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ColorUpdateManyWithWhereWithoutProductInput | ColorUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ColorScalarWhereInput | ColorScalarWhereInput[]
  }

  export type ProductCartDetailesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductCartDetailesCreateWithoutProductInput, ProductCartDetailesUncheckedCreateWithoutProductInput> | ProductCartDetailesCreateWithoutProductInput[] | ProductCartDetailesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductCartDetailesCreateOrConnectWithoutProductInput | ProductCartDetailesCreateOrConnectWithoutProductInput[]
    upsert?: ProductCartDetailesUpsertWithWhereUniqueWithoutProductInput | ProductCartDetailesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductCartDetailesCreateManyProductInputEnvelope
    set?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
    disconnect?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
    delete?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
    connect?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
    update?: ProductCartDetailesUpdateWithWhereUniqueWithoutProductInput | ProductCartDetailesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductCartDetailesUpdateManyWithWhereWithoutProductInput | ProductCartDetailesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductCartDetailesScalarWhereInput | ProductCartDetailesScalarWhereInput[]
  }

  export type HeartUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<HeartCreateWithoutProductsInput, HeartUncheckedCreateWithoutProductsInput> | HeartCreateWithoutProductsInput[] | HeartUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: HeartCreateOrConnectWithoutProductsInput | HeartCreateOrConnectWithoutProductsInput[]
    upsert?: HeartUpsertWithWhereUniqueWithoutProductsInput | HeartUpsertWithWhereUniqueWithoutProductsInput[]
    set?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
    disconnect?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
    delete?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
    connect?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
    update?: HeartUpdateWithWhereUniqueWithoutProductsInput | HeartUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: HeartUpdateManyWithWhereWithoutProductsInput | HeartUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: HeartScalarWhereInput | HeartScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutCartInput = {
    create?: XOR<AccountCreateWithoutCartInput, AccountUncheckedCreateWithoutCartInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCartInput
    connect?: AccountWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutCartDetailsInput = {
    create?: XOR<ProductCreateWithoutCartDetailsInput, ProductUncheckedCreateWithoutCartDetailsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartDetailsInput
    connect?: ProductWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<AccountCreateWithoutCartInput, AccountUncheckedCreateWithoutCartInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCartInput
    upsert?: AccountUpsertWithoutCartInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutCartInput, AccountUpdateWithoutCartInput>, AccountUncheckedUpdateWithoutCartInput>
  }

  export type ProductUpdateOneWithoutCartDetailsNestedInput = {
    create?: XOR<ProductCreateWithoutCartDetailsInput, ProductUncheckedCreateWithoutCartDetailsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartDetailsInput
    upsert?: ProductUpsertWithoutCartDetailsInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCartDetailsInput, ProductUpdateWithoutCartDetailsInput>, ProductUncheckedUpdateWithoutCartDetailsInput>
  }

  export type HeartCreateNestedManyWithoutAccountInput = {
    create?: XOR<HeartCreateWithoutAccountInput, HeartUncheckedCreateWithoutAccountInput> | HeartCreateWithoutAccountInput[] | HeartUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: HeartCreateOrConnectWithoutAccountInput | HeartCreateOrConnectWithoutAccountInput[]
    createMany?: HeartCreateManyAccountInputEnvelope
    connect?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
  }

  export type ProductCartDetailesCreateNestedManyWithoutAccountInput = {
    create?: XOR<ProductCartDetailesCreateWithoutAccountInput, ProductCartDetailesUncheckedCreateWithoutAccountInput> | ProductCartDetailesCreateWithoutAccountInput[] | ProductCartDetailesUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ProductCartDetailesCreateOrConnectWithoutAccountInput | ProductCartDetailesCreateOrConnectWithoutAccountInput[]
    createMany?: ProductCartDetailesCreateManyAccountInputEnvelope
    connect?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
  }

  export type HeartUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<HeartCreateWithoutAccountInput, HeartUncheckedCreateWithoutAccountInput> | HeartCreateWithoutAccountInput[] | HeartUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: HeartCreateOrConnectWithoutAccountInput | HeartCreateOrConnectWithoutAccountInput[]
    createMany?: HeartCreateManyAccountInputEnvelope
    connect?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
  }

  export type ProductCartDetailesUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<ProductCartDetailesCreateWithoutAccountInput, ProductCartDetailesUncheckedCreateWithoutAccountInput> | ProductCartDetailesCreateWithoutAccountInput[] | ProductCartDetailesUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ProductCartDetailesCreateOrConnectWithoutAccountInput | ProductCartDetailesCreateOrConnectWithoutAccountInput[]
    createMany?: ProductCartDetailesCreateManyAccountInputEnvelope
    connect?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
  }

  export type NullableEnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role | null
  }

  export type HeartUpdateManyWithoutAccountNestedInput = {
    create?: XOR<HeartCreateWithoutAccountInput, HeartUncheckedCreateWithoutAccountInput> | HeartCreateWithoutAccountInput[] | HeartUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: HeartCreateOrConnectWithoutAccountInput | HeartCreateOrConnectWithoutAccountInput[]
    upsert?: HeartUpsertWithWhereUniqueWithoutAccountInput | HeartUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: HeartCreateManyAccountInputEnvelope
    set?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
    disconnect?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
    delete?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
    connect?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
    update?: HeartUpdateWithWhereUniqueWithoutAccountInput | HeartUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: HeartUpdateManyWithWhereWithoutAccountInput | HeartUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: HeartScalarWhereInput | HeartScalarWhereInput[]
  }

  export type ProductCartDetailesUpdateManyWithoutAccountNestedInput = {
    create?: XOR<ProductCartDetailesCreateWithoutAccountInput, ProductCartDetailesUncheckedCreateWithoutAccountInput> | ProductCartDetailesCreateWithoutAccountInput[] | ProductCartDetailesUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ProductCartDetailesCreateOrConnectWithoutAccountInput | ProductCartDetailesCreateOrConnectWithoutAccountInput[]
    upsert?: ProductCartDetailesUpsertWithWhereUniqueWithoutAccountInput | ProductCartDetailesUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: ProductCartDetailesCreateManyAccountInputEnvelope
    set?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
    disconnect?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
    delete?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
    connect?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
    update?: ProductCartDetailesUpdateWithWhereUniqueWithoutAccountInput | ProductCartDetailesUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: ProductCartDetailesUpdateManyWithWhereWithoutAccountInput | ProductCartDetailesUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: ProductCartDetailesScalarWhereInput | ProductCartDetailesScalarWhereInput[]
  }

  export type HeartUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<HeartCreateWithoutAccountInput, HeartUncheckedCreateWithoutAccountInput> | HeartCreateWithoutAccountInput[] | HeartUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: HeartCreateOrConnectWithoutAccountInput | HeartCreateOrConnectWithoutAccountInput[]
    upsert?: HeartUpsertWithWhereUniqueWithoutAccountInput | HeartUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: HeartCreateManyAccountInputEnvelope
    set?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
    disconnect?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
    delete?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
    connect?: HeartWhereUniqueInput | HeartWhereUniqueInput[]
    update?: HeartUpdateWithWhereUniqueWithoutAccountInput | HeartUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: HeartUpdateManyWithWhereWithoutAccountInput | HeartUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: HeartScalarWhereInput | HeartScalarWhereInput[]
  }

  export type ProductCartDetailesUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<ProductCartDetailesCreateWithoutAccountInput, ProductCartDetailesUncheckedCreateWithoutAccountInput> | ProductCartDetailesCreateWithoutAccountInput[] | ProductCartDetailesUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: ProductCartDetailesCreateOrConnectWithoutAccountInput | ProductCartDetailesCreateOrConnectWithoutAccountInput[]
    upsert?: ProductCartDetailesUpsertWithWhereUniqueWithoutAccountInput | ProductCartDetailesUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: ProductCartDetailesCreateManyAccountInputEnvelope
    set?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
    disconnect?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
    delete?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
    connect?: ProductCartDetailesWhereUniqueInput | ProductCartDetailesWhereUniqueInput[]
    update?: ProductCartDetailesUpdateWithWhereUniqueWithoutAccountInput | ProductCartDetailesUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: ProductCartDetailesUpdateManyWithWhereWithoutAccountInput | ProductCartDetailesUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: ProductCartDetailesScalarWhereInput | ProductCartDetailesScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutHeartsInput = {
    create?: XOR<AccountCreateWithoutHeartsInput, AccountUncheckedCreateWithoutHeartsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutHeartsInput
    connect?: AccountWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutHeartsInput = {
    create?: XOR<ProductCreateWithoutHeartsInput, ProductUncheckedCreateWithoutHeartsInput> | ProductCreateWithoutHeartsInput[] | ProductUncheckedCreateWithoutHeartsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutHeartsInput | ProductCreateOrConnectWithoutHeartsInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutHeartsInput = {
    create?: XOR<ProductCreateWithoutHeartsInput, ProductUncheckedCreateWithoutHeartsInput> | ProductCreateWithoutHeartsInput[] | ProductUncheckedCreateWithoutHeartsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutHeartsInput | ProductCreateOrConnectWithoutHeartsInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type AccountUpdateOneWithoutHeartsNestedInput = {
    create?: XOR<AccountCreateWithoutHeartsInput, AccountUncheckedCreateWithoutHeartsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutHeartsInput
    upsert?: AccountUpsertWithoutHeartsInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutHeartsInput, AccountUpdateWithoutHeartsInput>, AccountUncheckedUpdateWithoutHeartsInput>
  }

  export type ProductUpdateManyWithoutHeartsNestedInput = {
    create?: XOR<ProductCreateWithoutHeartsInput, ProductUncheckedCreateWithoutHeartsInput> | ProductCreateWithoutHeartsInput[] | ProductUncheckedCreateWithoutHeartsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutHeartsInput | ProductCreateOrConnectWithoutHeartsInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutHeartsInput | ProductUpsertWithWhereUniqueWithoutHeartsInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutHeartsInput | ProductUpdateWithWhereUniqueWithoutHeartsInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutHeartsInput | ProductUpdateManyWithWhereWithoutHeartsInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutHeartsNestedInput = {
    create?: XOR<ProductCreateWithoutHeartsInput, ProductUncheckedCreateWithoutHeartsInput> | ProductCreateWithoutHeartsInput[] | ProductUncheckedCreateWithoutHeartsInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutHeartsInput | ProductCreateOrConnectWithoutHeartsInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutHeartsInput | ProductUpsertWithWhereUniqueWithoutHeartsInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutHeartsInput | ProductUpdateWithWhereUniqueWithoutHeartsInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutHeartsInput | ProductUpdateManyWithWhereWithoutHeartsInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type ProductCreateWithoutColorsInput = {
    status: string
    size?: ProductCreatesizeInput | string[]
    title: string
    price: number
    description: string
    productDetails: string
    productCare: string
    images?: ProductCreateimagesInput | string[]
    inventory?: number
    gender?: $Enums.Gender | null
    cartDetails?: ProductCartDetailesCreateNestedManyWithoutProductInput
    hearts?: HeartCreateNestedManyWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutColorsInput = {
    id?: number
    status: string
    size?: ProductCreatesizeInput | string[]
    title: string
    price: number
    description: string
    productDetails: string
    productCare: string
    images?: ProductCreateimagesInput | string[]
    inventory?: number
    gender?: $Enums.Gender | null
    cartDetails?: ProductCartDetailesUncheckedCreateNestedManyWithoutProductInput
    hearts?: HeartUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductCreateOrConnectWithoutColorsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
  }

  export type ProductUpsertWithoutColorsInput = {
    update: XOR<ProductUpdateWithoutColorsInput, ProductUncheckedUpdateWithoutColorsInput>
    create: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutColorsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutColorsInput, ProductUncheckedUpdateWithoutColorsInput>
  }

  export type ProductUpdateWithoutColorsInput = {
    status?: StringFieldUpdateOperationsInput | string
    size?: ProductUpdatesizeInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    productDetails?: StringFieldUpdateOperationsInput | string
    productCare?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    inventory?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    cartDetails?: ProductCartDetailesUpdateManyWithoutProductNestedInput
    hearts?: HeartUpdateManyWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutColorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    size?: ProductUpdatesizeInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    productDetails?: StringFieldUpdateOperationsInput | string
    productCare?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    inventory?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    cartDetails?: ProductCartDetailesUncheckedUpdateManyWithoutProductNestedInput
    hearts?: HeartUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ColorCreateWithoutProductInput = {
    colorHex: string
    colorName: string
  }

  export type ColorUncheckedCreateWithoutProductInput = {
    id?: number
    colorHex: string
    colorName: string
  }

  export type ColorCreateOrConnectWithoutProductInput = {
    where: ColorWhereUniqueInput
    create: XOR<ColorCreateWithoutProductInput, ColorUncheckedCreateWithoutProductInput>
  }

  export type ColorCreateManyProductInputEnvelope = {
    data: ColorCreateManyProductInput | ColorCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductCartDetailesCreateWithoutProductInput = {
    selectedColorName?: string | null
    selectedColor?: string | null
    size?: string | null
    quantity?: number | null
    account: AccountCreateNestedOneWithoutCartInput
  }

  export type ProductCartDetailesUncheckedCreateWithoutProductInput = {
    id?: number
    selectedColorName?: string | null
    selectedColor?: string | null
    size?: string | null
    quantity?: number | null
    accountId: number
  }

  export type ProductCartDetailesCreateOrConnectWithoutProductInput = {
    where: ProductCartDetailesWhereUniqueInput
    create: XOR<ProductCartDetailesCreateWithoutProductInput, ProductCartDetailesUncheckedCreateWithoutProductInput>
  }

  export type ProductCartDetailesCreateManyProductInputEnvelope = {
    data: ProductCartDetailesCreateManyProductInput | ProductCartDetailesCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type HeartCreateWithoutProductsInput = {
    account?: AccountCreateNestedOneWithoutHeartsInput
  }

  export type HeartUncheckedCreateWithoutProductsInput = {
    id?: number
    accountId?: number | null
  }

  export type HeartCreateOrConnectWithoutProductsInput = {
    where: HeartWhereUniqueInput
    create: XOR<HeartCreateWithoutProductsInput, HeartUncheckedCreateWithoutProductsInput>
  }

  export type ColorUpsertWithWhereUniqueWithoutProductInput = {
    where: ColorWhereUniqueInput
    update: XOR<ColorUpdateWithoutProductInput, ColorUncheckedUpdateWithoutProductInput>
    create: XOR<ColorCreateWithoutProductInput, ColorUncheckedCreateWithoutProductInput>
  }

  export type ColorUpdateWithWhereUniqueWithoutProductInput = {
    where: ColorWhereUniqueInput
    data: XOR<ColorUpdateWithoutProductInput, ColorUncheckedUpdateWithoutProductInput>
  }

  export type ColorUpdateManyWithWhereWithoutProductInput = {
    where: ColorScalarWhereInput
    data: XOR<ColorUpdateManyMutationInput, ColorUncheckedUpdateManyWithoutProductInput>
  }

  export type ColorScalarWhereInput = {
    AND?: ColorScalarWhereInput | ColorScalarWhereInput[]
    OR?: ColorScalarWhereInput[]
    NOT?: ColorScalarWhereInput | ColorScalarWhereInput[]
    id?: IntFilter<"Color"> | number
    colorHex?: StringFilter<"Color"> | string
    colorName?: StringFilter<"Color"> | string
    productId?: IntFilter<"Color"> | number
  }

  export type ProductCartDetailesUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductCartDetailesWhereUniqueInput
    update: XOR<ProductCartDetailesUpdateWithoutProductInput, ProductCartDetailesUncheckedUpdateWithoutProductInput>
    create: XOR<ProductCartDetailesCreateWithoutProductInput, ProductCartDetailesUncheckedCreateWithoutProductInput>
  }

  export type ProductCartDetailesUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductCartDetailesWhereUniqueInput
    data: XOR<ProductCartDetailesUpdateWithoutProductInput, ProductCartDetailesUncheckedUpdateWithoutProductInput>
  }

  export type ProductCartDetailesUpdateManyWithWhereWithoutProductInput = {
    where: ProductCartDetailesScalarWhereInput
    data: XOR<ProductCartDetailesUpdateManyMutationInput, ProductCartDetailesUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductCartDetailesScalarWhereInput = {
    AND?: ProductCartDetailesScalarWhereInput | ProductCartDetailesScalarWhereInput[]
    OR?: ProductCartDetailesScalarWhereInput[]
    NOT?: ProductCartDetailesScalarWhereInput | ProductCartDetailesScalarWhereInput[]
    id?: IntFilter<"ProductCartDetailes"> | number
    selectedColorName?: StringNullableFilter<"ProductCartDetailes"> | string | null
    selectedColor?: StringNullableFilter<"ProductCartDetailes"> | string | null
    size?: StringNullableFilter<"ProductCartDetailes"> | string | null
    quantity?: IntNullableFilter<"ProductCartDetailes"> | number | null
    accountId?: IntFilter<"ProductCartDetailes"> | number
    productId?: IntNullableFilter<"ProductCartDetailes"> | number | null
  }

  export type HeartUpsertWithWhereUniqueWithoutProductsInput = {
    where: HeartWhereUniqueInput
    update: XOR<HeartUpdateWithoutProductsInput, HeartUncheckedUpdateWithoutProductsInput>
    create: XOR<HeartCreateWithoutProductsInput, HeartUncheckedCreateWithoutProductsInput>
  }

  export type HeartUpdateWithWhereUniqueWithoutProductsInput = {
    where: HeartWhereUniqueInput
    data: XOR<HeartUpdateWithoutProductsInput, HeartUncheckedUpdateWithoutProductsInput>
  }

  export type HeartUpdateManyWithWhereWithoutProductsInput = {
    where: HeartScalarWhereInput
    data: XOR<HeartUpdateManyMutationInput, HeartUncheckedUpdateManyWithoutProductsInput>
  }

  export type HeartScalarWhereInput = {
    AND?: HeartScalarWhereInput | HeartScalarWhereInput[]
    OR?: HeartScalarWhereInput[]
    NOT?: HeartScalarWhereInput | HeartScalarWhereInput[]
    id?: IntFilter<"Heart"> | number
    accountId?: IntNullableFilter<"Heart"> | number | null
  }

  export type AccountCreateWithoutCartInput = {
    username: string
    email: string
    password: string
    permission?: $Enums.Role | null
    hearts?: HeartCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutCartInput = {
    id?: number
    username: string
    email: string
    password: string
    permission?: $Enums.Role | null
    hearts?: HeartUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutCartInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutCartInput, AccountUncheckedCreateWithoutCartInput>
  }

  export type ProductCreateWithoutCartDetailsInput = {
    status: string
    size?: ProductCreatesizeInput | string[]
    title: string
    price: number
    description: string
    productDetails: string
    productCare: string
    images?: ProductCreateimagesInput | string[]
    inventory?: number
    gender?: $Enums.Gender | null
    colors?: ColorCreateNestedManyWithoutProductInput
    hearts?: HeartCreateNestedManyWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutCartDetailsInput = {
    id?: number
    status: string
    size?: ProductCreatesizeInput | string[]
    title: string
    price: number
    description: string
    productDetails: string
    productCare: string
    images?: ProductCreateimagesInput | string[]
    inventory?: number
    gender?: $Enums.Gender | null
    colors?: ColorUncheckedCreateNestedManyWithoutProductInput
    hearts?: HeartUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductCreateOrConnectWithoutCartDetailsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCartDetailsInput, ProductUncheckedCreateWithoutCartDetailsInput>
  }

  export type AccountUpsertWithoutCartInput = {
    update: XOR<AccountUpdateWithoutCartInput, AccountUncheckedUpdateWithoutCartInput>
    create: XOR<AccountCreateWithoutCartInput, AccountUncheckedCreateWithoutCartInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutCartInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutCartInput, AccountUncheckedUpdateWithoutCartInput>
  }

  export type AccountUpdateWithoutCartInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permission?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    hearts?: HeartUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permission?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    hearts?: HeartUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type ProductUpsertWithoutCartDetailsInput = {
    update: XOR<ProductUpdateWithoutCartDetailsInput, ProductUncheckedUpdateWithoutCartDetailsInput>
    create: XOR<ProductCreateWithoutCartDetailsInput, ProductUncheckedCreateWithoutCartDetailsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCartDetailsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCartDetailsInput, ProductUncheckedUpdateWithoutCartDetailsInput>
  }

  export type ProductUpdateWithoutCartDetailsInput = {
    status?: StringFieldUpdateOperationsInput | string
    size?: ProductUpdatesizeInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    productDetails?: StringFieldUpdateOperationsInput | string
    productCare?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    inventory?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    colors?: ColorUpdateManyWithoutProductNestedInput
    hearts?: HeartUpdateManyWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutCartDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    size?: ProductUpdatesizeInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    productDetails?: StringFieldUpdateOperationsInput | string
    productCare?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    inventory?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    colors?: ColorUncheckedUpdateManyWithoutProductNestedInput
    hearts?: HeartUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type HeartCreateWithoutAccountInput = {
    products?: ProductCreateNestedManyWithoutHeartsInput
  }

  export type HeartUncheckedCreateWithoutAccountInput = {
    id?: number
    products?: ProductUncheckedCreateNestedManyWithoutHeartsInput
  }

  export type HeartCreateOrConnectWithoutAccountInput = {
    where: HeartWhereUniqueInput
    create: XOR<HeartCreateWithoutAccountInput, HeartUncheckedCreateWithoutAccountInput>
  }

  export type HeartCreateManyAccountInputEnvelope = {
    data: HeartCreateManyAccountInput | HeartCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type ProductCartDetailesCreateWithoutAccountInput = {
    selectedColorName?: string | null
    selectedColor?: string | null
    size?: string | null
    quantity?: number | null
    product?: ProductCreateNestedOneWithoutCartDetailsInput
  }

  export type ProductCartDetailesUncheckedCreateWithoutAccountInput = {
    id?: number
    selectedColorName?: string | null
    selectedColor?: string | null
    size?: string | null
    quantity?: number | null
    productId?: number | null
  }

  export type ProductCartDetailesCreateOrConnectWithoutAccountInput = {
    where: ProductCartDetailesWhereUniqueInput
    create: XOR<ProductCartDetailesCreateWithoutAccountInput, ProductCartDetailesUncheckedCreateWithoutAccountInput>
  }

  export type ProductCartDetailesCreateManyAccountInputEnvelope = {
    data: ProductCartDetailesCreateManyAccountInput | ProductCartDetailesCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type HeartUpsertWithWhereUniqueWithoutAccountInput = {
    where: HeartWhereUniqueInput
    update: XOR<HeartUpdateWithoutAccountInput, HeartUncheckedUpdateWithoutAccountInput>
    create: XOR<HeartCreateWithoutAccountInput, HeartUncheckedCreateWithoutAccountInput>
  }

  export type HeartUpdateWithWhereUniqueWithoutAccountInput = {
    where: HeartWhereUniqueInput
    data: XOR<HeartUpdateWithoutAccountInput, HeartUncheckedUpdateWithoutAccountInput>
  }

  export type HeartUpdateManyWithWhereWithoutAccountInput = {
    where: HeartScalarWhereInput
    data: XOR<HeartUpdateManyMutationInput, HeartUncheckedUpdateManyWithoutAccountInput>
  }

  export type ProductCartDetailesUpsertWithWhereUniqueWithoutAccountInput = {
    where: ProductCartDetailesWhereUniqueInput
    update: XOR<ProductCartDetailesUpdateWithoutAccountInput, ProductCartDetailesUncheckedUpdateWithoutAccountInput>
    create: XOR<ProductCartDetailesCreateWithoutAccountInput, ProductCartDetailesUncheckedCreateWithoutAccountInput>
  }

  export type ProductCartDetailesUpdateWithWhereUniqueWithoutAccountInput = {
    where: ProductCartDetailesWhereUniqueInput
    data: XOR<ProductCartDetailesUpdateWithoutAccountInput, ProductCartDetailesUncheckedUpdateWithoutAccountInput>
  }

  export type ProductCartDetailesUpdateManyWithWhereWithoutAccountInput = {
    where: ProductCartDetailesScalarWhereInput
    data: XOR<ProductCartDetailesUpdateManyMutationInput, ProductCartDetailesUncheckedUpdateManyWithoutAccountInput>
  }

  export type AccountCreateWithoutHeartsInput = {
    username: string
    email: string
    password: string
    permission?: $Enums.Role | null
    cart?: ProductCartDetailesCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutHeartsInput = {
    id?: number
    username: string
    email: string
    password: string
    permission?: $Enums.Role | null
    cart?: ProductCartDetailesUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutHeartsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutHeartsInput, AccountUncheckedCreateWithoutHeartsInput>
  }

  export type ProductCreateWithoutHeartsInput = {
    status: string
    size?: ProductCreatesizeInput | string[]
    title: string
    price: number
    description: string
    productDetails: string
    productCare: string
    images?: ProductCreateimagesInput | string[]
    inventory?: number
    gender?: $Enums.Gender | null
    colors?: ColorCreateNestedManyWithoutProductInput
    cartDetails?: ProductCartDetailesCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutHeartsInput = {
    id?: number
    status: string
    size?: ProductCreatesizeInput | string[]
    title: string
    price: number
    description: string
    productDetails: string
    productCare: string
    images?: ProductCreateimagesInput | string[]
    inventory?: number
    gender?: $Enums.Gender | null
    colors?: ColorUncheckedCreateNestedManyWithoutProductInput
    cartDetails?: ProductCartDetailesUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutHeartsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutHeartsInput, ProductUncheckedCreateWithoutHeartsInput>
  }

  export type AccountUpsertWithoutHeartsInput = {
    update: XOR<AccountUpdateWithoutHeartsInput, AccountUncheckedUpdateWithoutHeartsInput>
    create: XOR<AccountCreateWithoutHeartsInput, AccountUncheckedCreateWithoutHeartsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutHeartsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutHeartsInput, AccountUncheckedUpdateWithoutHeartsInput>
  }

  export type AccountUpdateWithoutHeartsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permission?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    cart?: ProductCartDetailesUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutHeartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    permission?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    cart?: ProductCartDetailesUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutHeartsInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutHeartsInput, ProductUncheckedUpdateWithoutHeartsInput>
    create: XOR<ProductCreateWithoutHeartsInput, ProductUncheckedCreateWithoutHeartsInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutHeartsInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutHeartsInput, ProductUncheckedUpdateWithoutHeartsInput>
  }

  export type ProductUpdateManyWithWhereWithoutHeartsInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutHeartsInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    status?: StringFilter<"Product"> | string
    size?: StringNullableListFilter<"Product">
    title?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    description?: StringFilter<"Product"> | string
    productDetails?: StringFilter<"Product"> | string
    productCare?: StringFilter<"Product"> | string
    images?: StringNullableListFilter<"Product">
    inventory?: IntFilter<"Product"> | number
    gender?: EnumGenderNullableFilter<"Product"> | $Enums.Gender | null
  }

  export type ColorCreateManyProductInput = {
    id?: number
    colorHex: string
    colorName: string
  }

  export type ProductCartDetailesCreateManyProductInput = {
    id?: number
    selectedColorName?: string | null
    selectedColor?: string | null
    size?: string | null
    quantity?: number | null
    accountId: number
  }

  export type ColorUpdateWithoutProductInput = {
    colorHex?: StringFieldUpdateOperationsInput | string
    colorName?: StringFieldUpdateOperationsInput | string
  }

  export type ColorUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorHex?: StringFieldUpdateOperationsInput | string
    colorName?: StringFieldUpdateOperationsInput | string
  }

  export type ColorUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorHex?: StringFieldUpdateOperationsInput | string
    colorName?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCartDetailesUpdateWithoutProductInput = {
    selectedColorName?: NullableStringFieldUpdateOperationsInput | string | null
    selectedColor?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    account?: AccountUpdateOneRequiredWithoutCartNestedInput
  }

  export type ProductCartDetailesUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    selectedColorName?: NullableStringFieldUpdateOperationsInput | string | null
    selectedColor?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    accountId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCartDetailesUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    selectedColorName?: NullableStringFieldUpdateOperationsInput | string | null
    selectedColor?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    accountId?: IntFieldUpdateOperationsInput | number
  }

  export type HeartUpdateWithoutProductsInput = {
    account?: AccountUpdateOneWithoutHeartsNestedInput
  }

  export type HeartUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HeartUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HeartCreateManyAccountInput = {
    id?: number
  }

  export type ProductCartDetailesCreateManyAccountInput = {
    id?: number
    selectedColorName?: string | null
    selectedColor?: string | null
    size?: string | null
    quantity?: number | null
    productId?: number | null
  }

  export type HeartUpdateWithoutAccountInput = {
    products?: ProductUpdateManyWithoutHeartsNestedInput
  }

  export type HeartUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    products?: ProductUncheckedUpdateManyWithoutHeartsNestedInput
  }

  export type HeartUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCartDetailesUpdateWithoutAccountInput = {
    selectedColorName?: NullableStringFieldUpdateOperationsInput | string | null
    selectedColor?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    product?: ProductUpdateOneWithoutCartDetailsNestedInput
  }

  export type ProductCartDetailesUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    selectedColorName?: NullableStringFieldUpdateOperationsInput | string | null
    selectedColor?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCartDetailesUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    selectedColorName?: NullableStringFieldUpdateOperationsInput | string | null
    selectedColor?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductUpdateWithoutHeartsInput = {
    status?: StringFieldUpdateOperationsInput | string
    size?: ProductUpdatesizeInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    productDetails?: StringFieldUpdateOperationsInput | string
    productCare?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    inventory?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    colors?: ColorUpdateManyWithoutProductNestedInput
    cartDetails?: ProductCartDetailesUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutHeartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    size?: ProductUpdatesizeInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    productDetails?: StringFieldUpdateOperationsInput | string
    productCare?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    inventory?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    colors?: ColorUncheckedUpdateManyWithoutProductNestedInput
    cartDetails?: ProductCartDetailesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutHeartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    size?: ProductUpdatesizeInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    productDetails?: StringFieldUpdateOperationsInput | string
    productCare?: StringFieldUpdateOperationsInput | string
    images?: ProductUpdateimagesInput | string[]
    inventory?: IntFieldUpdateOperationsInput | number
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}