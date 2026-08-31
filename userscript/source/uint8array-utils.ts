export type Uint8ArrayConstructorParameters =
  | []
  | [length: number]
  | [array: ArrayLike<number> | ArrayBufferLike]
  | [buffer: ArrayBufferLike, byteOffset?: number, length?: number]


export function StartsWithBytes(Value: Uint8Array, Prefix: Uint8Array): boolean {
  if (Prefix.length > Value.length) return false

  for (let I = 0; I < Prefix.length; I++) {
    if (Value[I] !== Prefix[I]) return false
  }

  return true
}

export type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array

export function IsArrayBuffer(Value: unknown): Value is ArrayBuffer {
  return Value instanceof ArrayBuffer
}

export function IsDataView(Value: unknown): Value is DataView {
  return Value instanceof DataView
}

export function IsTypedArray(Value: unknown): Value is TypedArray {
  return ArrayBuffer.isView(Value) && !IsDataView(Value)
}
