var fizzbuzz = require('./index.js');

describe('fizzbuzz', function() {
  describe('If the input is not a multiple of 3 or 5 or 7', function() {
    it('should return 1, if the input is 1', function() {
      var actual = fizzbuzz(1);
      var expected = 1;
      expect(actual).toBe(expected);
    });
  });
  describe('If the input is % 3', function() {
    it('should return fizz, if the input is 3', function() {
      var actual = fizzbuzz(3);
      var expected = "fizz";
      expect(actual).toBe(expected);
    });
  });
  describe('If the input is % 5', function() {
    it('should return buzz, if the input is 10', function() {
      var actual = fizzbuzz(10);
      var expected = "buzz";
      expect(actual).toBe(expected);
    });
  });
  describe('If the input is % 7', function() {
    it('should return bang, if the input is 28', function() {
      var actual = fizzbuzz(28);
      var expected = "bang";
      expect(actual).toBe(expected);
    });
  });
  describe('If the input is % 5 & % 3', function() {
    it('should return fizzbuzz, if the input is 30', function() {
      var actual = fizzbuzz(30);
      var expected = "fizzbuzz";
      expect(actual).toBe(expected);
    });
  });
  describe('If the input is % 21', function() {
    it('should return fizzbang, if the input is 21', function() {
      var actual = fizzbuzz(42);
      var expected = "fizzbang";
      expect(actual).toBe(expected);
    });
  });
  describe('If the input is % 35', function() {
    it('should return buzzbang, if the input is 70', function() {
      var actual = fizzbuzz(70);
      var expected = "buzzbang";
      expect(actual).toBe(expected);
    });
  });
  describe('If the input is % 105', function() {
    it('should return fizzbuzzbang, if the input is 210', function() {
      var actual = fizzbuzz(210);
      var expected = "fizzbuzzbang";
      expect(actual).toBe(expected);
    });
  });
});
