<template>
    <select v-model="modelValue" @change="changeOption">
        <option disabled value="">40x24x20 սմ</option>
        <option
        v-for="option in options"
        :key="option.value"
        :value="option.value">
            {{option.name}}
        </option>
    </select>
</template>

<script>
export default {
    name:'my-select',
    props:{
        modelValue:{
            type:String
        },
        options:{
            type:Array,
            default:() => []
        }
    },
    methods:{
        changeOption(event){
            console.log(event);
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>
<style scoped>
select{
    width: 100%;
    height: 30px;
    /* border: 1px solid #FF3F4D; */
    background: #FBFBFB;
    border: 1px solid #E8E8E8;
    border-radius: 3px;
    }
</style>