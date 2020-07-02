<template>
  <div class="login-wrapper">
    <div class="header">
      <img class="logo" src="@/assets/img/login_logo.png" />
    </div>
    <div class="body">
      <div class="actions">
        <span class="action-item">忘记密码</span>
        <span class="action-item">用户注册</span>
      </div>
      <c-form :data="formData" :form="formColumn" :label-width="'0px'">
        <template v-slot:after>
          <div class="">
            <el-checkbox v-model="checked">登录即同意用户协议</el-checkbox>
          </div>
        </template>
      </c-form>
    </div>
  </div>
</template>

<script>
import CForm from "@/components/comm/Form.vue";
export default {
  components: {
    "c-form": CForm
  },
  data() {
    return {
      formData: {
        username: "",
        password: ""
      },
      formColumn: [
        {
          type: "input",
          prop: "username",
          placeholder: "手机号"
        },
        {
          type: "password",
          prop: "password",
          placeholder: "密码"
        },
        {
          type: "slot",
          prop: "after"
        },
        {
          type: "action",
          data: [
            {
              text: "登录",
              handler: this.submit
            }
          ]
        }
      ],
      checked: false
    };
  },
  methods: {
    submit(valid, data) {
      console.log(valid, data);
    }
  }
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  margin-top: 200px;
}
.logo {
  width: 700px;
}
.body {
  text-align: center;
  width: 400px;
  margin: auto;
}
.actions {
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin: auto;
  margin-bottom: 50px;
}
::v-deep .el-form {
  .el-input__inner {
    border: none;
    border-bottom: 1px solid #dcdfe6;
    text-align: center;
  }
  .form-item__slot {
    .el-form-item__content {
      display: block;
    }
  }
}
</style>
