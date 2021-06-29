function check(num) {
  let checked = true
  if (num === 1) {
    console.log(num, "No")
    return
  }
  for (let i = 2; i <= Math.sqrt(num) && checked; i++) {
    if (num % i == 0) {
      checked = false
    }
  }
  if (checked) {
    console.log(num, "Yes")
  } else {
    console.log(num, "No")
  }
}

check(1)
check(10)
check(13)
check(2)
check(3)
check(4)
check(5)