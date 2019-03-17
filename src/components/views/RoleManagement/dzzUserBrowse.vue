<template>
  <div class="dzzuserbrowse">
    <div v-show="!edit_formShow">
      <div class="dzzuserbrowse_topmenu">
        <slide-cascader></slide-cascader>
        <edit-menu @articleAdd="articleAdd" @articleDelete="articleDelete"></edit-menu>
      </div>
      <div class="infomation_table">
        <el-table
          :data="tableData"
          border
          height="430"
          style="width:100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column fixed type="selection" prop="number" width="50" align="center"></el-table-column>
          <el-table-column fixed prop="number" label="序号" width="50" align="center"></el-table-column>
          <el-table-column fixed prop="title" label="标题" width="150"></el-table-column>
          <el-table-column prop="smallPic" label="缩略图" width="120" sortable align="center">
            <template slot-scope="scope">
              <img :src="scope.row.smallPic" alt style="width: 50px;height: 50px">
            </template>
          </el-table-column>
          <el-table-column prop="topPic" label="置顶头图" width="120" sortable align="center">
            <template slot-scope="scope">
              <img :src="scope.row.topPic" alt style="width: 50px;height: 50px">
            </template>
          </el-table-column>
          <el-table-column prop="publisher" label="发布者" width="100"></el-table-column>
          <el-table-column prop="publishRange" label="发布范围" width="100"></el-table-column>
          <el-table-column prop="topStatus" label="置顶状态" width="80"></el-table-column>
          <el-table-column prop="visitorCount" label="访问量" width="80"></el-table-column>
          <el-table-column prop="likeCount" label="点赞数" width="80"></el-table-column>
          <el-table-column prop="collectCount" label="收藏数" width="80"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
        </el-table>
      </div>
      <div class="infomation_pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40,50]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="50"
        ></el-pagination>
      </div>
    </div>
    <edit-form
      v-show="edit_formShow"
      @closeEdit="closeEditForm"
      @postSave="receiveSave"
      @select_smallImage="openCrooper"
      :smallImage="cropImg"
      :topImage="cropImg"
    ></edit-form>
    <div>
      <el-dialog :visible.sync="showCropper" title="封面裁图" width="70%">
        <div class="crop-demo-btn">
          选择图片
          <input
            class="crop-input"
            type="file"
            name="image"
            accept="image/*"
            @change="setImage"
          >
        </div>
        <div class="croper-box">
          <div>
            <vue-cropper
              ref="cropper"
              :src="imgSrc"
              :ready="cropImage"
              :zoom="cropImage"
              :cropmove="cropImage"
              style="width:500px;height:300px;"
            ></vue-cropper>
          </div>
          <div class="crop-demo">
            <img :src="cropImg" class="pre-img">
          </div>
        </div>
        <div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="cancelCrop">取 消</el-button>
            <el-button type="primary" @click="hiddenDialog">确 定</el-button>
          </span>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import SlideCascader from "@/components/common/slideCascader";
