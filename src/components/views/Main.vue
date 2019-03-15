<template>
  <div class="main_box">
    <el-row>
      <el-col :span="24">
        <div class="main_head">
          <div class="main_user">
            <div class="main_userhead">
              <img :src="head_pic" alt>
            </div>
            <div class="main_userinfo">
              <div class="user_name">司云昕 程序员</div>
              <div class="user_dept">齐鲁软件园E座315</div>
            </div>
          </div>
          <div class="admin_acount">
           
              <div class="admin_acount_item">
                  <div>今日资讯量</div>
              </div>
              <div class="admin_acount_item">
                  <div>今日访问量</div>
              </div>
       
              
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="module_box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="echarts_box">
          <div id="myChart1" class="eachartstyle" :style="{width: '500px', height: '300px'}"></div>
          <div id="myChart2" class="eachartstyle" :style="{width: '500px', height: '300px'}"></div>
          <div id="myChart3" class="eachartstyle" :style="{width: '500px', height: '300px'}"></div>
          <div id="myChart4" class="eachartstyle" :style="{width: '500px', height: '300px'}"></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
  name: "mymain",
  data() {
    return {
      head_pic: require("../../assets/HomeImages/headerImg.jpg")
    };
  },
  methods: {
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      myChart.setOption({
        // title: { text: "ECharts 入门示例" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    },
    drawLine2() {
      let myChart = echarts.init(document.getElementById("myChart2"));
      myChart.setOption({
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {}
          }
        ]
      });
    },
    drawline3() {
        let myChart = echarts.init(document.getElementById("myChart3"));
     myChart.setOption({
        title: {
          text: "南丁格尔玫瑰图",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"]
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [
          {
            name: "半径模式",
            type: "pie",
            radius: [20, 110],
            center: ["50%", "50%"],
            roseType: "radius",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            lableLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [
              { value: 10, name: "rose1" },
              { value: 5, name: "rose2" },
              { value: 15, name: "rose3" },
              { value: 25, name: "rose4" },
              { value: 20, name: "rose5" },
              { value: 35, name: "rose6" },
              { value: 30, name: "rose7" },
              { value: 40, name: "rose8" }
            ]
          },
          
        ]
      });
    },
    drawline4() {}
  },
  mounted() {
    this.drawLine1();
    this.drawLine2();
    this.drawline3();
  }
};
</script>

<style scoped>
.main_box {
  height: 90%;  
  background: #f4f9f4;
  padding: 0 10px;
  overflow-y:scroll;
 
}
.main_head {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 140px;
}
.main_user {
  width: 50%;
  height: 80%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: start;
  border-right: 1px solid rgb(223, 233, 79);
}
.main_userhead {
  width: 100px;
  height: 100px;
  margin-left: 5%;
  border-radius: 50%;
}
.main_userhead > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.main_userinfo {
  width: 60%;
  margin-left: 10%;

  /* height: 100% */
}
.main_userinfo > div {
  width: 100%;
  margin: 2% 0;
}
.echarts_box {
  display: flex;
  flex-wrap: wrap;
 
}
.echarts_box > div {
  text-align: center;
}
.eachartstyle{
  background: #fff;
  border: 2px solid #FAEBD7;
  margin: 1% auto;
}
.admin_acount{
  width: 50%;
  display: flex;
  justify-content: space-around;
  
}
.admin_acount_item{
  width: 200px;
  height: 80px;
  text-align: center;
  border: 1px solid #000;
}
.module_box{
  width: 96%;
  height: 100px;
  
  background: #fff;
  border: 1.5px solid #ebebeb;
  margin: 0 auto;
  display: flex;
  }
  .module_box>div{
    /* flex:auto; */
    width: 160px;
    height: 80px;
    margin: 1%;
    border: 1px solid red;
    
   
  }
</style>
