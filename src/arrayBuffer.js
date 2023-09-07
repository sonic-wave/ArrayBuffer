export default class ArrayBufferConverter {
  static load(data) {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < data.length; i += 1) {
      bufferView[i] = data.charCodeAt(i);
    }
    return buffer;
  }

  static toString(arrayBuffer) {
    const bufferView = new Uint16Array(arrayBuffer);
    let string = '';
    for (let i = 0; i < bufferView.length; i += 1) {
      string += String.fromCharCode(bufferView[i]);
    }
    return string;
  }
}
