<template>
  <div class="editform">
    <div class="editform_head">
      <div class="edit_name">新增资讯</div>
      <div class="edit_closebtn" @click="closeEditPage()">
        <i class="el-icon-close"></i>
      </div>
    </div>
    <div class="editform_body">
      <div class="editform_box">
        <el-form :label-position="labelPosition" ref="form" label-width="80px" size="small">
          <el-form-item label="资讯标题">
            <el-input v-model="title" placeholder="请输入标题"></el-input>
          </el-form-item>
          <el-form-item label="栏目">
            <el-input v-model="programaName" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="发布范围">
            <el-select v-model="publishRange">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="缩略图">
            <el-button type="primary">选择图片</el-button>
            <span>缩略图：资讯列表前展示的配图</span>
          </el-form-item>
          <el-form-item label="置顶头图">
            <el-button type="primary">选择图片</el-button>
            <span>置顶头图：首页置顶新闻的滚动图</span>
          </el-form-item>
          <el-form-item label="发布者">
            <el-input v-model="title"></el-input>
            <span>示例：集团公司机关 寿险公司总部 广发银行总行 资产公司 财险公司总部 养老险公司总部 电商公司 海外公司 国寿投资公司 保险学院 北京区审中心 上海区审中心 深圳区审中心 成都区审中心 沈阳区审中心 西安区审中心</span>
          </el-form-item>
          <el-form-item label="发布者">
          
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "edit-form",
  components: {
    Editor
  },
  data() {
    return {
      labelPosition: "right",
      title: "",
      programaName: "主题教育",
      publishRange: "",
      tinymceHtml:"",
     
    };
  },
  methods: {
    closeEditPage() {
      console.log("aa");
      this.$emit("closeEdit");
    }
  },
  created() {},
  mounted() {
   
  }
};
</script>

<style>
.editform {
  width: 100%;
  height: 90%;
  position: absolute;
  top: 0;
  left: 0;
}
.editform_head {
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e9e9e9;
}
.edit_name {
  width: 120px;
  text-align: center;
}
.edit_closebtn {
  width: 40px;
  text-align: center;
}
.editform_body {
  width: 100%;
  height: 100%;
}
.editform_box {
  width: 60%;
  margin: 10px auto;
}
</style>
