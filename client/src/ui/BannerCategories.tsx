import { useEffect, useState } from "react";
import {config} from "../../config";
import { getData } from "../lib";
import Carousel from 'react-multi-carousel';
import { CategoryProps } from "../../type";
import { Link } from "react-router-dom";
import CustomLeftArrow from "./CustomLeftArrow"
import CustomRightArrow from "./CustomRightArrow"



const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const BannerCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const fetchData = async() =>{
        const endpoint = `${config?.baseUrl}/categories`
        try {
          const data = await getData(endpoint)
          setCategories(data)
        } catch (error) {
          console.log('Error fetching categories', error)
        }
      }
      fetchData()
    }, [])
  
  return <Carousel 
    responsive={responsive}
    infinite={true}
    autoPlay={true}
    transitionDuration={1010}
    className=" flex flex-row p-4 max-w-screen-xl mx-auto lg:px-0 relative"
    customRightArrow={<CustomRightArrow  />}
    customLeftArrow={<CustomLeftArrow  />}
   
  >
  {categories.map((category:CategoryProps) =>(
    <Link key={category?._id} to={`/category/${category?._base}`}
        className=" flex items-center gap-x-2 p-1 border border-gray-100 mr-1 flex-1 rounded-md hover:border-skyText hover:shadow-lg"
    >
        <img src={category?.image} alt="cate" 
        className=" w-10 h-10 rounded-full object-cover" 
        />
        <p className=" text-sm font-samibold">{category?.name}</p>
    </Link>
  ))}
  </Carousel>
}

export default BannerCategories