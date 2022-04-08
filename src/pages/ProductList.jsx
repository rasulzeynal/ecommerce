import styled from "styled-components";
import NavBar from "../components2/NavBar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../Responsive";
import { useState } from "react";

const Container = styled.div`

`;
const Title = styled.h1`
    margin:20px;
`;
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;
const Filter = styled.div`
    margin:20px;
    ${mobile({width:"0px 20px",display:"flex",flexDirection:"column"})};
`;
const FilterText= styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
    ${mobile({marginRight:"0px"})};
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({marginRight:"10px 0 px"})};
`;
const Option = styled.option``;

const ProductList = () => {
  const [filter,setFiler] = useState({})

  const handleFilters= (e) => {
    const value=e.target.value;
    setFiler({
      [e.target.name]:value,
    })
  } 

  console.log(filter);
  return (
    <Container>
      <NavBar/>
      <Announcement/>
      <Title>Dresses</Title>
      <FilterContainer>
          <Filter><FilterText>Filter Products:</FilterText>
          <Select>
            <Option name="color" onChange={handleFilters}>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option name="size" onChange={handleFilters}>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
          </Filter>
          <Filter><FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
          </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
