import React, { useEffect, useState } from 'react'
import { catagoryApi } from '../api/Catagory'

import styled from "styled-components";
import CatagoryItem from './CatagoryItem';
const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;

`
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