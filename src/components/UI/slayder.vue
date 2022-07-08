<template>
<div class="vueGallery">
    <div class="vueGallery-big">
 
      <button type="button" aria-label="Previous Photo" class="previous" @click="previousPhoto()"> 
        <i class = "fa fa-chevron-circle-left"> </i> 
      </button>

      <div class="activePhoto"  :style="'background-image: url('+photos[activePhoto]+');'"></div>

      <button type="button" aria-label="Next Photo" class="next" @click="nextPhoto()"> 
        <i class="fa fa-chevron-circle-right"></i>
      </button>

    </div>

    <div class="thumbnails">
      <!-- :src="`/images/${image.src}`" -->
      <!--  :src="`{{request.photo.src}}`" -->
      <div
           v-for="(photo, index) in photos"
           :src="photo"
           :key="index"
           @click="activePhoto = index"
           :class="{'active': activePhoto == index }" :style="'background-image: url('+photo+')'">
      </div>
    </div>

  </div>
    
</template>

<script>


    export default {
        name: "slayder",
          props:{    
            photos:{
                type:Array,
            }
        },

        data() {
            return {
               activePhoto: null,              
            };
        },

        methods: {
            nextPhoto () {
            this.activePhoto = ( this.activePhoto+1 < this.photos.length ? this.activePhoto+1 : 0 )
            },
            previousPhoto () {
            this.activePhoto = ( this.activePhoto-1 >= 0 ? this.activePhoto-1 : this.photos.length-1 )
            }
        },

          mounted () {
            this.activePhoto = 0
            document.addEventListener("keydown", (event) => {
            if (event.which == 37)
                this.previousPhoto()
            if (event.which == 39)
                this.nextPhoto()
            })
        },
        
    }
</script>