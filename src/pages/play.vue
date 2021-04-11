<template>
  <div>
    <div class="playpage blur"></div>
    <div class="content">
      <div class="plpic">
        <img :src="picurl" alt="" />
      </div>
      <div class="adu">
        <audio :src="songurl" autoplay controls class="myaudio"></audio>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picurl: "",
      songurl: "",
    };
  },
  mounted() {
    this.geturl();
  },
  methods: {
    geturl() {
      this.picurl = this.$route.params.picurl;
      this.songurl = this.$route.params.songurl;
      this.picurl = "http://localhost:8080/source" + this.picurl;
      this.songurl = "http://localhost:8080/source" + this.songurl;
      //console.log(this.picurl);
      //console.log(this.songurl);
    },
  },
};
</script>

<style>
.playpage {
  height: 737px;
  background-image: url("../assets/images/米哈游.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 700px;
  
}

.blur {
  float: left;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(15px);
}

.plpic img {
  padding: 80px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  -webkit-transform: rotate(360deg);
  animation: rotation 15s linear infinite;
  -moz-animation: rotation 15s linear infinite;
  -webkit-animation: rotation 15s linear infinite;
  -o-animation: rotation 15s linear infinite;
}
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
.content{
  width: 99%;
  height: 400px;
  position: absolute;
  text-align: center;
}
.adu {
  margin-top: 127px;
  height: 50px;

  background-color: #f1f3f4;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.myaudio {
  width: 60%;
  height: 40px;
  outline: none;
  background-color: #f1f3f4;
}
</style>