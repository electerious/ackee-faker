// Returns a random item from an array
export default function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)]
}
