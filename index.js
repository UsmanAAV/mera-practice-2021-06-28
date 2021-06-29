function check(num) {
  let checked = true
  if (num === 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(num) && checked; i++) {
    if (num % i == 0) {
      checked = false
    }
  }
  return checked
}

console.log(check(1) ? 'Yes' : 'No')
console.log(check(2) ? 'Yes' : 'No')
console.log(check(3) ? 'Yes' : 'No')
console.log(check(4) ? 'Yes' : 'No')
console.log(check(5) ? 'Yes' : 'No')
