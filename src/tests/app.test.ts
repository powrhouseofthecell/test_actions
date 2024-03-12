import { change_case, reverse } from '../app';

describe('string manipulation', () => {
  describe('string case', () => {
    test('should return the uppercase version of the string', () => {
      const sut = change_case;
      const val = sut('guroo');
      const actual = val.uppercase;

      const expected = 'GUROO';

      expect(actual).toBe(expected);
    });

    test('should return the lowercase of the string', () => {
      const sut = change_case;
      const val = sut('GUROO');
      const actual = val.lowercase;

      const expected = 'guroo';

      expect(actual).toBe(expected);
    });
  });
  describe('reverse the string', () => {
    it('should return the reverse of the string', () => {
      const sut = reverse;
      const actual = reverse('guroo');

      const expected = 'oorug';
      expect(actual).toBe(expected);
    });
  });
});
