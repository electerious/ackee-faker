const duds = [
  // Sunday
  [null, null, null, null, null],
  // Monday
  [null],
  // Tuesday
  [],
  // Wednesday
  [null],
  // Thursday
  [],
  // Friday
  [null, null, null],
  // Saturday
  [null, null, null, null],
]

export default () => {
  const currentDate = new Date()
  const currentWeekday = currentDate.getDay()

  return duds[currentWeekday]
}
