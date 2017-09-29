import mocha from 'mocha';
import { assert } from 'chai';

export default function testConstants(eforo) {
  it('constants should be initialized', () => {
    assert.ok(eforo.constants, 'constants should exist');
    assert.ok(eforo.constants.BASE_URI, 'BASE_URI should be set');
    assert.ok(eforo.constants.ENDPOINTS, 'ENDPOINTS Should exist');
    assert.ok(Object.prototype.hasOwnProperty.call(eforo.constants.ENDPOINTS, 'GET_ITEMS'), 'ENDPOINTS.GET_ITEMS should be ok');
  });
}
