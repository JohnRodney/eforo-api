import mocha from 'mocha';
import proxyquire from 'proxyquire';
import { assert } from 'chai';
import response from './utils/sample-rp-response';
import testConstructor from './constructor';
import testOptions from './properties/options';
import testConstants from './properties/constants';
import testSetEndPoint from './methods/set-endpoint';
import testGetItems from './methods/get-items';

const Eforo = proxyquire('../src/index.js', { 'request-promise': () => Promise.resolve(response) }).default;

describe('Eforo', () => {
  const sampleApiKey = '0913098ALKJFIEOWJFK@*$@';
  const eforo = new Eforo();
  eforo.setup(sampleApiKey);

  testConstructor(eforo, sampleApiKey);
  testOptions(eforo, sampleApiKey);
  testConstants(eforo);
  testSetEndPoint(eforo);
  testGetItems(eforo);
});
