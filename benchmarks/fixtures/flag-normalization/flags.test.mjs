import test from 'node:test';
import assert from 'node:assert/strict';
import * as flags from './flags.mjs';
import * as service from './service.mjs';
import * as worker from './worker.mjs';

const cases = [
  [true, true], [false, false],
  ['true', true], ['false', false],
  [' TRUE ', true], [' FALSE ', false],
  ['TrUe', true], ['FaLsE', false],
  [undefined, false], [null, false], ['', false], [' \t ', false],
];

for (const [value, expected] of cases) {
  test(`all consumers agree for ${String(value)} (${typeof value})`, () => {
    const env = { EXPORT_ENABLED: value };
    assert.equal(flags.parseFlag(value), expected, 'shared parser');
    assert.deepEqual(service.loadConfig(env), { exportEnabled: expected }, 'service');
    assert.equal(worker.shouldEnqueueExport(env), expected, 'worker');
  });
}

for (const value of ['yes', '0', '1', 0, 1, [], {}, ['false']]) {
  test(`reject invalid value ${JSON.stringify(value)}`, () => {
    const env = { EXPORT_ENABLED: value };
    assert.throws(() => flags.parseFlag(value), TypeError);
    assert.throws(() => service.loadConfig(env), TypeError);
    assert.throws(() => worker.shouldEnqueueExport(env), TypeError);
  });
}

test('missing environment key is disabled', () => {
  assert.deepEqual(service.loadConfig({}), { exportEnabled: false });
  assert.equal(worker.shouldEnqueueExport({}), false);
});

test('public exports and signatures remain stable', () => {
  assert.deepEqual(Object.keys(flags), ['parseFlag']);
  assert.deepEqual(Object.keys(service), ['loadConfig']);
  assert.deepEqual(Object.keys(worker), ['shouldEnqueueExport']);
  assert.equal(flags.parseFlag.length, 1);
  assert.equal(service.loadConfig.length, 1);
  assert.equal(worker.shouldEnqueueExport.length, 1);
});
