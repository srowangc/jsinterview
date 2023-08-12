

export default class RegistrationChecker {
    
    /** @type {number[]} */
    registrations; // number[]


    constructor(registrations) {
        this.registrations = registrations;
    }

   /**
     * Given an array of artists, returns those artists that are registered
     * @param {Artist[]} artists - The author of the book.
     * @returns Artist[]
     */
    confirmRegistrations(artists) {
        // todo - only return artists that are registered
        return artists;
    }
}