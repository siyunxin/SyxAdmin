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
        <div class="editform_content">
          <el-form :label-position="labelPosition" ref="form" label-width="80px" size="small">
            <el-form-item label="资讯标题">
              <el-input v-model="title" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="栏目">
              <el-input v-model="programaName" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="发布范围">
              <el-select v-model="publishRange">
                <el-option label="区域一" value="areaOne"></el-option>
                <el-option label="区域二" value="areaTwo"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="缩略图">
              <el-button type="primary" @click="selectSamllImage">选择图片</el-button>
              <div class="smallpic_box">
                <div>
                  <img :src="smallImage" alt>
                </div>
                <div>
                  <span>缩略图：资讯列表前展示的配图</span>
                </div>
              </div>
            </el-form-item>
            <el-form-item label="置顶头图">
              <el-button type="primary" @click="selectTopImage">选择图片</el-button>
              <span>置顶头图：首页置顶新闻的滚动图</span>
            </el-form-item>
            <el-form-item label="发布者">
              <el-input v-model="publisher"></el-input>
              <span>示例：集团公司机关 寿险公司总部 广发银行总行 资产公司 财险公司总部 养老险公司总部 电商公司 海外公司 国寿投资公司 保险学院 北京区审中心 上海区审中心 深圳区审中心 成都区审中心 沈阳区审中心 西安区审中心</span>
            </el-form-item>
            <el-form-item label="富文本">
              <div>
                <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
              </div>
            </el-form-item>
            <el-form-item>
              <div class="form_button">
                <el-button type="success" icon="el-icon-printer" @click="contentSave">保存</el-button>
                <el-button type="success" icon="el-icon-printer" @click="contentSubmit">保存并审核</el-button>
                <el-button type="success" icon="el-icon-view" @click="contentPreview">预览</el-button>
                <el-button type="danger" icon="el-icon-close" @click="contentCancle">取消</el-button>
              </div>
            </el-form-item>
          </el-form>
          <div style="height:100px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
export default {
  name: "edit-form",
  props: {
    smallImage: String,
    topImage: String
  },
  components: {
    quillEditor
  },
  data() {
    return {
      labelPosition: "right",
      title: "",
      programaName: "主题教育",
      publisher: "",
      publishRange: "",
      content: "",
      editorOption: {
        placeholder: "请输入内容"
      }
    };
  },
  methods: {
    closeEditPage() {
      this.$emit("closeEdit");
    },
    contentSave() {
      let parmas = {
        title: this.title,
        programaName: this.programaName,
        publisherthis: this.publisher,
        publishRange: this.publishRange,
        content: this.content
      };
      this.$emit("postSave", parmas);
    },
    contentSubmit() {},
    contentPreview() {},
    contentCancle() {},
    selectSamllImage() {
      this.$emit("select_smallImage");
    },
    selectTopImage() {}
  },
  created() {},
  mounted() {}
};
</script>

<style>
.editform {
  width: 100%;
  height: 98%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  border: 1px solid #dcdfe6;
  border-top: 0px;
}
.editform_head {
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f8f8;
  border-bottom: #e4e7ed;
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
  overflow: hidden;
}
.editform_box {
  width: 100%;
  height: 100%;
  /* margin: 10px auto; */
  overflow-y: scroll;
}
.editform_content {
  width: 66%;
  margin: 10px auto;
}
.ql-container {
  height: 200px;
}
.form-button {
  width: 100%;
  text-align: center;
  height: 30px;
}
.smallpic_box {
  display: flex;
  align-items: center;
}
</style>
