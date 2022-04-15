//#region demo code

// SECTION variable types
// var, let, const
// var/let changeable variables
// const is static / permanent


// SECTION primative types
//#region
// numbers (math: +,-,*,/, ++ increment, -- decrement)
// strings (sentance or character) "" '' ``
var myFirstName = 'mark'
var myLastName = 'ohnsman'

// String concatenation
// var myFullName = myFirstName + ' ' + myLastName

// String interpolation
// var myFullName = `${myFirstName} this is just string text ${7 + 8}`
// console.log(myFirstName)
//#endregion



// SECTION boolean
// True/False (truthy and falsy)
// comparison operators (>, <, >=, <=, ==, ===, !, &&, ||)
// conditional (see in code flow below)


// null/undefined




// Section Control flow

// Conditionals IF, Else, Else If
// let age = 15

// if (age >= 21) {
//   // run if true
//   console.log('Drink up')

// } else if (age >= 18) {
//   // run if condition 1 is false but condition 2 is true
//   console.log('Go Vote')
// } else {
//   // run if all above is false
//   console.log('go home kid')
// }


// Loops
// for

// for (let i = 0; i < 100; i += 3) {
//   console.log(i)
// }

//#endregion

let shopkeeper = 'Wizbang'
// Section OBJECTs
let shopProducts = [{
  id: '11g2233',
  name: 'Boots of Skywalking',
  description: 'These boots were made for walking, and thats what youll do',
  imgUrl: 'assets/img/boots.png',
  quantity: 3
}, {
  id: '112244',
  name: 'Bone Bow',
  description: 'Ranged attacks, Stay safe use a pointed stick from afar',
  imgUrl: 'assets/img/bow.png',
  quantity: 2
}, {
  id: '112255',
  name: 'Eagles Talon',
  description: 'Fly through your enemies with this feathered edge.',
  imgUrl: 'assets/img/dagger.png',
  quantity: 1
}, {
  id: '112266',
  name: 'Horned Helm',
  description: 'A nice horned helm be careful with the color red when wearing',
  imgUrl: 'assets/img/helm.png',
  quantity: 4
}, {
  id: '112277',
  name: 'Rations',
  description: 'Yum Yum, You are going to need to eat on your adventure. Take this!',
  imgUrl: 'assets/img/ration.png',
  quantity: 10
}, {
  id: '112288',
  name: 'Mysterious Ring',
  description: 'There is probably some left over magic in this ring purchase it to identify',
  imgUrl: 'assets/img/ring.png',
  quantity: 1
}, {
  id: '112299',
  name: 'Rope',
  description: 'No adventurer is complete without a bundle of sturdy rope',
  imgUrl: 'assets/img/rope.png',
  quantity: 4
}, {
  id: '1',
  name: 'Bag of Holding',
  description: 'Where are you going to keep all of your things without a bag such as this',
  imgUrl: 'assets/img/bag.png',
  quantity: 0
}, {
  id: '11g23234233',
  name: 'Boots of Lava Walking',
  description: 'These boots were made for hot stuff, good luck',
  imgUrl: 'assets/img/boots.png',
  quantity: 3
}]

let cart = []


/* <div class="product-card">
<img src="assets/assets/img/bag.png" alt="" height="200">
<h4>Big`o Bag</h4>
<p>I bet you can put lots of things in here.</p>
</div> */
function drawProducts() {
  let template = ''
  // add html for every product to the template
  for (let i = 0; i < shopProducts.length; i++) {
    const product = shopProducts[i]
    template += `
    <div class="product-card" onclick="addToCart('${product.id}')">
      <img src="${product.imgUrl}" alt="" height="200">
      <h4>${product.name}</h4>
      <p>${product.description}</p>
    </div>
    `
  }
  document.getElementById('products').innerHTML = template
}

function drawCart() {
  let template = ''
  // add html for every product to the template
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i]
    template += `
      <li>${product.name}</li>
    `
  }
  document.getElementById('cart-body').innerHTML = template
}


function addToCart(id) {
  let productToAdd = shopProducts.find(prod => prod.id == id)
  cart.push(productToAdd)
  drawCart()
}

function emptyCart() {
  // several ways to empty an array
  // cart.length = 0
  cart = []
  drawCart()
}















document.getElementById('shopkeeper-name').innerText = shopkeeper
drawProducts()