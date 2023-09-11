import { fullToHalf, halfToFull } from '../index';

test('full to half', () => {
    expect(fullToHalf('フル')).toBe('ﾌﾙ');
});

test('half to full', () => {
    expect(halfToFull('ﾌﾙ')).toBe('フル');
});