import EditMenu from "@/components/common/editMenu";
import EditForm from "@/components/common/editForm";
import VueCropper from "vue-cropperjs";
export default {
  name: "dzz_user_browse",
  components: {
    SlideCascader,
    EditMenu,
    EditForm,
    VueCropper
  },
  data() {
    return {
      currentPage: 1,
      edit_formShow: false,
      selectionArr: [], //删除选中
      showCropper: false,
      cropImg: "",
      imgSrc: "",
      defaultSrc: require("../../../assets/logo.png"),
      tableData: [
        {
          number: 1,
          title: "号外号外，震惊中外",
          smallPic: require("../../../assets/logo.png"),
          topPic: require("../../../assets/logo.png"),
          publisher: "司云昕",
          publishRange: "全集团",
          topStatus: "置顶",
          visitorCount: 100,
          likeCount: 99,
          collectCount: 233,
          status: "审核通过"
        },
        {
          number: 2,
          title: "号外号外，震惊中外",
          smallPic: require("../../../assets/logo.png"),
          topPic: require("../../../assets/logo.png"),
          publisher: "司云昕",
          publishRange: "党支部",
          topStatus: "不置顶",
          visitorCount: 100,
          likeCount: 99,
          collectCount: 233,
          status: "审核通过"
        },
        {
          number: 3,
          title: "号外号外，震惊中外",
          smallPic: require("../../../assets/logo.png"),
          topPic: require("../../../assets/logo.png"),
          publisher: "司云昕",
          publishRange: "党支部",
          topStatus: "置顶",
          visitorCount: 100,
          likeCount: 99,
          collectCount: 233,
          status: "审核通过"
        },
        {
          number: 4,
          title: "号外号外，震惊中外",
          smallPic: require("../../../assets/logo.png"),
          topPic: require("../../../assets/logo.png"),
          publisher: "司云昕",
          publishRange: "党支部",
          topStatus: "不置顶",
          visitorCount: 100,
          likeCount: 99,
          collectCount: 233,
          status: "审核通过"
        },
        {
          number: 5,
          title: "号外号外，震惊中外",
          smallPic: require("../../../assets/logo.png"),
          topPic: require("../../../assets/logo.png"),
          publisher: "司云昕",
          publishRange: "党支部",
          topStatus: "不置顶",
          visitorCount: 100,
          likeCount: 99,
          collectCount: 233,
          status: "审核通过"
        },
        {
          number: 6,
          title: "号外号外，震惊中外",
          smallPic: require("../../../assets/logo.png"),
          topPic: require("../../../assets/logo.png"),
          publisher: "司云昕",
          publishRange: "党支部",
          topStatus: "不置顶",
          visitorCount: 100,
          likeCount: 99,
          collectCount: 233,
          status: "审核通过"
        },
        {
          number: 6,
          title: "号外号外，震惊中外",
          smallPic: require("../../../assets/logo.png"),
          topPic: require("../../../assets/logo.png"),
          publisher: "司云昕",
          publishRange: "党支部",
          topStatus: "不置顶",
          visitorCount: 100,
          likeCount: 99,
          collectCount: 233,
          status: "审核通过"
        }
      ]
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.selectionArr = val;
    },
    //条数
    handleSizeChange() {},
    //页码
    handleCurrentChange() {},
    //隐藏编辑页面
    closeEditForm() {
      this.edit_formShow = false;
    },
    //接收保存按钮
    receiveSave(obj) {
      console.log(obj);
    },
    //添加按钮点击
    articleAdd() {
      this.edit_formShow = true;
    },
    //删除按钮点击
    articleDelete() {
      this.selectionArr.map(item => {
        let selectionIndex = item.number;
        this.tableData = this.tableData.filter((item, index, arr) => {
          return item.number != selectionIndex;
        });
      });
    },
    //打开裁剪弹框
    openCrooper(){
      this.showCropper = true
    },
    //设置裁剪图片
    setImage(e) {
      const file = e.target.files[0];
      if (!file.type.includes("image/")) {
        return;
      }
      const reader = new FileReader();
      reader.onload = event => {
        this.dialogVisible = true;
        this.imgSrc = event.target.result;
        this.$refs.cropper && this.$refs.cropper.replace(event.target.result);
      };
      reader.readAsDataURL(file);
    },
    hiddenDialog() {
      this.showCropper = false;
    },
    cropImage() {
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
    cancelCrop() {
      this.dialogVisible = false;
      this.cropImg = this.defaultSrc;
    }
  },
  created() {
    this.cropImg = this.defaultSrc;
  },
  mounted() {}
};
</script>

<style scoped>
.dzzuserbrowse_topmenu {
  width: 100%;
  height: 80px;
  margin-bottom: 8px;
  display: flex;
}
.dzzuserbrowse {
  width: 100%;
  height: 100%;
  position: relative;
  /* overflow-y:scroll; */
}
.infomation_table {
  width: 99%;
}
.infomation_pagination {
  width: 99%;
  text-align: right;
  margin: 3px;
}
.croper-box {
  display: flex;
}
.crop-demo {
  width: 120px;
  height: 100px;
}
.crop-demo img {
  width: 100%;
  height: 100%;
}
</style>
