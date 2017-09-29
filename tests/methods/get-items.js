import mocha from 'mocha';
import proxyquire from 'proxyquire';
import { assert } from 'chai';
import response from '../utils/sample-rp-response';

export default function testGetItems(eforo) {
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
      const { IN_QUEUE } = eforo.constants.STATUS;
      eforo.getItems({ status: IN_QUEUE, blue: 'favorite color' }).then((res) => {
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

    it('should reject with error if request-promise fails', (done) => {
      const { IN_QUEUE } = eforo.constants.STATUS;
      const sampleErr = { err: 'a sample err' };
      const Eforo = proxyquire('../../src/index.js', { 'request-promise': () => Promise.reject(sampleErr) }).default;
      const ef = new Eforo();
      ef.setup('token');

      ef.getItems({ status: IN_QUEUE }).catch((err) => {
        assert.ok(JSON.stringify(sampleErr) === JSON.stringify(err));
        done();
      }).catch(err => done(err));
    });
  });
}
