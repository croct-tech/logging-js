import {Log, Logger} from '../src';

declare function make<T>(): T;

declare function receive<T>(x: T): void;

type TestLog = Log<{
    foo: string,
}>;

// Covariance Log test:
//   A custom Log type must be assignable to the base logger type.
receive<Log>(make<TestLog>());

// Contravariance Logger test:
//   A base logger must be assignable to a logger with a custom Log type.
receive<Logger<TestLog>>(make<Logger>());
