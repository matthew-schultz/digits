import { Template } from 'meteor/templating';
import { Contacts } from '../../api/contacts/contacts.js';
// import { Contacts, ContactsSchema } from '../../api/contacts/contacts.js';

Template.Home_Page.helpers({

  /**
   * @returns {*} All of the contacts documents.
   */
  contactsList() {
    return Contacts.find();
  },
});

Template.Home_Page.onCreated(function onCreated() {
  this.autorun(() => {
    this.subscribe('Contacts');
  });
});
