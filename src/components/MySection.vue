<template>
    <div class="container">
        <div class="grid ">
            <div class="grid-col">
                <div class="grid-col-r">
                    <p><span>Պատրաստում ենք ցանկացած</span> <span>տեսակի թերմո պայուսակներ</span></p> 
                    <p>
                        <span>Պատրաստում ենք ցանկացած տեսակի թերմո պայուսակներ</span>
                        <span>Պատրաստում ենք ցանկացած տեսակի թերմո պայուսակներ</span>
                    </p>                
                    <my-button @click="showDialog">Մանրամասն</my-button>
                      <my-modal v-model:show="dialogVisible">  
                        <div class="modal">
                            <slayder :photos="photos"></slayder>
                            <div class="modal-inf">
                               <div>
                                <h1>Թերմո Պայուսակ</h1>
                                <p>Lorem Ipsum is simply dummy text of
                                the printing and typesetting industry.
                                Lorem Ipsum has been the industry's 
                                standard remaining essentially unchanged.Lorem Ipsum has been the industry's
                                Lorem Ipsum has been the industry's</p>
                                <my-select
                                v-model="selectedSize"
                                :options="sortSize">
                                </my-select>
                                <div><span>4900 Դր.</span> <my-button>Մանրամասն</my-button> </div>
                               </div>
                            </div>
                        </div>
                    </my-modal>                   
                 </div>
            </div>
            <div class="grid-col">
                <div class="grid-col-cnt">
                    <div class="grid-col-cnt_img"></div>
                    <img class="img" src="../assets/img/imageremovebgpreview2.png">
                    <div class="bf">
                        <img src="../assets/img/image1.png">
                    </div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "MySection",
    data() {
            return {
              dialogVisible:false,
              selectedSize:'',
              photos: [
                require('@/assets/img/image3.png'),
                require('@/assets/img/image3.png'),
                require('@/assets/img/image3.png'),
                require('@/assets/img/image8.png')
                ],
                sortSize:[
                {value:'title',name:'40x24x20 սմ'},
                {value:'title',name:'40x34x30 սմ'},
                {value:'title',name:'40x14x10 սմ'},
                ],
            };  
      },
      methods:{
        showDialog(){
          this.dialogVisible = true;
          }
          },
};
</script>

