import React, { useState, Fragment } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
	/*
  Define state variables for 
  contacts and appointments 
  */
	const [contacts, setContacts] = useState([]);
	const [appointments, setAppointments] = useState([]);

	const ROUTES = {
		CONTACTS: "/contacts",
		APPOINTMENTS: "/appointments",
	};

	/*
  Implement functions to add data to
  contacts and appointments
  */
	const addToContacts = (name, phone, email) => {
		setContacts([
			...contacts,
			{
				name: name,
				phone: phone,
				email: email,
			},
		]);
	};

	const addToAppointments = (title, contact, date, time) => {
		setAppointments([
			...appointments,
			{
				title: title,
				contact: contact,
				date: date,
				time: time,
			},
		]);
	};

	return (
		<Fragment>
			<nav>
				<NavLink to={ROUTES.CONTACTS} activeClassName="active">
					Contacts
				</NavLink>
				<NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
					Appointments
				</NavLink>
			</nav>
			<main>
				<Switch>
					<Route exact path="/">
						<Redirect to={ROUTES.CONTACTS} />
					</Route>
					<Route path={ROUTES.CONTACTS}>
						<ContactsPage contacts={contacts} addToContacts={addToContacts} />
					</Route>
					<Route path={ROUTES.APPOINTMENTS}>
						<AppointmentsPage
							appointments={appointments}
							addToAppointments={addToAppointments}
							contacts={contacts}
						/>
					</Route>
				</Switch>
			</main>
		</Fragment>
	);
}

export default App;
