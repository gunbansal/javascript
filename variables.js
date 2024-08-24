const accountId=14435
let accountEmail="gun16bansal@gmail.com"
var accountPass="12345"
accountCity="jaipur"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

//accountId=2
accountEmail="gun@gmail.com"
var accountPass="123"
accountCity="delhi"
console.log(accountId)
console.table([accountId,accountEmail,accountPass,accountCity])
