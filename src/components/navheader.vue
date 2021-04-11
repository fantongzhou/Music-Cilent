<template>
  <div class="top">
    <div class="logo">
      <img src="../assets/images/logo.png" alt="" />
    </div>
    <div class="selbar">
      <div class="selbard">
        <router-link tag="div" active-class="select" to="/yinyueguan"
        >音乐馆</router-link
        >
      </div>
      <div class="selbard">
        <router-link tag="div" active-class="select" to="/my"
          >我的音乐</router-link
        >
      </div>
    </div>
    <div class="search">
      <input v-model="songname" class="keyWord" type="text" placeholder="搜索歌曲" @keyup.enter="gosearchlist()"/>
    </div>
    <div class="log">
      <a @click="gologin" v-show="show"><h3>登录</h3></a>
      <a @click="logout" v-show="!show"><h3>注销</h3></a>
    </div>
    <div class="usern">
      <h5 v-show="!show">你好,{{user}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songname:'',
      show: true,
      user:''
    };
  },
  mounted() {
    this.isshow();
  },
  methods: {
    gologin() {
      this.$router.push("/login");
    },
    gosearchlist(){
      this.$router.push('/searchlist?songname='+this.songname);
    }
    ,
    logout() {
      sessionStorage.removeItem("user");
      console.log(sessionStorage);
      this.$router.push('/index');
      this.isshow();
    },
    isshow() {
      //如果内存里有用户名 ，说明用户已经登录，则将登录变为注销
      if (!sessionStorage.user) {
        this.show = true;
      } else {
        this.user=sessionStorage.getItem('user');
        this.show = false;
      }
    },
  },
};
</script>

<style>
.top {
  background-color: #fff;
  margin-left: 22%;
  height: 65px;
  min-width: 800px;
  border-bottom: 1px solid rgba(204, 204, 204, 0.3);
}
.logo {
  height: 57px;
  width: 200px;
  float: left;
  display: table-cell;
  text-align: center;
  vertical-align: center;
  margin-top: 8px;
}

.selbar {
  float: left;
  display: flex;
}
.selbard {
  width: 90px;
  height: 65px;
  text-align: center;
  line-height: 60px;
}
.select {
  width: 90px;
  height: 65px;
  background-color: rgb(3, 189, 3) !important;
  color: #fff;
}
.search {
  position: relative;
  float: left;
  width: 260px;
  height: 65px;
  box-sizing: border-box;
}
.search .keyWord {
  margin: 15px 11px;
  position: absolute;
  width: 250px;
  height: 30px;
  line-height: 18px;
  padding: 0 30px;
  box-sizing: border-box;
  background: #ebecec;
  border-radius: 30px;
  border: 1px solid #ebecec;
}
input::-webkit-input-placeholder {
  color: #d3ccc9;
  font-size: 14px;
}
.log {
  width: 120px;
  height: 65px;
  display: table-cell;
  text-align: center;
  vertical-align: center;
  float: left;
}
.log a {
  text-decoration: none;
  color: black;
}
.usern{
  width: 70px;
  height: 65px;
  display: table-cell;
  text-align: center;
  vertical-align: center;
  float: left;
}

a:hover {
  color: rgb(3, 189, 3);
}
</style>