import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {
    first: 'Matt',
    last: 'Schultz',
    address: 'Campus Road, Manoa, HI',
    phone: '808-555-1000',
    email: 'mschultz@hawaii.edu',
  },
  {
    first: 'Jack',
    last: 'Johnson',
    address: 'North Shore, HI',
    phone: '808-555-4000',
    email: 'jackjohnson@hawaii.edu',
  },
  {
    first: 'Sameer',
    last: 'Gadhia',
    address: 'Berkeley, CA',
    phone: '555-555-9000',
    email: 'sameer@youngthegiant.com',
  },
];

/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(contact) {
    Contacts.insert(contact);
  });
}
