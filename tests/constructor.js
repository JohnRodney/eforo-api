import mocha from 'mocha';
import { assert } from 'chai';

export default function testInitialization(eforo, sampleApiKey) {
  it('should construct', () => {
    assert.ok(eforo);
  });

  it('should save key on setup', () => {
    assert.equal(eforo.apiKey, sampleApiKey);
  });
}
