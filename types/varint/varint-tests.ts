import { decode, encode, encodingLength } from 'varint';

encode(0); // $ExpectType number[]
encode(0, []); // $ExpectType number[]
encode(0, [], 0); // $ExpectType number[]

encode(0, Buffer.alloc(1)); // $ExpectType Buffer
encode(0, Buffer.alloc(1), 0); // $ExpectType Buffer

encode.bytes; // $ExpectType number

decode(Buffer.alloc(1)); // $ExpectType number
decode(Buffer.alloc(1), 0); // $ExpectType number

decode.bytes; // $ExpectType number

encodingLength(0); // $ExpectType number
