import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

const Products = (props) => {
  const [products,setProducts] = useState([]);
  const [searchInput,setSearchInput] = useState('')
  const [name,setName] = useState('')
  const [price,setPrice] = useState('')
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch('/api/products/')
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
      setLoading(false);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

  const search = () => {
    fetch(`/api/products/search?q=${searchInput}`)
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
      setLoading(false);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  const add = (e) => {
    e.preventDefault();
    fetch('/api/products/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name,price})
    })
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
      setLoading(false);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  return (
    <>
      <h1>Products</h1>
      <div>
        Search: <input type='text' onChange={(e)=>setSearchInput(e.target.value)}/>
        <button onClick={search}>Search</button>
      </div>
      <div>
        <h2>Add Product</h2>
        <form onSubmit={add}>
          Name:<input type='text' onChange={(e)=>setName(e.target.value)}/>
          Price:<input type='text' onChange={(e)=>setPrice(e.target.value)}/>
          <input type='submit' value='Add Product' />
        </form>
      </div>

      {
        products.length === 0 ? <h2>No Product to show</h2> : null
      }
      {
        loading ? <h2>Loadind...</h2> : products.map(item=>{
          return(
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>Price:{item.price}$</p>
              <Link to={`/${item.id}`}>Show</Link>
            </div>
          )
        })
      }
    </>
  )
}
export default Products
