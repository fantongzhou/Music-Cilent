<template>
  <div>
    <div class="top2">
      <div class="selbar1">
        <div class="selbard1">
          <router-link tag="div" active-class="select1" to="/yinyueguan/shouye"
            >首页</router-link
          >
        </div>
        <div class="selbard1">
          <router-link tag="div" active-class="select1" to="/yinyueguan/rank"
            >音乐库</router-link
          >
        </div>
         <div class="selbard1">
          <router-link tag="div" active-class="select1" to="/yinyueguan/singer"
            >歌手</router-link
          >
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top2 {
  height: 40px;
  margin-left: 18%;
}
.selbar1 {
  width: 900px;
  height: 40px;
  display: flex;

}
.selbar1 div {
  flex: 1;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  color: #333;
}

#content {
  position: relative;
  top: 19vh;
}
.select1 {
  color: rgb(51, 202, 51) !important;
}

</style>