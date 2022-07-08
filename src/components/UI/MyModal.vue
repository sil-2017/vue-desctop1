<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name:'my-modal', 
    props:{
        show:Boolean,
        default:false,
    },
    methods:{
        hideDialog(){
            this.$emit('update:show', false)
        }
    }    
  }
</script>

<style lang="scss">
 .dialog{
     top: 0;
     bottom: 0;
     right: 0;
     left: 0;
     position: fixed;
     background: rgba(0, 0, 0, 0.6);
     display: flex;
     z-index: 99999;

     &__content{
        margin: auto;
        background: white;
        border-radius: 15px;
        min-height: 300px;
          @media  (max-width: 995px) {
            width: 70vw;
            height: 100%;
            overflow-y: auto;
            } 
        
        @media  (max-width:605px) {
            width: 70vw;
            height: 100%;
        }
    }
 }
 
</style>