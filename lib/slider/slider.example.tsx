import * as React from 'react';
import {useState} from 'react';
import Slider from './slider';
import Button from '../button/button';
import SliderGroup from './sliderGroup';
import SliderItem from './sliderItem';
import SliderTitle from './sliderTitle';
import SliderBody from './sliderBody';

export default function SliderExample() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>toggle</Button>
      <Slider visible={visible}>
        <div>sliderExample</div>
        <div>sliderExample</div>
        <div>sliderExample</div>
        <div>sliderExample</div>
        <div>sliderExample</div>
        <div>sliderExample</div>
        <div>sliderExample</div>
      </Slider>
      <br/>
      <hr/>
      <SliderGroup>
        <SliderItem>
          <SliderTitle>SliderTitle</SliderTitle>
          <SliderBody>
            <div>SliderBody</div>
            <div>SliderBody</div>
            <div>SliderBody</div>
            <div>SliderBody</div>
          </SliderBody>
        </SliderItem>
        <SliderItem>
          <SliderTitle>SliderTitle</SliderTitle>
          <SliderBody>
            <div>SliderBody</div>
            <div>SliderBody</div>
            <div>SliderBody</div>
            <div>SliderBody</div>
          </SliderBody>
        </SliderItem>
        <SliderItem>
          <SliderTitle>SliderTitle</SliderTitle>
          <SliderBody>
            <div>SliderBody</div>
            <div>SliderBody</div>
            <div>SliderBody</div>
            <div>SliderBody</div>
          </SliderBody>
        </SliderItem>
      </SliderGroup>

    </div>
  )
}