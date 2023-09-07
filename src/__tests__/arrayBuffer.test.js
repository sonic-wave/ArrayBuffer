import ArrayBufferConverter from '../arrayBuffer';

test('String test', () => {
  const result = ArrayBufferConverter.load('String');
  expect(result.byteLength).toEqual(12);
});

test('String object test', () => {
  const array = ArrayBufferConverter.load('String');
  const result = ArrayBufferConverter.toString(array);
  expect(result).toEqual('String');
});
