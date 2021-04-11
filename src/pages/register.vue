<template>
  <div class="box">
    <div id="login" style="width: 320px; height: 300px; text-align: center">
      <el-form>
        <el-form-item>
          <span style="color: white; font-family: 楷体; font-size: 26px"
            >用&nbsp;户&nbsp;登&nbsp;录&nbsp;</span
          >
        </el-form-item>
        <el-form-item prop="userName">
          <el-input type="text" v-model="form.userName" placeholder="用户名">
            <template slot="prepend"
              ><i class="el-icon-user" style="font-size: 20px; color: white"></i
            ></template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="text"
            v-model="form.password"
            placeholder="密码"
            show-password
          >
            <template slot="prepend"
              ><i class="el-icon-lock" style="font-size: 20px; color: white"></i
            ></template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            size="medium"
            style="font-size: 20px; font-family: 微软雅黑; width: 320px"
            @click="clickLogin"
            >注&nbsp;&nbsp;&nbsp;册</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
 
 <script>
import { commonAPI } from "@/api/commonAPI";
export default {
  data() {
    return {
      form: {},
    };
  },
  methods: {
    clickLogin() {
      commonAPI("registerUser", this.form)
        .then((res) => {
          let data = res.data;
          if (data.info.code === "0" && data.data === "OK") {
            alert('注册成功');
            this.$router.push("/index"); //路由跳转
          } else {
            this.$notify({
              title: "提示",
              message: "用户名已被使用",
              position: "bottom-right",
              type: "error",
            });
            this.loading = false;
          }
        })
        .catch((error) => {
          this.loading = false;
          this.$notify({
            //这里采用element ui的一个错误显示效果模板
            title: "提示",
            message: error.message,
            position: "bottom-right",
            type: "error",
          });
        });
    },
  },
};
</script>
 
 <style>
.box {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.el-input-group__prepend {
  padding: 0px 15px;
  background-color: #cccccc;
  border: 1 solid #72767b;
}

body {
  margin: 0px;
}
</style>