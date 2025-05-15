import { useEffect, useState } from 'react'
import App from '../../App'
import { useAppSelector } from '../../hooks/hooks'
import axios from 'axios'
import AdandCategories from '../../components/AdandCategories'
import CategoriesCarosel from '../../components/CategoriesCarosel'
import BestSelling from '../../components/BestSelling'

export const Home = () => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    const getAllProducts = async() =>{
      setLoading(true)
        try {
          const res = await axios.get('https://fakestoreapi.com/products')
          
          setLoading(false)
          return setProduct(res.data)
        } catch (error) {
          console.log(error)
        }
    }

    getAllProducts()
  },[])


  const user  = useAppSelector((state) => state.user)
  return (
    <div className=' overflow-x-hidden'>
    <App>
      <AdandCategories/>
      <CategoriesCarosel/>
      <BestSelling/>
      
      </App>
      </div>
    
  )
}
