export {};

type DebugType = () => void;

type SomeTypes = string | number | DebugType;

// ある型だけ除外したい。
// Excludeを使用する。<全体のユニオン型、除外したい型>
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;
// 関数型を全て除外
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// Extract(抽出する)
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// Nonnullable
// ユニオン型からnull,undefined
type NullableTypes = string | number | null | undefined;
type NonnullableTypes = NonNullable<NullableTypes>
