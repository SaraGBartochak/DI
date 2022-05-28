import {useState,useEffect} from 'react';
import {Link, useParams,useNavigate} from 'react-router-dom';

const Product = (props) => {
  const [product, setProduct] = useState([])
  const [name,setName] = useState('')
  const [price,setPrice] = useState('')
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    fetch(`/api/products/${params.id}`)
    .then(res=>res.json())
    .then(data=>{
      setProduct(data);
      setName(data[0].name)
      setPrice(data[0].price)
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

 const update = (e) => {
   e.preventDefault();
   fetch(`/api/products/${params.id}`,{
     method:'PUT',
     headers:{
       'Content-Type':'application/json'
     },
     body:JSON.stringify({name,price})
   })
   .then(res=>res.json())
   .then(data=>{
     setProduct(data);
   })
   .catch(err=>{
     console.log(err);
   })
 }
 const del = () => {
   fetch(`/api/products/${params.id}`,{
     method:'DELETE',
     headers:{
       'Content-Type':'application/json'
     }
   })
   .then(res=>res.json())
   .then(data=>{
     navigate('/');
   })
   .catch(err=>{
     console.log(err);
   })
 }
  return (
    <>
      <h1>Product</h1>
      <div>
        <h2>Update Product</h2>
        <form onSubmit={update}>
          Name:<input type='text' onChange={(e)=>setName(e.target.value)} value={name}/>
          Price:<input type='text' onChange={(e)=>setPrice(e.target.value)} value={price}/>
          <input type='submit' value='Update Product' />
        </form>
      </div>
      <div>
        <h2>Delete Product</h2>
        <button onClick={del}>Delete Product</button>
      </div>
      {
        product.map(item=>{
          return(
            <div>
            Name:{item.name} Price:{item.price}$ Sku:{item.id}
            <Link to='/'>Show All</Link>
            </div>
          )
        })
      }
    </>
  )
}
export default Product
