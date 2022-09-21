import React, { useEffect, useState } from 'react'
import { catagoryApi } from '../api/Catagory'
import {Container} from '../styledComponent/Catagories.styled'
import CatagoryItem from './CatagoryItem';


 function Catagories(props) {
    const [data, setData] = useState(null)
    useEffect(() => {
        getCatagory()
    }, [])


    const getCatagory = ()=>{
        catagoryApi.then(res=>{
            setData(res.data.catagory)
        })
    }
    return (
        <Container>
            {
                data?.map(item=>(
                   <CatagoryItem item={item} /> 
                ))
            }
        </Container>
    )
}
export default Catagories