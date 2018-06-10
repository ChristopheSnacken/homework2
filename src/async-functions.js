function giveItBackLater (value, callback) {
    function loadComplete() {
      callback(value)
    }
    setTimeout(loadComplete, 100)
}


promiseToGiveItBackLater(value)
.then( value => giveItBackLater(value))

function addSomePromises(somePromise) {
  return new Promise((resolve, reject) => {
    if (somePromise) {
      resolve(somePromise.concat(somePromise))
    } else {
      reject(somePromise.concat(somePromise).concat(somePromise))
    }
  })
}
const outputPromise = addSomePromises(somePromise)
outputPromise.then(successCallback, failureCallback)



module.exports.giveItBackLater = giveItBackLater
module.exports.addSomePromises = addSomePromises
module.exports. promiseToGiveItBackLater = promiseToGiveItBackLater
