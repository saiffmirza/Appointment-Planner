import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
	contacts,
	title,
	setTitle,
	contact,
	setContact,
	date,
	setDate,
	time,
	setTime,
	handleSubmit,
}) => {
	const getTodayString = () => {
		const [month, day, year] = new Date()
			.toLocaleDateString("en-US")
			.split("/");
		return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
	};

	const getContactNames = () => {
		return contacts.map((contact) => contact.name);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				required
				placeholder="Title"
			/>
			<input
				type="date"
				value={date}
				onChange={(e) => setDate(e.target.value)}
				min={getTodayString()}
				required
				placeholder="Date"
			/>
			<input
				type="time"
				value={time}
				onChange={(e) => setTime(e.target.value)}
				required
				placeholder="Time"
			/>
			<ContactPicker
				name="contact"
				value={contact}
				contacts={getContactNames()}
				onChange={(e) => setContact(e.target.value)}
				placeholder="Appointment With"
			/>
			<input type="submit" value="Add Appointment" />
		</form>
	);
};
