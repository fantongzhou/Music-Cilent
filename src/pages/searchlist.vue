<template>
  <div class="mypage">
    <h3 class="biaot">搜索结果</h3>
    <div class="song_wrapper">
      <ul>
        <li v-for="item in songlist" v-bind:key="item.songid">
          <div class="songs" >
            <div class="asong" @click="goplay(item.picurl, item.songurl)">{{ item.songname }}</div>
            <div class="author">{{ item.singername }}-{{ item.songname }}</div>
            <span class="sq"></span>
            <span
              class="del"
              @click="
                adds(item.songname, item.picurl, item.songurl, item.singername)
              "
              >添加到我的音乐</span
            >
          </div>
        </li>
      </ul>
      <h1 v-show="isshow">没有该歌曲~</h1>
    </div>
  </div>
</template>

<script>
import { commonAPI } from "@/api/commonAPI";
export default {
  data() {
    return {
      isshow: false,
      songlist: [],
      song: { songname: "" },
      map: {
        userName: "",
        songname: "",
        picurl: "",
        songurl: "",
        singername: "",
      },
    };
  },
  mounted() {
    this.getsong();
  },
  methods: {
    getsong() {
      this.song.songname = this.$route.query.songname;
      commonAPI("querysong", this.song).then((res) => {
        this.songlist = res.data.data;
        if (this.songlist.length == 0) {
          this.isshow = true;
        }
      });
    },
    goplay(picurl, songurl) {
      let routedata = this.$router.resolve({
        name: "play",
        params: {
          picurl: picurl,
          songurl: songurl,
        },
      });
      //在新窗口打开播放界面
      window.open(routedata.href, "_blank");
    },
    adds(songname, picurl, songurl, singername) {
      this.map.userName = sessionStorage.getItem("user");
      this.map.songname = songname;
      this.map.picurl = picurl;
      this.map.songurl = songurl;
      this.map.singername = singername;
      if (!this.map.userName) {
        this.$router.push("/login");
      } else {
        commonAPI("addmysong", this.map).then((res) => {
          //console.log(res);
          if(res.data.info.code =="0" && res.data.data === "OK"){
              alert("添加成功");
          }else{
              alert(res.data.info.message);
          }
          window.location.reload();
        });
      }
    },
  },
};
</script>

<style scoped>
.mypage {
  padding-left: 120px;
  padding-right: 120px;
  min-height: 500px;
  background-color: rgba(238, 238, 238, 0.281);
}
.biaot {
  text-align: center;
}
.userdetail {
  text-align: center;
}
.song_wrapper {
  white-space: nowrap;
  box-sizing: border-box;
  list-style: none;
  left: 0px;
  z-index: 1;
  width: 80%;
  min-width: 700px;
  max-width: 800px;
  padding-top: 10px;
  margin-left: 13%;
  margin-right: 15px;
  padding-bottom: 40px;
}

.song_wrapper .asong {
  color: black;
  font-size: 17px;
  margin-left: 25px;
  width: 80%;
  overflow: hidden;
}
.song_wrapper .songs {
  position: relative;
  height: 50px;
  width: 100%;
}
.song_wrapper .author {
  font-size: 12px;
  color: #888;
  overflow: hidden;
  position: relative;
  margin-top: 5px;
  margin-left: 40px;
}
.sq {
  display: inline-block;
  width: 12px;
  height: 30px;
  margin-right: 4px;
  margin-left: 25px;
  margin-top: -11px;
  background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=)
    no-repeat;
  background-size: 166px 97px;
}
.del {
  color: rgba(255, 4, 4, 0.671);
  display: flex;
  width: 120px;
  height: 50px;
  margin-top: -66px;
  margin-left: 96%;
  background-position: -20px 0px;
  background-size: 166px 97px;
  align-items: center;
  text-align: center;
}
.rank {
  position: absolute;
  margin-top: 9px;
  color: rgb(25, 182, 25);
  width: 20px;
  height: 20px;
  font-size: 20px;
}
ul {
  list-style: none;
}
/* 实现隔行变色 */
li:nth-child(odd) {
  background: rgba(238, 238, 238, 0.381);
}
</style>