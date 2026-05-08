export default function duds() {
  const currentDate = new Date()
  const currentWeekday = currentDate.getDay()

  return [
    // Sunday
    [null, null, null, null],
    // Monday
    [null],
    // Tuesday
    [],
    // Wednesday
    [],
    // Thursday
    [],
    // Friday
    [null, null],
    // Saturday
    [null, null, null],
  ][currentWeekday]
}
