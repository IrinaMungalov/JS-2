url = "       "

// validation:
// url.trim().length > 0
//   |
//   |
//   v
//  copy "".length

// 1. not empty
// !url.includes ("!") && !url.includes ("\\") && ...

// 2. lower latin a..z - / : . digits




url = "abc" // String

re = /^[a-z#-\/:0-9]+$/  // RegExp



// const re = new RegExp("abc")

// regular expressions

// <input ... pattern="regexp" />

// - match
// - replace
// - capture

// validation:
// 1. not empty
// 2. lower latin a..z - / : . 