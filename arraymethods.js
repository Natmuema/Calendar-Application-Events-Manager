// Define an array to store events
let events = [];

// letiables to store event input fields and reminder list
let eventDateInput =
	document.getElementById("eventDate");
let eventTitleInput =
	document.getElementById("eventTitle");
let eventLocationInput =
	document.getElementById("eventLocation");
let reminderList =
	document.getElementById("reminderList");

// Counter to generate unique event IDs
let eventIdCounter = 1;

// Function to add events
function addEvent() {
	let date = eventDateInput.value;
	let title = eventTitleInput.value;
	let location = eventLocationInput.value;

	if (date && title) {
		// Create a unique event ID
		let eventId = eventIdCounter++;

		events.push(
			{
				id: eventId, date: date,
				title: title,
				location: location
			}
		);
		showCalendar(currentMonth, currentYear);
		eventDateInput.value = "";
		eventTitleInput.value = "";
		eventDescriptionInput.value = "";
		displayReminders();
	}
}
let basketballPlayers = events.filter(function ( {
	return student.sports === "Date";
}).map(function (event) {
	return event.name;
})

console.log("Events of the whole week are:");

// Printing out the name of Basketball players
basketballPlayers.forEach(function (players) {
	console.log(players);
});

/* Printing the name of students who play
basketball using filter and map method
simultaneously. */

// Taking an array of Event object
let event = [
	{ id: "001", name: "Anish", sports: "Cricket" },
	{ id: "002", name: "Smriti", sports: "Basketball" },
	{ id: "003", name: "Rahul", sports: "Cricket" },
	{ id: "004", name: "Bakul", sports: "Basketball" },
	{ id: "005", name: "Nikita", sports: "Hockey" }
]

/* Applying filter function on students array to
retrieve those students Objects who play
basketball and then the new array returned by
filter method is mapped in order to get the name
of basketball players instead of whole object.*/
let basketballPlayers = students.filter(function (student) {
	return student.sports === "Basketball";
}).map(function (student) {
	return student.name;
})

console.log("Basketball Players are:");

// Printing out the name of Basketball players
basketballPlayers.forEach(function (players) {
	console.log(players);
});
