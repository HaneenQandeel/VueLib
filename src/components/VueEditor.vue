<template>
  <div id="app">
    <vue-editor v-model="content"></vue-editor>
    <div v-html="content"></div>
  </div>
</template>
 
<script>
import { VueEditor } from 'vue2-editor'
 
export default {
  data() {
    return {
      content: '<h1>Initial Content</h1>'
    }
  },
  components: {
    VueEditor
    }
}
</script>