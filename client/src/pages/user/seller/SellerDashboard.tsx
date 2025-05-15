import SellerMain from './SellerMain'
// import { useGetProductsQuery } from '../../../api/users/seller'
import { useAppSelector } from '../../../hooks/hooks'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'



const SellerDashboard = () => {
  const user = useAppSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(()=>{
    if (user.plan === ""){
      navigate("/plans")
    }
  },[])

 
  return (
    <div>
      <SellerMain>
      SellerDashboard
      </SellerMain>
      </div>
  )
}

export default SellerDashboard