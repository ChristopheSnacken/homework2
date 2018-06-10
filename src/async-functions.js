function giveItBackLater (value, callback) {
    function loadComplete() {
      callback(value)
    }
    setTimeout(loadComplete, 100)

}


function promiseToGiveItBackLater(value) {
  return new Promise((resolve, reject) => {
  giveItBackLater(value, resolve)
  })
}





function addSomePromises(somePromise) {
  return somePromise.then( string => string.concat(string))
  .catch( string => string.concat(string).concat(string))
}






module.exports.giveItBackLater = giveItBackLater
module.exports.addSomePromises = addSomePromises
module.exports.promiseToGiveItBackLater = promiseToGiveItBackLater
