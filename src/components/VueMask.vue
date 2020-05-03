<template>
    <div>
  <h2>Vue Mask</h2>
  <the-mask :mask="mask" /> 
  <the-mask :mask="maskV" /> 
    </div>
</template>

<script>
export default {
    data: () => ({
    mask: '+55 (##) #####-####',
    maskV:'###.###.###-##',
    value: ''
  })
}
</script>