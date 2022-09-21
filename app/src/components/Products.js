import {useEffect, useState} from 'react'
import { Container } from '../styledComponent/Products.styled'
import { ProductApi } from '../api/Product'
import Product from './Product'


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