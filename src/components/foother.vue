<template>
    <div class="bg">
        <div class="foother">
            <div class="foother-log">
                <p>LOGO</p>
                <div>
                    <a href="#">
                        <img src="../assets/img/fb.svg" alt="">
                    </a>
                    <a href="#">
                        <img src="../assets/img/inst.svg" alt="">
                    </a>
                    
                </div>
            </div>
            <div class="foother-inf">
                <p>Լրացուցիչ տեղեկություն</p>
                <ul>
                    <li
                    v-for="(title,index) in titles"
                    :key="index"
                    :title="title">
                    {{title}}
                </li>
                </ul>
            </div>
            
            <div  class="foother-inf">
                <p>Օգնություն</p>
                <ul>
                    <li
                    v-for="(list,index) in lists"
                    :key="index"
                    :title="list">
                    {{list}}
                </li>
                </ul>
            </div>       
        </div>

        <div class="foother-btm">
            <ul>
                <li><a href="#"><img src="../assets/img/phon.png">+374 55 55 55</a></li>
                <li><a href="#"><img src="../assets/img/email.png">info@Termobox.am</a></li>
                <li><a href="#"><img src="../assets/img/map.png">Բաղրամյան</a></li>
            </ul>
        </div>
        
    </div>

   
    
</template>

<script>
    export default {
        name:"foother",
         data() {
            return {
                titles:[
                    'Մեր Տեսականին',
                    'Համագործակցություն',
                    'Կապ',
                    'Մեր Մասին',
                ],
                
                lists:[
                    'Առաքման պայմաններ',
                    'Վերադարձ',
                    'Կայքի քարտեզ'
                ],

            };
        },
        
    }
</script>