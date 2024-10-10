import './App.css';
import { useState, useEffect } from 'react';
import header from './header.png'; // Import your PNG header image

function App() {
  const [products,setProducts]=useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
 
  return (
    <div className="App">
      
   <h1>LOGO</h1>
   <div>
    <h1>Shop   Skills   Stories   AboutUS</h1>
    
   </div>
     <h1>Discover our products</h1>
   
<div className='container'>
<div className="filter-section">
  
        <label htmlFor="category-select" type="checkbox">customizable</label>
        <p>ideal</p>
        <select>
          <option value="all">All</option>
          </select>
          <p>occasion</p>
          <select 
         
        >
          <option value="all" id="all">all</option>
          </select>
          <p>work</p>

          <select 
        
        >
          <option value="all">all</option>
          </select>
          <p>fabric</p>

          <select
          
        >
          <option value="all">all</option>
          </select>
          <p>segment</p>

          <select >
          <option value="all">all</option>
        </select>
        <p>suitable</p>
        <select>
          <option value="all">All</option>
          </select>
          <p>Rawmaterial</p>
        <select>
          <option value="all">All</option>
          </select>
      </div>
     <div className='productgrid'>
{
  products.map(product=>(

    <div key={product.id} className='productcard'>

      <img src={product.image} alt={product.title}/>
      <h2>{product.title}   </h2>
    </div>
  ))
}
</div>

     </div>
    </div>
  );
}

export default App;
