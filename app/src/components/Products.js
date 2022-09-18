import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { ProductApi } from '../api/Product'
import Product from './Product'
const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

/* background-color: #f5fbfd; */

`
 function Products({catagory, filters, sort}) {
    console.log(catagory, filters, sort)
    const [product, setProduct] = useState(null)
   

    useEffect(() => {
       getProduct() 
    }, [catagory])

    const getProduct = ()=>{
        ProductApi.then(res=>{
            setProduct(res.data.product)

        })
    }

    return (
        <Container>
            {
               product?.map((item, index)=>(
                <Product item = {item} key={item.id} />
               )) 
            }
            
        </Container>
    )
}
export default Products