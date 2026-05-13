import react, { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    const newContact = {
      id: contacts.length + 1,
      ...contact,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
  };

  const editContact = (updatedContact, id) => {

    const newContacts = contacts.map((contact) =>
      contact.id === id ? updatedContact : contact
    );
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
  }

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
  }

  useEffect(() => {
    if (localStorage.getItem("contacts")) {
      const storedContacts = JSON.parse(localStorage.getItem("contacts"));
      setContacts(storedContacts);
    } else {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList contacts={contacts} deleteContact={deleteContact} />
            }
          />
          <Route path="/add" element={<AddContact addContact={addContact} />} />
          <Route
            path="/edit/:id"
            element={
              <EditContact
                contacts={contacts}
                setContacts={setContacts}
                editContact={editContact}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
