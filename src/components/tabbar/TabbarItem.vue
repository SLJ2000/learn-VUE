<template>
    
      <div class="tab-bar-item" @click="itemclick">
          <!-- 具名插槽 ,动态决定图片，文字-->
          <slot v-if="!isActive" name="item-icon"></slot>
          <slot v-else name="item-icon-active"></slot>
          <div :class="{active:isActive}">
              <slot name="item-text"></slot>
            </div>
          
          
       </div>
     
</template>
<script>
export default {
    name:'TabbarItem',
    props:{
        path:String,
        select:String
    },
    data(){
        return{
            // isActive:true
        }
    },
    computed:{
        isActive(){
            if(this.path==this.select){
                return true
            }
            // indexof判断path是否有this.path,不等于-1则为找到，等于-1为找不到
            return false
        }
    },
    methods:{
        itemclick(){
            console.log(this.path)
            console.log(this.$route)
            console.log(this.$router)
            this.$router.push('/'+this.path)
            this.$emit('click',this.path)
        }
    }
}
</script>
<style scoped>

.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 55px;
}
.tab-bar-item p{
    margin-top: -5px;
}
.active{
    color: red;
}
</style>