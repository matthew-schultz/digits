import {Contacts} from '../../api/contacts/contacts.js';
import {_} from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';

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
    owner: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
  },
  {
    first: 'Jack',
    last: 'Johnson',
    address: 'North Shore, HI',
    phone: '808-555-4000',
    email: 'jackjohnson@hawaii.edu',
    owner: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
  },
  {
    first: 'Sameer',
    last: 'Gadhia',
    address: 'Berkeley, CA',
    phone: '555-555-9000',
    email: 'sameer@youngthegiant.com',
    owner: Meteor.users.findOne({ username: Meteor.settings.defaultAccount.username })._id,
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
