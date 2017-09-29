import mocha from 'mocha';
import proxyquire from 'proxyquire';
import { assert } from 'chai';
import response from './utils/sample-rp-response';

const Eforo = proxyquire('../dist/src/index.js', { 'request-promise': () => Promise.resolve(response) }).default;

describe('Eforo', () => {
  const sampleApiKey = '0913098ALKJFIEOWJFK@*$@';
  const eforo = new Eforo();
  eforo.setup(sampleApiKey);

  it('should construct', () => {
    assert.ok(eforo);
  });

  it('should save key on setup', () => {
    assert.equal(eforo.apiKey, sampleApiKey);
  });

  describe('Eforo: default options', () => {
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

  it('constants should be initialized', () => {
    assert.ok(eforo.constants, 'constants should exist');
    assert.ok(eforo.constants.BASE_URI, 'BASE_URI should be set');
    assert.ok(eforo.constants.ENDPOINTS, 'ENDPOINTS Should exist');
    assert.ok(Object.prototype.hasOwnProperty.call(eforo.constants.ENDPOINTS, 'GET_ITEMS'), 'ENDPOINTS.GET_ITEMS should be ok');
  });

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

  describe('getItems public method', () => {
    it('should fail when passed null', (done) => {
      eforo.getItems(null).then((res) => {
        assert.ok(!res, 'promise was not rejected on incorrect data passed to function');
        done();
      }).catch((err) => {
        assert.ok(!err.message, 'Should reject a non assertion promise if options is not passed');
        done();
      }).catch(err => done(err));
    });

    it('should fail not passed at least one required key', (done) => {
      eforo.getItems({}).then((res) => {
        assert.ok(!res, 'promise was not rejected on incorrect data passed to function');
        done();
      }).catch((err) => {
        assert.ok(!err.message, 'Should reject a non assertion promise if options does not have required keys');
        done();
      }).catch(err => done(err));
    });

    it('should fail if passed an invalid key', (done) => {
      eforo.getItems({ blue: 'favorite color' }).then((res) => {
        assert.ok(!res, 'promise was not rejected on incorrect data passed to function');
        done();
      }).catch((err) => {
        assert.ok(!err.message, 'Should reject a non assertion promise if options has unallowed key');
        done();
      }).catch(err => done(err));
    });

    it('should return a resolved promise if options are correct', (done) => {
      eforo.getItems({ status: eforo.constants.STATUS.IN_QUEUE }).then((res) => {
        assert.ok(JSON.stringify(res) === JSON.stringify(response), 'should recieve the stub response');
        done();
      }).catch(err => done(err));
    });

    it('should set the passed options on options.qs', (done) => {
      eforo.getItems({ status: eforo.constants.STATUS.IN_QUEUE }).then(() => {
        assert.ok(eforo.options.qs.status === eforo.constants.STATUS.IN_QUEUE, 'options.qs.status should be set');
        done();
      }).catch(err => done(err));
    });
  });
});
