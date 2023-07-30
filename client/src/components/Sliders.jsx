import React from 'react';
import styled from "styled-components";
import { sliderItems } from "../data";
import Slider from "./Slider";



const Sliders = () => {
  return (
    <Container>
      {sliderItems.map((item) => (
        <Slider item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Sliders;