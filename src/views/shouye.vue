<template>
  <div class="rec">
    <div class="recd">
      <div class="mes">
        <p class="mesp">歌 单 推 荐</p>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="item in list"
            :key="item.picurl"
            @click="golist(item.listid,item.listname,item.picurl)"
          >
            <img :src="item.picurl" alt="" class="simg" />
            {{item.listname}}
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
import { commonAPI } from "@/api/commonAPI";
import Swiper from "swiper";
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.getlist();
  },
  updated(){
    var mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 5,
      spaceBetween: 15,
      slidesPerGroup: 5,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
  methods: {
    golist(listid,listname,picurl) {
      this.$router.push({
        name:'list',
        params:{
          listid,
          listname,
          picurl
        }
      });
    },
    getlist(){
      commonAPI("querylists").then((res) => {
        //console.log(res);
        this.list=res.data.data;
        for(let i=0;i<this.list.length;i++){
          this.list[i].picurl="http://localhost:8080/source" + this.list[i].picurl;
        }
      });
    }
  },
};
</script>

<style >
.rec {
  background-color: rgba(238, 238, 238, 0.555);
  height: 550px;
}
.recd{
  width: 75%;
  margin-left: 13%;
  height: 530px;
}
.mes {
  padding: 10px 0;
  width: 100%;
  height: 130px;
  text-align: center;
  font-size: 30px;
  font-family: 微软雅黑;
}
.swiper-father {
  position: relative;
}
.swiper-container {
  width: 100%;
  height: 250px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: rgba(238, 238, 238, 0);

  /* Center slide text vertically */

  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-pagination {
  position: relative;
}
/* 设置分页器间距 */
.swiper-pagination-bullet {
  margin: 0 13px;
}
.simg {
  width: 100%;
}
/* 解决按键点击后出现边框问题 */
:focus {
  outline: none;
} /*for IE*/
::-moz-focus-inner {
  border-color: transparent;
} /*for mozilla*/
</style>