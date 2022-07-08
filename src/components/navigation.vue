<template>
  <div class="header">
      <div class="header__logo">
        <span class="header__logo__text"> Logo </span>      
      </div>
      <div class="header__navigation">
        <ul 
         class="header__navigation__link_ul"
         >
            <li
            class="header__navigation__link"
            v-for="(title,index) in titles"
            :key="index"
            :title="title">
            {{title}}
            </li>
        </ul>
        </div>
      <div class="header__sel"> <p> Հայ </p> </div>      
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
        titles:[
            'Մեր Տեսականին',
            'Համագործակցություն',
            'Կապ',
            'Մեր Մասին',
        ]
    };
  },
};
</script>