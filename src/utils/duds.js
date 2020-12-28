'use strict'

const duds = [
	[ null, null, null, null, null ], // Sunday
	[ null ], // Monday
	[ ], // Tuesday
	[ null ], // Wednesday
	[ ], // Thursday
	[ null, null, null ], // Friday
	[ null, null, null, null ] // Saturday
]

module.exports = () => {

	const currentDate = new Date()
	const currentWeekday = currentDate.getDay()

	return duds[currentWeekday]

}