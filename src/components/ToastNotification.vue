<template>
    <div>
        <button @click="successBtn">Send</button>
        <button @click="errorBtn">Error</button>
    </div>

</template>

<script>
export default {
   methods:{
       errorBtn(){
           this.$toast.open({
               message: 'Error',
                type: 'error',
                timeout:2,
                body: 'this is information'
            })
       },
       successBtn(){
           this.$toast.success('Success', {
  // optional options Object
})
       }

   } 
}
</script>