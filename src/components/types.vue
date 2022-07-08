<template>
 <div class="ctr">
  <div class="types">
    <div class="types">
    <div class="types-h"> Մեր Տեսականին </div>
    <div class="types-nav">
        <ul>
             <li
            v-for="(link,index) in links"
            :key="index"
            :link="link">
           <a> {{link}}</a>
            </li>
        </ul>
    </div>

    <div class="types-content">
      <my-carousel></my-carousel>
    </div>
    
  </div>
  </div>
</div>
</template>

<script>

import MyCarousel from './MyCarousel';

export default {
  name: "types",

   components:{
      MyCarousel,
    },

  data() {
    return {
        links:[
            'Տեսնել Բոլորը',
            'Թերմո պայուակներ',
            'Թերմո տոպրակներ'
        ],
        
    };
  },
};
</script>