import React, { useEffect, useState } from 'react'
import {product} from '../../../_services';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function BlogPage(props) {
  const settingSlider = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay:true,
    autoplaySpeed: 3000,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  }
  const [value,setvalue] = useState([]);
    useEffect(()=>{
      BlogApi()
    },[])
    async function BlogApi(){
      const result = await product.BlogApi();
      console.log(result.data.items,"blog api");
      setvalue(result.data.items);
    }
  return (
    <section className="blogs-info">
 { value.length > 0 ? 
   <div className="container">     
      <h3 className="text-center my-4 heading-text">
        Blogs 
      </h3>
      <div className="row">
        <Slider className="col-md-12" {...settingSlider} >
    { value.map((item,index)=>(   
        <div  key={index}>
          <div className="blogs-card mr-4">
            <div className="blog-image"><img src={item.image} className="w-100" alt="" title="" /></div>
            <h2 className="blog-heading">{item.name}</h2>
           {item.short_description?  <p className="blog-descripton">{item.short_description}
            </p>:'' }
            <ul className="blog-date-time my-3">
              <li><i className="fa fa-solid fa-calendar"></i>{item.publish_date}</li>
              <li><i className="fa fa-solid fa-user"></i> <a href="#">Admin</a></li>
              <li><i className="fa fa-solid fa-eye"></i>3</li>
            </ul>
            <p className="blog-read-more"><a href="#" title="Read More">Read more</a></p>
          </div>
        </div>
    ))}
    </Slider>
      </div>
    </div>
    : ""}
  </section>
  )
}
