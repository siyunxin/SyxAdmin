<template>
  <div class="editbox">
    <div class="demo-input-suffix">
      <div class="label">标题：</div>
      <el-input size="small" placeholder="请输入内容" v-model="input_title" clearable></el-input>
    </div>
    <div class="demo-input-suffix info-status">
      <div class="label">资讯状态：</div>
      <el-select size="small" v-model="info_Status" clearable placeholder="请选择">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="demo-input-suffix info-status">
      <div class="label">是否置顶：</div>
      <el-select size="small" v-model="top_Status" clearable placeholder="请选择">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div>
        <el-button type="primary" size="small" icon="el-icon-search" @click="handleSearch">搜索</el-button>
        <el-button type="primary" size="small" icon="el-icon-circle-plus-outline" @click="handleAdd">添加</el-button>
        <el-button type="primary" size="small" icon="el-icon-edit" @click="handleEdit">编辑</el-button>
        <el-button type="primary" size="small" icon="el-icon-delete" @click="handleDelete">删除</el-button>
        <el-button type="primary" size="small" icon="el-icon-tickets" @click="handlePreview">预览</el-button>
        <el-button type="primary" size="small" icon="el-icon-upload2" @click="handleSubmitCheck">提交审核</el-button>
        <el-button type="primary" size="small" icon="el-icon-arrow-up" @click="handleSetTop">置顶</el-button>
        <el-button type="primary" size="small" icon="el-icon-arrow-down" @click="handleCancleSetTop">取消置顶</el-button>
    </div>
    
      
    
  </div>
</template>

<script>
export default {
  name: "edit_menu",
  data() {
    return {
      input_title: "",
      info_Status: "",
      top_Status: "",
      options1: [
        {
          value: "1",
          label: "全部"
        },
        {
          value: "2",
          label: "草稿"
        },
        {
          value: "3",
          label: "提交审核"
        },
        {
          value: "4",
          label: "审核通过"
        },
        {
          value: "5",
          label: "审核不通过"
        }
      ],
      options2: [
        {
          value: "1",
          label: "全部"
        },
        {
          value: "2",
          label: "置顶"
        },
        {
          value: "3",
          label: "不置顶"
        },
        {
          value: "4",
          label: "置顶申请"
        }
      ]
    };
  },
  methods:{
    handleSearch(){

    },
    handleAdd(){
      this.$emit('articleAdd')
    },
    handleEdit(){

    },
    handleDelete(){
      this.$emit('articleDelete')
    },
    handlePreview(){

    },
    handleSubmitCheck(){

    },
    handleSetTop(){

    },
    handleCancleSetTop(){

    }
    
  },

};
</script>

<style scoped>
.editbox {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content:start
}
.label {
  display: inline-block;
  font-size: 14px;
}
.demo-input-suffix {
  /* flex: auto; */
  margin: 5px 0px;
}
</style>
<style>
.editbox .el-input {
  width: 70%;
  margin: 0
}
.editbox .el-input__inner {
  padding: 0 2px;
}
.info-status .el-input {
  width: 80%;
}
</style>

