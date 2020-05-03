<template>
  <div id="app">
    <calendar></calendar>
    <SliderComponent></SliderComponent>
    <Sweetalert></Sweetalert>
    <VueMask></VueMask>
    <ToastNotification></ToastNotification>
    <topProgress></topProgress>
    <vueTour></vueTour>
    <VueDropzone></VueDropzone>
    <VueEditor></VueEditor>
    <vueFilepond></vueFilepond>
    <FlagIcon></FlagIcon>
    <FormWizard></FormWizard>
    <PictureInput></PictureInput>
  </div>
</template>

<script>
import calendar from './components/calendar.vue'
import SliderComponent from './components/SliderComponent.vue'
import Sweetalert from './components/Sweetalert.vue'
import VueMask from './components/VueMask.vue'
import ToastNotification from './components/ToastNotification.vue'
import topProgress from './components/topProgress.vue'
import vueTour from './components/vueTour.vue'
import VueDropzone from './components/VueDropzone.vue'
import VueEditor from './components/VueEditor.vue'
import vueFilepond from './components/vueFilepond.vue'
import FlagIcon from './components/FlagIcon.vue'
import FormWizard from './components/FormWizard.vue'
import PictureInput from './components/PictureInput.vue'

export default {
  name: 'App',
  components: {
    calendar,
    SliderComponent,
    Sweetalert,
    VueMask,
    ToastNotification,
    topProgress,
    vueTour,
    VueDropzone,
    VueEditor,
    vueFilepond,
    FlagIcon,
    FormWizard,
    PictureInput
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
