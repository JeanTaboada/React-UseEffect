import { useEffect, useState } from "react"
import axios from "axios";

export const ProductList = () => {

const [products, setproducts] = useState([])

const [category, setcategory] = useState("men's clothing")

useEffect(() => {
  console.log("se activo el UseEffect")
  const fecthProducts = async()=>{
  try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
      setproducts(response.data)
      console.log(response.data)
    
  } catch (error) {
    console.log(error) 
  }

  }
  fecthProducts()

}, [category])


  return (
    <div>
      <button onClick={()=>{setcategory('electronics')}}>Electronics</button>
      <button onClick={()=>{setcategory('jewelery')}}>Jewelery</button>
      <button onClick={()=>{setcategory("women's clothing")}}>women's clothing</button>
      {
       products.map((producto)=>(
       <div key={producto.id}>
        <h2>{producto.title}</h2>
        <img src={producto.image} alt="" />
        <h2>{producto.price}</h2>
        </div>
       ))
      }
    </div>
  )
}
