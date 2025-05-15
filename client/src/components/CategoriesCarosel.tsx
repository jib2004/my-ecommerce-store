import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CategoriesCard from "./CategoriesCard";
import phone from '../assets/img/Vector (2).svg'

const CategoriesCarosel = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-9 my-8 border-y-[2px] py-6">

        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <div className="w-[20px] h-[40px] bg-[#DB4444] rounded"></div> 
                <h5 className="font-semibold text-[#DB4444]">Categories</h5>
            </div>

            <div>
                <h2 className="text-[36px] font-semibold">Browse By Category</h2>
            </div>            
        </div>

        <div >
    <Splide className=''  
    options={{ 
        perMove    : 1,
        gap        : '30px',
        pagination : false,
        drag  : true, // Enable dragging
        autoplay   : false,
        perPage:6,
        trimSpace:'true',
        
        margin:'0',
        paddingHorizontal:'60px',
        }}>
    <SplideSlide>
    <CategoriesCard title="Phones" imgSrc={phone}/>
    </SplideSlide>
    <SplideSlide>
        <CategoriesCard title="Fashion" imgSrc={phone}/>
    </SplideSlide>
    <SplideSlide>
        <CategoriesCard title="Computing" imgSrc={phone}/>
    </SplideSlide>
    <SplideSlide>
        <CategoriesCard title="Gaming" imgSrc={phone}/>
    </SplideSlide>
    <SplideSlide>
        <CategoriesCard title="Electronics" imgSrc={phone}/>
    </SplideSlide>
    <SplideSlide>
        <CategoriesCard title="Home & Lifestyle" imgSrc={phone}/>
    </SplideSlide>
    <SplideSlide>
        <CategoriesCard title="Baby's & Toys" imgSrc={phone}/>
    </SplideSlide>
    <SplideSlide>
        <CategoriesCard title="Sport & Outdoor" imgSrc={phone}/>
    </SplideSlide>
    <SplideSlide>
        <CategoriesCard title="Health & Beauty" imgSrc={phone}/>
    </SplideSlide>
    <SplideSlide>
        <CategoriesCard title="Automobile" imgSrc={phone}/>
    </SplideSlide>
    <SplideSlide>
        <CategoriesCard title="Pets" imgSrc={phone}/>
    </SplideSlide>
    <SplideSlide>
        <CategoriesCard title="Groceries" imgSrc={phone}/>
    </SplideSlide>
</Splide>
</div>
</div>
  )
}

export default CategoriesCarosel