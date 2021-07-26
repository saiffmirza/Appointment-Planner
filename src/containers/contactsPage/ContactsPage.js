import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addToContacts }) => {
	/*
  Define state variables for 
  contact info and duplicate check
  */
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");

	const [duplicate, setDuplicate] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		/*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
		if (!duplicate) {
			addToContacts(name, phone, email);
			setName("");
			setEmail("");
			setPhone("");
		}
	};

	/*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
	useEffect(() => {
		const nameDuplicate = () => {
			const found = contacts.find((i) => i.name === name);
			if (found !== undefined) {
				return true;
			} else {
				return false;
			}
		};

		if (nameDuplicate()) {
			setDuplicate(true);
		} else {
			setDuplicate(false);
		}
	}, [name, contacts, duplicate]);

	return (
		<div>
			<section>
				<h2>Add Contact</h2>
				<p>{duplicate ? " Name Already Exists" : ""}</p>
				<ContactForm
					name={name}
					setName={setName}
					phone={phone}
					setPhone={setPhone}
					email={email}
					setEmail={setEmail}
					handleSubmit={handleSubmit}
				/>
			</section>
			<hr />
			<section>
				<h2>Contacts</h2>
				<TileList tiles={contacts} />
			</section>
		</div>
	);
};
