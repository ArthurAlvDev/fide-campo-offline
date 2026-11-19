import test from 'node:test';
import assert from 'node:assert/strict';
import { buildFideRecord } from '../app.js';

test('builds valid FIDE record', () => {
  const rec = buildFideRecord({ municipality: 'GV', affectedPeople: 10, damagedHomes: 3 });
  assert.equal(rec.municipality, 'GV');
  assert.equal(rec.affectedPeople, 10);
});
