import React, { useEffect, useRef, useState } from "react";
import TypeProduct from "../../components/TypeProduct/Typeproduct";
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from '../../assets/slider/slider5.webp'
import slider2 from '../../assets/slider/slider2.webp'
import slider3 from '../../assets/slider/slider3.webp'
import slider4 from '../../assets/slider/slider4.webp'
import CardComponent from "../../components/CardComponent/CardComponent";
import {useQuery} from "@tanstack/react-query"
import * as ProductService from '../../services/ProductService'
import { useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import Loading from "../../components/LoadingComponent/Loading";
import {MenuOutlined} from '@ant-design/icons';
import { Popover, Select } from "antd";

const HomePage = () => {
  const searchProduct = useSelector((state) => state?.product?.search)
  const searchDebounce = useDebounce(searchProduct, 1000)

  const[loading,setLoading] =useState(false)
  const [limit, setLimit] = useState(6)
  const [typeProducts, setTypeProducts] = useState([])
 

  const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1]
    const search = context?.queryKey && context?.queryKey[2]
    const res = await ProductService.getAllProduct(search, limit)

    return res 
  }
  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct()
    if(res?.status === 'OK') {
      setTypeProducts(res?.data)
    }
  }

  const { isLoading, data:products, isPreviousData } = useQuery(['products', limit, searchDebounce], fetchProductAll, { retry: 3, retryDelay: 1000, keepPreviousData: true })

  useEffect(() => {
    fetchAllTypeProduct()
  }, [])



  const content = (
    typeProducts.map((item) => {
        return (
          <TypeProduct name={item} key={item}/>
        )
      })
  );
  


  return (
      <Loading isLoading={isLoading || loading}>
          
          <div className="body" style={{width:'100%',backgroundColor:'#fff', position: 'relative'}}>
            <Popover content={content}>
              <MenuOutlined style={{marginLeft:'25px',fontSize:'20px',color:'#fff',
                          fontWeight:'700',marginTop:'15px',position:'absolute',top:'2%',left:'1%',
                          transform:'translate(-50%, -50%)',zIndex:'1'}} />
            </Popover>

            <SliderComponent style={{width:'1600px',height:'800px'}} arrImages={[slider2,slider1,slider3,slider4]}/>

            <div id="container" style={{height:'1000px',width:'1540px',margin:'0 auto',height:'fit-content'}}>       
                <div style={{textAlign:'center',fontSize:'30px',fontWeight:'bolder',padding:'45px 30px'}}>NHỮNG SẢN PHẨM TẠI CỬA HÀNG</div>
                <WrapperProducts>
                    {products?.data?.map((product) => {
                    
                      return (
                        <CardComponent
                          key={product._id}
                          countInStock={product.countInStock}
                          description={product.description}
                          image={product.image}
                          name={product.name}
                          price={product.price}
                          rating={product.rating}
                          type={product.type}
                          selled={product.selled}
                          discount={product.discount}
                          id={product._id}
                        />
                      )
                    })}
                </WrapperProducts>

                <div style={{width:'100%',display:'flex',justifyContent:'center',marginTop:'10px'}}>
                    <WrapperButtonMore
                        textbutton={isPreviousData ? 'Load more...' : "Xem Thêm"} type="outline" styleButton={{
                            border: `1px solid ${products?.total === products?.data?.length ? '#f5f5f5' : '#9255FD'}`,
                            color: `${products?.total === products?.data?.length ? '#f5f5f5' : '#9255FD'}`,
                            width: '240px', height: '38px', borderRadius: '4px'
                        }}
                        disabled={products?.total === products?.data?.length || products?.totalPage === 1}
                        styleTextButton={{ fontWeight: 500, color: products?.total === products?.data?.length && '#fff' }}
                        onClick={() => setLimit((prev) => prev + 6)}
                    />          
                </div>
          </div>
            </div>
         
      </Loading>
  )
}


export default HomePage