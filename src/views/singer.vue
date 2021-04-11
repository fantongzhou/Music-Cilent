<template>
  <div class="singerpage">
    <div class="sing">
      <div class="sdiv" @click="gosingerdetail(item.singername,item.intro,item.picurl)" v-for="item in singer" :key="item.picurl">
        <div class="singer">
          <img :src="item.picurl" />
        </div>
        <p>{{item.singername}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { commonAPI } from "@/api/commonAPI";
export default {
  data() {
    return {
      singer:[],
    };
  },
  mounted() {
    this.getsinger();
  },
  methods: {
    gosingerdetail(singername,singerintro,picurl) {
      this.$router.push({
        name: "singerdetail",
        params: {
          singername:singername,
          singerintro:singerintro,
          picurl: picurl,
        },
      });
    },
    getsinger() {
      commonAPI("querysingerList").then((res) => {
        //console.log(res);
        this.singer=res.data.data;
        for(let i=0;i<this.singer.length;i++){
          this.singer[i].picurl="http://localhost:8080/source" + this.singer[i].picurl
        }
      });
    },
  },
};
</script>

<style scoped>
.singerpage {
  width: 100%;
  background-color: rgba(238, 238, 238, 0.548);
  height: 530px;
}
.sing {
  min-width: 1000px;
  max-width: 70%;
  margin-right: 15%;
  margin-left: 15%;
  height: 100%;
}
.sdiv {
  text-align: center;
  float: left;
  margin-left: 50px;
  margin-top: 50px;
}
.singer {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
}
.singer img{
  width: 150px;
  height: 150px;
}
</style>