import React from "react";
import ProductDetailsComponent from "../../components/ProductDetailsComponent/ProductDetailsComponent";
import { useParams,useNavigate } from "react-router-dom";
const ProductDetailsPage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    return (
        <div style={{padding:'5px 120px', background:'#fff',height:'fit-content'}}>
              <h5 style={{color:'rgb(128, 128, 137)',fontWeight:'700',fontSize:'16px'}}><span style={{cursor:'pointer'}} onClick={() => {navigate('/')}}>Trang chủ</span> - Chi tiết sản phẩm</h5>
            <ProductDetailsComponent idProduct={id}/>
        </div>
    ) 
}
export default ProductDetailsPage