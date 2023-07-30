import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'

const Container = styled.div``

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>filter</Filter>
            <Filter>filter2</Filter>
        </FilterContainer>
    </Container>
  )
}

export default ProductList