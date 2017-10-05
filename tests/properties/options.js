import mocha from 'mocha';
import { assert } from 'chai';

export default function testOptions(eforo, sampleApiKey) {
  describe('Eforo: options (property)', () => {
    it('should setup default options', () => {
      assert.ok(eforo.options);
    });

    it('should have headers', () => {
      assert.ok(eforo.options.headers);
    });

    it('should have token in X-Authorization', () => {
      assert.ok(eforo.options.headers['X-Authorization'].indexOf(sampleApiKey) > -1, 'headers["X-Authorization"] should contain the key');
    });

    it('options should have uri', () => {
      assert.ok(eforo.options.uri);
    });

    it('options json should be set to true', () => {
      assert.ok(eforo.options.json);
    });
  });
}

