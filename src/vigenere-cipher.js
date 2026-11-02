/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return this.process(message, key, 1);
  }

  decrypt(encryptedMessage, key) {
    return this.process(encryptedMessage, key, -1);
  }

  process(text, key, direction) {
    if (text === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const A = 'A'.charCodeAt(0);
    const upperKey = key.toUpperCase();
    let keyIndex = 0;
    const result = text
      .toUpperCase()
      .split('')
      .map((ch) => {
        if (ch < 'A' || ch > 'Z') return ch;
        const shift = upperKey.charCodeAt(keyIndex % upperKey.length) - A;
        keyIndex += 1;
        return String.fromCharCode(((ch.charCodeAt(0) - A + direction * shift + 26) % 26) + A);
      });
    return (this.isDirect ? result : result.reverse()).join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
