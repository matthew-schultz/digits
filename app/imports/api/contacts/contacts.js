import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Contacts = new Mongo.Collection('Contacts');

/**
 * Create the schema for Contacts
 */
export const ContactsSchema = new SimpleSchema({
  first: {
    label: 'First',
    type: String,
    optional: false,
    max: 20,
  },
  last: {
    label: 'Last',
    type: String,
    optional: false,
    max: 20,
  },
  address: {
    label: 'Address',
    type: String,
    optional: false,
    max: 40,
  },
  phone: {
    label: 'Phone',
    type: String,
    optional: false,
    max: 20,
  },
  email: {
    label: 'Email',
    type: String,
    optional: false,
    max: 40,
  },
});

Contacts.attachSchema(ContactsSchema);
