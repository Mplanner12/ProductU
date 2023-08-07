import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { carousel } from '../components/carousel'
import Image from "next/image"
import APM from '../public/vectors/images/apm_certification.png'
import Protothon from '../public/vectors/images/prothom.png'
import Product from '../public/vectors/images/product_talk.png'



function Whyus() {
  const settings = {
    dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 0,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div className="flex flex-col gap-5 py-5 text-center lg:py-20 lg:gap-16">
      <h1 className="font-semibold text-[2rem]">Why us?</h1>
      <div className="flex flex-col">
        <Slider {...settings}>
          {carousel.map((item, index) => (
            <div className="flex px-2 lg:px-4 " key={index}>
              <div className="flex flex-col py-5 text-center border-4 border-blue-100 rounded-lg">
                {/* <Image src={item.icon} alt="" width={1} height={1} /> */}
                <h1 className="font-semibold">{item.header}</h1>
                <p className="text-sm lg:text-[1.2rem]">{item.info}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      <div className="flex items-center gap-10 font-semibold">
        <div className="rounded-lg">
          <Image src={APM} alt="" />
          <p className="">Cohort APM Certification</p>
        </div>
        <div className="rounded-lg">
          <Image src={Protothon} alt="" />
          <p className="">Cohort APM Certification</p>
        </div>
        <div className="rounded-lg">
          <Image src={Product} alt="" />
          <p className="">Cohort APM Certification</p>
        </div>
      </div>
    </div>
  )
}

export default Whyus