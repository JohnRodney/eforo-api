import mocha from 'mocha';
import { assert } from 'chai';

export default function testSetEndPoint(eforo) {
  describe('Eforo: setEndpoint', () => {
    it('should change the uri in options', () => {
      eforo.setEndpoint('add_item');
      assert.ok(eforo.options.uri.indexOf('add_item') > -1, 'eforo.options.uri should contain "add_item"');
    });

    it('should change the currentUri property to the new uri', () => {
      eforo.setEndpoint('add_item');
      assert.ok(eforo.currentUri === 'add_item', 'eforo.currentUri should equal "add_item"');
    });
  });
}
