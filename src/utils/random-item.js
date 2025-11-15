// Returns a random item from an array
export default function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
