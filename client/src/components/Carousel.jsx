import { useEffect, useState } from 'react'
import firstImage from "../assets/1.jpg"
import secondImage from "../assets/2.jpg"
import thirdImage from "../assets/3.jpg"
import {AiOutlineRightCircle,AiOutlineLeftCircle} from "react-icons/ai"

const sliderImages = [
    {
      title: "title 1",
      url:firstImage
    },
    {
      title: "title 2",
      url:secondImage
    },
    {
      title: "title 3",
      url:thirdImage
    }
  ];
const Carousel = () => {

    const [counter, setCounter] = useState(0);
    const moveRight = () =>{
        if(counter===2){
          setCounter(0)
        }
        if(counter<2){
            setCounter(prev => prev+1)
        }
    }
    const moveLeft = () =>{
      if(counter===0){
        setCounter(2)
      }
        if(counter>0){
            setCounter(prev => prev-1)
        }
    }
    // console.log(counter)
    // useEffect(()=>{
    //     const set = setInterval(() => {
    //         if(counter===2){
    //             setCounter(0)
    //         }else if(counter<2){
    //             setCounter(prev => prev+1)
    //         }

    //     }, 2000);
    //     set
    //     return ()=>{
    //         clearInterval(set)
    //     }
    // },[])
    
  return (
    <div className='relative '>
      <button className='absolute top-[45%] md:top-[50%]  left-0 lg:left-8' onClick={moveLeft} ><AiOutlineLeftCircle className=' w-12 h-12 font-bold text-xl  hover:cursor-pointer  p-2' /></button>
        
      <div className="slider w-[320px] h-[300px] bg-no-repeat bg-contain bg-center md:w-[550px] md:h-[300px] lg:w-[750px] lg:h-[500px]  xl:w-[950px] xl:h-[500px]" style={{backgroundImage:`url(${sliderImages[counter].url})`}}>
        <button className='absolute top-[45%] md:top-[50%] right-0 lg:right-8'  onClick={moveRight} ><AiOutlineRightCircle className=' w-12 h-12 hover:cursor-pointer hover:rounded-full p-2'/></button>
      
      </div>
    </div>
  )
}

export default Carousel
