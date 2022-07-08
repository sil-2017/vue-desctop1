<template>
<div class="ctr">
<div class="sertif">
    <ul
    v-for = "index in 5"
    :key="index">
        <li> 
           <p> <img src="../../assets/img/Rectangle.png"></p>
            <p>
                <span> {{ state.title }} </span> 
                <span>
                    {{ state.des}}
                </span>
            </p>
        </li>      
    </ul>
</div>
</div>
</template>
<script>
export default {
    name: "my-sertificed",
     data() {
        return {
            // image:"../assets/img/Rectangle.png",
            state: {
                title: "Amazon",
                des: "Certificed"
            }
        };
  },

};
</script>