const FULL_ALPHABET = ['Ａ', 'Ｂ', 'Ｃ', 'Ｄ', 'Ｅ', 'Ｆ', 'Ｇ', 'Ｈ', 'Ｉ', 'Ｊ', 'Ｋ', 'Ｌ', 'Ｍ', 'Ｎ', 'Ｏ', 'Ｐ', 'Ｑ', 'Ｒ', 'Ｓ', 'Ｔ', 'Ｕ', 'Ｖ', 'Ｗ', 'Ｘ', 'Ｙ', 'Ｚ', 'ａ', 'ｂ', 'ｃ', 'ｄ', 'ｅ', 'ｆ', 'ｇ', 'ｈ', 'ｉ', 'ｊ', 'ｋ', 'ｌ', 'ｍ', 'ｎ', 'ｏ', 'ｐ', 'ｑ', 'ｒ', 'ｓ', 'ｔ', 'ｕ', 'ｖ', 'ｗ', 'ｘ', 'ｙ', 'ｚ'];
const HALF_ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const FULL_NUMBER = ['０', '１', '２', '３', '４', '５', '６', '７', '８', '９'];
const HALF_NUMBER = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const FULL_SIGN = ['！', '＃', '＄', '％', '＆', '（', '）', '＊', '＋', '，', '－', '．', '／', '：', '；', '＜', '＝', '＞', '？', '＠', '［', '］', '＾', '＿', '｀', '｛', '｜', '｝', '”', '’', '￥', '～'];
const HALF_SIGN = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '"', "'", '\\', '~'];

const FULL_KANA = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン', 'ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ダ', 'ヂ', 'ヅ', 'デ', 'ド', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', 'パ', 'ピ', 'プ', 'ペ', 'ポ', 'ヴ', 'ァ', 'ィ', 'ゥ', 'ェ', 'ォ', 'ッ', 'ャ', 'ュ', 'ョ', 'ヮ', 'ヰ', 'ヱ', '・', 'ー', '、', '。', '・', '「', '」'];
const HALF_KANA = ['ｱ', 'ｲ', 'ｳ', 'ｴ', 'ｵ', 'ｶ', 'ｷ', 'ｸ', 'ｹ', 'ｺ', 'ｻ', 'ｼ', 'ｽ', 'ｾ', 'ｿ', 'ﾀ', 'ﾁ', 'ﾂ', 'ﾃ', 'ﾄ', 'ﾅ', 'ﾆ', 'ﾇ', 'ﾈ', 'ﾉ', 'ﾊ', 'ﾋ', 'ﾌ', 'ﾍ', 'ﾎ', 'ﾏ', 'ﾐ', 'ﾑ', 'ﾒ', 'ﾓ', 'ﾔ', 'ﾕ', 'ﾖ', 'ﾗ', 'ﾘ', 'ﾙ', 'ﾚ', 'ﾛ', 'ﾜ', 'ｦ', 'ﾝ', 'ｶﾞ', 'ｷﾞ', 'ｸﾞ', 'ｹﾞ', 'ｺﾞ', 'ｻﾞ', 'ｼﾞ', 'ｽﾞ', 'ｾﾞ', 'ｿﾞ', 'ﾀﾞ', 'ﾁﾞ', 'ﾂﾞ', 'ﾃﾞ', 'ﾄﾞ', 'ﾊﾞ', 'ﾋﾞ', 'ﾌﾞ', 'ﾍﾞ', 'ﾎﾞ', 'ﾊﾟ', 'ﾋﾟ', 'ﾌﾟ', 'ﾍﾟ', 'ﾎﾟ', 'ｳﾞ', 'ｧ', 'ｨ', 'ｩ', 'ｪ', 'ｫ', 'ｯ', 'ｬ', 'ｭ', 'ｮ', , , , '･', 'ｰ', '､', '｡', '･', '｢', '｣'];

const FULL_SPACE = ['　'];
const HALF_SPACE = [' '];

const FULL_CHARACTER = [...FULL_ALPHABET, ...FULL_NUMBER, ...FULL_SIGN, ...FULL_SIGN, ...FULL_KANA, ...FULL_SPACE].reduce((s: any, v: string, index: number) => {
  s[index] = v;
  s[v] = index;
  return s;
}, {});

const HALF_CHARACTER = [...HALF_ALPHABET, ...HALF_NUMBER, ...HALF_SIGN, ...HALF_SIGN, ...HALF_KANA, ...HALF_SPACE].reduce((s: any, v: string, index: number) => {
  s[index] = v;
  s[v] = index;
  return s;
}, {});

/**
 * 
 * @param {string} fullwidthString
 * @returns {string}
 */
export const fullToHalf = (fullwidthString: string): string => {
  return fullwidthString.split('').map(c => {
    const fullIndex = FULL_CHARACTER[c];
    return HALF_CHARACTER[fullIndex] === undefined ? c : HALF_CHARACTER[fullIndex];
  }).join('');
}

/**
 * 
 * @param {string} halfWidthString 
 * @returns {string}
 */
export const halfToFull = (halfWidthString: string): string => {
  return halfWidthString.split('').map(c => {
    const halfIndex = HALF_CHARACTER[c];
    return FULL_CHARACTER[halfIndex] === undefined ? c : FULL_CHARACTER[halfIndex];
  }).join('');
}

/**
 * Checks whether a Unicode code point is a fullwidth (or wide) character,
 * as defined by the Unicode East Asian Width property (W and F categories).
 * @param {number} codePoint
 * @returns {boolean}
 */
export const isFullwidthCodePoint = (codePoint: number): boolean => {
  if (Number.isNaN(codePoint)) {
    return false;
  }

  return (
    codePoint >= 0x1100 && (
      codePoint <= 0x115F || // Hangul Jamo
      codePoint === 0x2329 || // LEFT-POINTING ANGLE BRACKET
      codePoint === 0x232A || // RIGHT-POINTING ANGLE BRACKET
      (codePoint >= 0x2E80 && codePoint <= 0x3247 && codePoint !== 0x303F) ||
      (codePoint >= 0x3250 && codePoint <= 0x4DBF) ||
      (codePoint >= 0x4E00 && codePoint <= 0xA4C6) ||
      (codePoint >= 0xA960 && codePoint <= 0xA97C) ||
      (codePoint >= 0xAC00 && codePoint <= 0xD7A3) ||
      (codePoint >= 0xF900 && codePoint <= 0xFAFF) ||
      (codePoint >= 0xFE10 && codePoint <= 0xFE19) ||
      (codePoint >= 0xFE30 && codePoint <= 0xFE6B) ||
      (codePoint >= 0xFF01 && codePoint <= 0xFF60) ||
      (codePoint >= 0xFFE0 && codePoint <= 0xFFE6) ||
      (codePoint >= 0x1B000 && codePoint <= 0x1B001) ||
      (codePoint >= 0x1F200 && codePoint <= 0x1F251) ||
      (codePoint >= 0x1F300 && codePoint <= 0x1F64F) ||
      (codePoint >= 0x1F900 && codePoint <= 0x1F9FF) ||
      (codePoint >= 0x20000 && codePoint <= 0x3FFFD)
    )
  );
}

