
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import phone from '../assets/img/bagus-hernawan-A6JxK37IlPo-unsplash.jpg'


const Carousel = () => {
  return (
    
    <Splide className='h-[344px] w-[950px]'  
    options={{ 
        type: 'loop',
        lazyLoad:'sequential', 
        perPage: 1,
        perMove    : 1,
        autoplay: true,
        interval: 3000, 

        
        }}>
    <SplideSlide>
        <img src={phone} className="h-[344px] w-[950px] object-cover" alt="Slide 1" />
    </SplideSlide>
    <SplideSlide>
        <img src={phone} className="h-[344px] w-[950px] object-cover" alt="Slide 2" />
    </SplideSlide>
    <SplideSlide>
        <img src={phone} className="h-[344px] w-[950px] object-cover" alt="Slide 3" />
    </SplideSlide>
    <SplideSlide>
        <img src={phone} className="h-[344px] w-[950px] object-cover" alt="Slide 4" />
    </SplideSlide>
</Splide>
  )
}

export default Carousel