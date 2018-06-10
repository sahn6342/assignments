var a
var value = ''
var aa = 0
var gg = ''
var b = (convert_to, num) => {
  i = convert_to
  a = num
  switch (i) 
  {
    case 1:

      while (a > 0) {
        aa = a % 2;
        value = value + aa.toString()

        a = parseInt(a / 2)
      }
      op(value)
    break
  case 2:

      while (a > 0) {
        aa = a % 16
        if (aa > 9) {
          switch (aa) {
            case 10:
              aa = 'A'
              break

            case 11:
              aa = 'B'
              break
            case 12:
              aa = 'C'
              break
            case 13:
              aa = 'D'
              break
            case 14:
              aa = 'E'
              break
            case 15:
              aa = 'F'
              break
          }
        }
        value = value + aa.toString()
        a = parseInt(a / 16)

      }
      op(value)
      break
    case 3:

      while (a > 0) {
        aa = a % 8;
        value = value + aa.toString()

        a = parseInt(a / 8)
      }
   op(value)
   break
}
}
  var op = (a) => { a = value
   for (i = value.length - 1; i >= 0; i--) {
    console.log(value[i])

    gg = gg + value[i]
  }
  console.log('binary conversion is ' + gg)

}

b(1,8)