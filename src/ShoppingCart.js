

class  ShoppingCart {

    constructor(items) {
      if (items == undefined) {
        this.items = []
      }
      else {this.items = items}
      }
    getItems() {
      return this.items

    }
    addItem(itemName, quantity, price) {
        return this.items.push({'name': itemName, 'quantity': quantity, 'pricePerUnit': price})

    }
    clear() {
      return this.items = []
    }

    clone() {

    return  new ShoppingCart(this.items.map( obj => Object.assign({}, obj )))
    }


}


module.exports = ShoppingCart
