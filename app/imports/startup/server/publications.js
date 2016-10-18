/**
 * Created by matthew on 10/17/2016.
 */
import { Contacts } from '../../api/contacts/contacts.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('Contacts', function publishContactData() {
  return Contacts.find();
});
