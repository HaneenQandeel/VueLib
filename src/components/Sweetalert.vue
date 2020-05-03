<template>
    <button class="btn-send" @click="showAlert">Submit</button>
</template>
 
<script>
    export default {
        methods: {
            showAlert() {
                // Use sweetalert2
                this.$swal({
                    title: 'Error! You clicked the <b style="color:red;">error</b> button!',
				text: 'Alert with a custom image.',
				imageUrl: 'https://image.shutterstock.com/z/stock-vector--exclamation-mark-exclamation-mark-hazard-warning-symbol-flat-design-style-vector-eps-444778462.jpg',
				imageWidth: 200,
				imageHeight: 200,
				imageAlt: 'Custom image',
				animation: true,
                background:'#eee'
			
                });
            },
        },
    };
</script> 

<style>
button.btn-send{
    background-color:blue;
    width:150px;
    height:50px;
    border:none;
    font-size:16px;
    color:#fff;
}
</style>