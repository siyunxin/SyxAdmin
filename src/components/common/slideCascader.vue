<template>
  <div>
    <div class="select_eader">请选择资讯发布栏目</div>
    <div class="select_box">
      <div class="inline">
        <el-cascader
          :options="options"
          v-model="selectedOptions"
          placeholder="请选择资讯菜单"
          :show-all-levels="false"
          @change="handleChange"
          size="small"
        ></el-cascader>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slidecascader",
  data() {
    return {
      options: [
        {
          value: "infomanagement",
          label: "资讯管理",
          children: [
            {
              value: "ztjy",
              label: "主题教育"
            },
            {
              value: "zbyw",
              label: "总部要闻"
            },
            {
              value: "jcdt",
              label: "基层动态",
              children: [
                {
                  value: "sxgs",
                  label: "寿险公司"
                },
                {
                  value: "gfyh",
                  label: "广发银行"
                },
                {
                  value: "zcgs",
                  label: "资产公司"
                },
                {
                  value: "ylxgs",
                  label: "养老险公司"
                },
                {
                  value: "dsgs",
                  label: "电商公司"
                },
                {
                  value: "hwgs",
                  label: "海外公司"
                },
                {
                  value: "gstz",
                  lable: "国寿投资"
                },
                {
                  value: "bxxy",
                  lable: "保险学院"
                }
              ]
            },
            {
              value: "zbsh",
              label: "支部生活"
            },
            {
              value: "qywh",
              label: "企业文化"
            },
            {
              value: "qnzj",
              label: "青年之家"
            },
            {
              value: "lzjs",
              label: "廉政建设"
            }
          ]
        }
      ],
      selectedOptions: [],
      selectedOptions2: []
    };
  },
  methods: {
    handleChange() {}
  },

  created() {},
  mounted() {}
};
</script>

<style scoped>

.select_eader {
  width: 90%;
  height: 36px;
  line-height: 36px;
  text-indent: 5px;
  font-size: 14px;
  color: #fff;
  margin-top: 5px;
  background: rgb(19, 150, 226);
  border-radius: 5px;
  text-align: center;
}
.select_box{
    width: 100%;
}
.inline {
  
  display: inline-block;
}
</style>
<style>
.inline .el-input {
  margin: 5px auto;
  width: 88%;
}
.inline .el-cascader__label{
 line-height: 46px;   
}
</style>
