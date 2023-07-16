import React from "react";
import { IContact, IContact_Account } from "@/app/contacts/model/models";

export type ContactsContextProps = {
  contacts: IContact[];
  saveContact: (contact: IContact) => void;
  updateContact: (id: number, updateContact: IContact) => void;
  showNewContactModal: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

export const ContactsContext = React.createContext<ContactsContextProps | null>(
  null,
);

export const useContactsContext = () => {
  const contactsContext = React.useContext(ContactsContext);
  if (contactsContext === undefined) {
    throw new Error("useContactsContext must be inside a ContactsProvider");
  }
  return contactsContext;
};

const ContactsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }: { children: React.ReactNode }) => {
  const [contacts, setContacts] = React.useState<IContact[]>([
    {
      id: 1,
      name: "Michael Cooper",
      account: {
        id: 1,
        name: "Toyota Motor Corporation",
      },
      title: "Front-end Developer",
      phone: "",
      email: "michael.cooper@example.com",
      owner: {
        firstName: "Michael",
        lastName: "Cooper",
      },
    },
    {
      id: 2,
      name: "Sandra Hawkins",
      account: {
        id: 1,
        name: "Toyota Motor Corporation",
      },
      title: "Front-end Developer",
      phone: "123-123-1234",
      email: "sandra.hawkins@example.com",
      owner: {
        firstName: "Sandra",
        lastName: "Hawkins",
      },
    },
  ]);

  const saveContact = (contact: IContact) => {
    const newAcct: IContact = {
      id: Math.random(),
      name: contact.name,
      account: contact.account,
      title: contact.title,
      phone: contact.phone,
      email: contact.email,
      owner: {
        firstName: contact.owner.firstName,
        lastName: contact.owner.lastName,
      },
    };
    setContacts([...contacts, newAcct]);
  };

  const updateContact = (id: number, updateContact: IContact) => {
    contacts.filter((contact: IContact) => {
      if (contact.id === id) {
        contact.name = updateContact.name;
        contact.account = updateContact.account;
        contact.title = updateContact.title;
        contact.phone = updateContact.phone;
        contact.email = updateContact.email;
        contact.owner = updateContact.owner;
        setContacts([...contacts]);
      }
    });
  };

  const [showNewContact, setShowNewContact] = React.useState(false);

  return (
    <>
      <ContactsContext.Provider
        value={{
          contacts,
          saveContact,
          updateContact,
          showNewContactModal: [showNewContact, setShowNewContact],
        }}
      >
        {children}
      </ContactsContext.Provider>
    </>
  );
};

export default ContactsProvider;
