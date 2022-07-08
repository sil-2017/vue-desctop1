<template>
  <div class="app">
    <my-humburger></my-humburger>
    <navigation></navigation>   
    <my-section></my-section>
    <my-sertificed></my-sertificed>   
     <types></types>
    <blue-menu></blue-menu>
    <about> </about>
    <feedback></feedback>
    <foother></foother>
     
  </div>
</template>

<script>
import MyHumburger from '@/components/UI/MyHumburger';

  export default {
    components:{
      MyHumburger,MyHumburger
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
