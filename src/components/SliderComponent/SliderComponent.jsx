import React from "react";
import Slider from "react-slick";
import { Image } from "antd";
import { WrapperSliderStyle } from "./style";
const SliderComponent = ({arrImages}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 10000
    };
    return (
        <WrapperSliderStyle {...settings}>
            {arrImages.map((image)=>{
                return(
                    //<Image key={image} src ={image} alt="slider" preview={false} height="400px" width="100%"/>
                    <Image key={image} src ={image} alt="slider" preview={false} height="720px" width="100%" border="none"/>
                )
            })}
        </WrapperSliderStyle>
    )
}
export default SliderComponent