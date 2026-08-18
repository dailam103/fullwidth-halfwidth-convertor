import { fullToHalf, halfToFull, isFullwidthCodePoint } from '../index';

test('full to half', () => {
    expect(fullToHalf('フル')).toBe('ﾌﾙ');
});

test('half to full', () => {
    expect(halfToFull('ﾌﾙ')).toBe('フル');
});

test('isFullwidthCodePoint returns true for fullwidth characters', () => {
    expect(isFullwidthCodePoint('Ａ'.codePointAt(0)!)).toBe(true);
    expect(isFullwidthCodePoint('フ'.codePointAt(0)!)).toBe(true);
    expect(isFullwidthCodePoint('　'.codePointAt(0)!)).toBe(true);
});

test('isFullwidthCodePoint returns false for halfwidth/ASCII characters', () => {
    expect(isFullwidthCodePoint('A'.codePointAt(0)!)).toBe(false);
    expect(isFullwidthCodePoint('ﾌ'.codePointAt(0)!)).toBe(false);
    expect(isFullwidthCodePoint(' '.codePointAt(0)!)).toBe(false);
});

test('isFullwidthCodePoint returns false for NaN', () => {
    expect(isFullwidthCodePoint(NaN)).toBe(false);
});