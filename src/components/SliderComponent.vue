<template>
  <div>
    <h2>Slider Component</h2>
    <vue-slider v-model="value" v-bind="options"/>
    <h3>{{ value }}</h3>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
 
export default {
  components: {
    VueSlider
  },
  data () {
    return {
      value: 0,
      options: {
        dotSize: 14,
        width: '600px',
        height: 8,
        contained: false,
        direction: 'ltr',
        data: null,
        min: 0,
        max: 100,
        interval: 1,
        disabled: false,
        clickable: true,
        duration: 0.5,
        adsorb: false,
        lazy: false,
        tooltip: 'active',
        tooltipPlacement: 'top',
        tooltipFormatter: void 0,
        useKeyboard: false,
        keydownHook: null,
        dragOnClick: false,
        enableCross: true,
        fixed: false,
        minRange: void 0,
        maxRange: void 0,
        order: true,
        marks: false,
        dotOptions: void 0,
        process: true,
        dotStyle: void 0,
        railStyle: void 0,
        processStyle: void 0,
        tooltipStyle: void 0,
        stepStyle: void 0,
        stepActiveStyle: void 0,
        labelStyle: void 0,
        labelActiveStyle: void 0,
      }
    }
  }
}
</script>