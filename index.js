const contactsOperations = require('./contacts');

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list': {
      const dataContactsGetAll = await contactsOperations.listContacts();
      console.table(dataContactsGetAll);
      break;
    }
    case 'get': {
      const dataGetContactById = await contactsOperations.getContactById(id);
      if (!dataGetContactById) {
        throw new Error(`Contacts with id=${id} not found`);
      }
      console.log(dataGetContactById);
      break;
    }
    case 'add': {
      const newContact = await contactsOperations.addContact(name, email, phone);
      console.log('newContact', newContact);
      break;
    }
    case 'remove': {
      const deleteContact = await contactsOperations.removeContact(id);
      console.log('deleteContact', deleteContact);
      break;
    }
    default: {
      console.log('Unknown action');
      break;
    }
  }
}
module.exports = { invokeAction };
