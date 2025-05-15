import SellerMain from "./SellerMain"
import { FaPlusCircle } from "react-icons/fa"
import { useGetProductsQuery } from "../../../api/users/seller"
import { useParams,useNavigate, Link } from "react-router"
import ProductCard from "../../../components/ProductCard"
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


const SellerProducts = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  
  const {data,status,error} = useGetProductsQuery(id,{
    skip:!id
  })

  if(error?.status === 401){
    navigate('/login')
  }

  const navigateToAddPage =() =>{
    navigate("/seller/product/add")
  }
  
  return (
    <SellerMain>
      <div className="overflow-y-scroll h-[600px] ">
        <nav className=" flex justify-end px-4">
            <button onClick={navigateToAddPage} className="bg-black active:bg-black shadow hover:bg-[#444444] duration-300 w-[200px] text-white flex justify-center items-center gap-3">
                <FaPlusCircle color="white" /> <span className="font-semibold">Add New Product</span>
            </button>
        </nav>

        <div>
          {status === 'pending' && <div>
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" height="350px"/>
            </Box>
            </div>}

          <div className="grid grid-cols-4 gap-10  w-[90%] mx-auto mt-2  ">
          {data?.data.map(product=>(
            <Link to={`/seller/product/review/${product._id}`} className=""><ProductCard name={product.title} img={product.image[0]?.includes('http')? product.image[0]: `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_KEY}/image/upload/${product.image[0]}`} price={product.price} rating={product?.rating} isDiscounted={product.isDisCount} discountPrice={product.discountedPrice}  /></Link>
            

          ))}
          </div>
        </div>
        </div>


    </SellerMain>
  )
}

export default SellerProducts