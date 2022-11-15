import './App.css';

// Create an array of cars, each car will have: model, milage, and price (fill in with your own data)
// Create a method to find cars under certain milage: takes the milage then returns an array of cars
// Create a method to find cars within a min and max price: takes the min and max then returns an array of cars
// Create a method to find average price: takes an array and returns a price number
// Create a method to find by model: takes a model and returns array of cars
// Call each method with your own parameters and render results into the dom
// Upload a zip of your project without including node_modules

function App() {
  var cars =[
    {
      model: "Toyota Corolla",
      milage: 100000,
      price: 17000
    },
    {
      model: "Toyota Camry",
      milage: 100000,
      price: 25000
    },
    {
      model: "Bugatti",
      milage: 15000,
      price: 450000
    },
    {
      model: "Range Rover",
      milage: 25000,
      price: 45000
    },
    {
      model: "Honda civic",
      milage: 50000,
      price: 17000
    }
  ]

  let search = () =>{
    let results = cars.filter(car => car.milage > 44000);
    return results;
  }

  let searchCarsInRange = (min, max) =>{
    let results = cars.filter(car => car.milage < min && car.milage > max);
    return results;
  }

  //find average
  let average = () =>{
    let total = 0;
    let results = cars.filter(car => total + car.price)
    let average = results/cars.length;
    return average;
  
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

  // search by model
  let searchByModel = (model) =>{
    let result = cars.filter(car => car.model === model);
    return result;
  }

  // forEach doesnt return anything, its better to use map instead
  // products.forEach(function (value){

  // })

  

  return (
    <div>
      {/* {
        products.map((item, index) => { 
                
          return <div key={index}>
            <p >{item.name} for ${item.price}</p> 
            <button  onClick={addToCart(item)}>Add to Cart</button>
            </div> 
        })
        
      } */}
      <button onClick={() =>increase()}>Increase </button>
      <h1>Search Results</h1>
      {
        search().length > 0 ? search().map((serachResult, index) =>{
          return <p key={index}>{serachResult.name} for ${serachResult.price}</p>
        }) : <p>Empty staff</p>
      }

      <h1>Search Results in Range</h1>
      {
        searchCarsInRange(120000, 20000).length > 0 ? searchCarsInRange(120000, 20000).map((serachResult, index) =>{
          return <p key={index}>{serachResult.name} for ${serachResult.price}</p>
        }) : <p>Empty staff</p>
      }

      <h1>Average</h1>
      {
       
          
       
      }

      <h1>Search by Model</h1>
      {
        searchByModel("Toyota Corolla").map((serachResult, index)=>{ 
          return <p key={index}>{serachResult.name} for ${serachResult.price}</p>
       
      })
    }
      
    </div>
  );
}

export default App;
