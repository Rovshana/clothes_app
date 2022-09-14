import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Announce from '../components/Announce'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import {mobile} from '../responsive'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
const Container = styled.div`
`
const FilterContainer = styled.div`

display: flex;
justify-content: space-between;
`

const Title = styled.h1`
margin: 20px;
`
const Filter = styled.div`
margin: 20px;
${mobile({margin: "0px 20px", display: "flex", flexDirection: "column"})}
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 500;
margin-right: 20px;
${mobile({margin: "0px"})}


`
const Select = styled.select`
margin-right: 20px;
padding: 10px;
${mobile({margin: "10px 0px"})}
`
const Option = styled.option`
`
 function ProductList(props) {
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")
    const location = useLocation()
   
    const catagory = location.pathname.split("/")[2]
    console.log(catagory)
    const handleFilters = (e)=>{
const value = e.target.value;
setFilters({
    ...filters,
    [e.target.name]:value, 
})
    }
    return (
        <Container>
            <Navbar/>
            <Announce
            />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                    <Select  name="color" onChange={handleFilters}>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Orange</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Green</Option>
                        <Option>Pink</Option>
                        <Option>Purple</Option>
                    </Select>
                    <Select  name='size' onChange={handleFilters}>
                        <Option disabled selected>Size</Option>
                        <Option>Xs</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        
                    </Select>
                    
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select onChange={(e)=> setSort(e.target.value)}>
                        <Option value="newest">
                            Newest

                        </Option>
                        <Option value='asc'>Price(asc)</Option>
                        <Option value="desc">Price(desc)</Option>
                    </Select>
                    
                </Filter>

            </FilterContainer>
            <Products filter={filters}  catagory={catagory} sort={sort}/>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}
export default ProductList