export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type MyExclude<T, U> = T extends U ? never : T;

type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude<SomeTypes, string | number>;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NonnullableTypes = NonNullable<NullableTypes>;
