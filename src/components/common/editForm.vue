<template>
    <div class="editform">
        <div class="editform_head">
            <div class="edit_name">新增资讯</div>
            <div class="edit_closebtn" @click="closeEditPage()">X</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'edit-form',
    data(){
        return{

        }
    },
    methods:{
        closeEditPage(){
            console.log('aa')
            this.$emit('closeEdit')
        }
    },
    created(){

    },
    mounted(){
        
    }
}
</script>

<style>
    .editform{
        width: 100%;
        height: 90%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .editform_head{
        height: 41px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #e9e9e9
    }
    .edit_name{
        width: 120px;
        text-align: center;
    }
    .edit_closebtn{
        width: 40px;
        text-align: center
    }
</style>
