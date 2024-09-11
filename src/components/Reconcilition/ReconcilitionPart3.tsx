import { useState } from "react";
import { Button } from "../ui/button";

interface ContactsProps {
  id: number;
  name: string;
  email: string;
}

interface EditContactProps {
  initialData: ContactsProps;
  onSave: (updatedData: ContactsProps) => void;
}

interface ContactListProps {
  contacts: ContactsProps[];
  selectedId: number;
  onSelect: (id: number) => void;
}

function ContactList({ contacts, selectedId, onSelect }: ContactListProps) {
  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                onSelect(contact.id);
              }}
            >
              {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function EditContact({ initialData, onSave }: EditContactProps) {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);
  return (
    <section className="flex gap-2">
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <Button
        onClick={() => {
          const updatedData = {
            id: initialData.id,
            name: name,
            email: email,
          };
          onSave(updatedData);
        }}
      >
        Save
      </Button>
      <Button
        variant={"destructive"}
        onClick={() => {
          setName(initialData.name);
          setEmail(initialData.email);
        }}
      >
        Reset
      </Button>
    </section>
  );
}

export default function ReconcilitionPart3() {
  const initialContacts = [
    { id: 0, name: "Taylor", email: "taylor@mail.com" },
    { id: 1, name: "Alice", email: "alice@mail.com" },
    { id: 2, name: "Bob", email: "bob@mail.com" },
  ];

  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);
  const selectedContact = contacts.find((c) => c.id === selectedId);

  function handleSave(updatedData: ContactsProps) {
    const nextContacts = contacts.map((c) => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }
  return (
    <div>
      <p className="font-bold pb-2">3. Restablecer un formulario de detalles</p>
      <ContactList
        contacts={contacts}
        selectedId={selectedId}
        onSelect={(id: number) => setSelectedId(id)}
      />
      <hr />
      <EditContact
        key={selectedId}
        initialData={selectedContact!}
        onSave={handleSave}
      />
    </div>
  );
}
