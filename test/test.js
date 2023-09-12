
import assert from 'assert';
import RegistrationChecker  from '../src/RegistrationChecker.js';
import { testRegistrations, testArtists } from './test-data.js';

describe('Registration Checker', function () {
    it('Returns registered artists', function () {
        const registrations = testRegistrations(5); // 0, 1, 2, 3, 5
        const registrationChecker = new RegistrationChecker(registrations);
        const artists = testArtists(5); // 5 artists - ids 1 through 5
        const results = registrationChecker.confirmRegistrations(artists);
        assert.equal(results.length, 4);
        assert.equal(results[0].id, 1);
        assert.equal(results[1].id, 2);
        assert.equal(results[2].id, 3);
        assert.equal(results[3].id, 5);
    });
});