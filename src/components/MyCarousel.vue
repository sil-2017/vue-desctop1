<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
     <slide v-for="slide in 15" :key="slide">
        <div class="carousel__item-typs">
            <img src="../assets/img/image3.png">
            <div class="types-content-txt">
            <h1>{{state.title}}</h1>
            <p>{{state.des}}</p>
            <p>
              {{state.price}}
              <my-button class="bth">Մանրամասն</my-button>
            </p>
            </div>
        </div>  
    </slide>
  </Carousel>  
</template>


<script>
import { Carousel, Navigation, Slide} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    
    return{
      settings: {
      itemsToShow:4,
      // snapAlign: 'start',
      autoplay:2000,
      wrapAround:true,
      mouseDrag:false,
      pauseAutoplayOnHover:true,
    },
     state: {
      title: "Թերմո պայուսակ",
      des: "40x24x20 սմ",
      price: "4900 Դր."
      },
     
       breakpoints: {
        // 700px and up
        300: {
          itemsToShow:1,
          snapAlign: 'center',
        },
        // 1024 and up
       500: {
          itemsToShow: 2,
          snapAlign: 'start',
        }, 
        700: {
          itemsToShow:4,
          snapAlign: 'start',
        }, 
    },
    };
  },
};
</script>

<style lang="scss">
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}

.carousel__item-typs{
    border: 1px solid #A4A4A4;
     &:hover{
            box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.23);
        }
  img{
    background-size: center center;
    width: 200px;
    height: auto;
     @media (max-width:622px) {
           width: 170px;
        }
  }
        
}
.carousel__slide > .carousel__item {
 
  transition: 600s;
}
.carousel__slide {
  justify-content: start;
//  margin: 5px 0px 0px 5px;

  .carousel__item {

}
}
</style>

