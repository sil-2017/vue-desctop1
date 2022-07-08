<template>
  <div class="ctr">
   <div class="feedback" >
     <div class="feedback-l">

        <div>
            <div>
                <img src="../assets/img/feedf.png">
                <p>+374 55 55 55 55</p>
            </div>

            <div>
                <img src="../assets/img/feed.png">
                <p>info@Termobox.am</p>
            </div>

            <div>
                <img src="../assets/img/time.png">
                <p>09:00 - 10:00</p>
            </div>

        </div>

    </div>

    <div class="feedback-r">
        <div class="feedback-r-h"> Կապ մեզ հետ</div>
        <div class="feedback-r-inp">
            <input type="name" placeholder="Անուն"/>
            <input type="name" placeholder="Ազգանուն"/>
            <input v-mask type=text name=phone placeholder="Հեռախոսահամար" required/>           
            <textarea placeholder="Հաղորդագրություն"></textarea>
        </div>
        <my-button> Ուղարկել</my-button>

    </div>
   </div>
   
    
  </div>
</template>

<script>
export default {
  name: "feedback",
  data() {
    return {
        
    };
  },
};
</script>