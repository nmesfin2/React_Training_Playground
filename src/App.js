import './App.css';

// Create an array of cars, each car will have: model, milage, and price (fill in with your own data)
// Create a method to find cars under certain milage: takes the milage then returns an array of cars
// Create a method to find cars within a min and max price: takes the min and max then returns an array of cars
// Create a method to find average price: takes an array and returns a price number
// Create a method to find by model: takes a model and returns array of cars
// Call each method with your own parameters and render results into the dom
// Upload a zip of your project without including node_modules

function App() {
  var input ="Ip"
  var products =[
    {
      name: "iPhone",
      price: 100
    },
    {
      name: "Ipad",
      price: 100
    },
    {
      name: "sumsung",
      price: 100
    },
    {
      name: "Nokia",
      price: 100
    },
    {
      name: "iPhone",
      price: 100
    }
  ]

  let search = () =>{
    let results = products.filter(product => product.name.includes(input));
    return results;
  }
  var count = 0
  let increase = () =>{
    if(count === 0){
      var sum = count;
    }
    count++;
    console.log(sum);
    console.log(count);
  }

  let cart = {
    items:[],
    total:0
  }

  let addToCart = (item) =>{
    //cart.items.push(item)
    cart.items = [...cart.items, item];
    cart.total = cart.items.reduce((totalCart, cartItem) => totalCart + cartItem.price, 0);
    console.log(cart)
    

    
  }

  // forEach doesnt return anything, its better to use map instead
  products.forEach(function (value){

  })

  

  return (
    <div>
      {
        products.map((item, index) => { 
                
          return <div key={index}>
            <p >{item.name} for ${item.price}</p> 
            <button  onClick={addToCart(item)}>Add to Cart</button>
            </div> 
        })
        
      }
      <button onClick={() =>increase()}>Increase </button>
      <h1>Search Results</h1>
      {
        search().length > 0 ? search().map((serachResult, index) =>{
          return <p key={index}>{serachResult.name} for ${serachResult.price}</p>
        }) : <p>Empty staff</p>
      }

      
    </div>
  );
}

export default App;
