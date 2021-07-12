<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>
<script>
export default {
    name:'tabbar',
    props:{
      name:String
    },
    created(){
      console.log(this.name)
    }
}
</script>
<style scoped>
#tab-bar{
  /* flex布局 */
    display: flex;
    /* 位置考下 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  /* 阴影 */
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
  background-color: #f6f6f6;
}

</style>