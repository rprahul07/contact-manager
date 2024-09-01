import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const AddContactHandler = (contact) => {
    
    setContacts([...contacts, contact]);
  };


  // ... other code

  useEffect(async () => {
     const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log("Retrieved Contacts:", retrievedContacts); // Debugging line
  
    if (retrievedContacts && Array.isArray(retrievedContacts)) {
      setContacts(retrievedContacts);
    }
  }, []);

  useEffect(async() => {
    console.log("Contacts in state:", contacts); // Debugging line
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // ... rest of the code

return (
  <div className="ui Container">
    <Header />
    <AddContact AddContactHandler={AddContactHandler} />
    <ContactList contact={contacts} />
  </div>
);
}

export default App;
