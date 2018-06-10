
function pathFind (path, object){
    if (path.length < 1) return object
    return pathFind(path.slice(1), object[path[0]])
}

console.log(pathFind(["book", "author", "name"], {
  book: {
    author: {
      name: "Yuval"
    }
  }
}))

module.exports.pathFind = pathFind
