import { reactive, computed, ref } from 'vue'
import { defineStore } from 'pinia'

type Contact ={ 
 id: number,
 firstName: string,
 lastName: string,
 email: string,
 country: string,
}

export const useContactStore = defineStore('contact', () => {
  
  let contacts = reactive([]) as Contact []

  const getContacts = computed(() => contacts);
  let generateId = ref(0);


function addContact(newContact: Contact, id: number | null) {
    if(id){
        const contact = getContact(id);
        let updatedContact = {
            ...contact,
            ...newContact
        }
        let index = contacts.findIndex((item) => item.id === id);
        contacts[index] = updatedContact;
    } else {
        const contact: Contact = { 
            id: ++generateId.value,
            firstName: newContact.firstName,
            lastName: newContact.lastName,
            email: newContact.email,
            country: newContact.country,
        }
        contacts.push(contact);
    }
  }

  function getContact(id: number) {
    return contacts.find((item)=> item.id === id)
  }
    
  function deleteContact(id: number) {
    contacts.map((item) => {
        if (item.id !== id) {
            item.id--;
        }
    })
    return contacts.splice(id, 1);
  }

  return { contacts, getContacts, getContact, addContact, deleteContact }
})
