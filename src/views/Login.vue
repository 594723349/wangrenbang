<template>
  <div class="login-wrapper">
    <div class="header">
      <img class="logo" src="@/assets/img/login_logo.png" />
    </div>
    <div class="body">
      <c-form v-if="type === 'login'" :data="loginData" :form="loginColumn" :label-width="'0px'">
        <template v-slot:after>
          <div class="actions">
            <span class="action-item" @click="switchType('register')">用户注册</span>
            <span class="action-item">忘记密码</span>
          </div>
          <div>
            <el-checkbox v-model="checked">登录即同意用户协议</el-checkbox>
          </div>
        </template>
      </c-form>
      <c-form v-else-if="type === 'register'" :data="registerData" :form="registerColumn" :label-width="'0px'">
        <template v-slot:after>
          <div class="actions">
            <span class="action-item" @click="switchType('login')">去登录</span>
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
      type: "login",
      loginData: {
        username: "",
        password: ""
      },
      loginColumn: [
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
      registerData: {},
      registerColumn: [
        {
          type: "input",
          prop: "nickname",
          placeholder: "昵称"
        },
        {
          type: "input",
          prop: "mobile",
          placeholder: "手机号"
        },
        {
          type: "password",
          prop: "password",
          placeholder: "登录密码"
        },
        {
          type: "password",
          prop: "password",
          placeholder: "确认密码"
        },
        {
          type: "input",
          prop: "referralCode ",
          placeholder: "推荐码"
        },
        {
          type: "slot",
          prop: "after"
        },
        {
          type: "action",
          data: [
            {
              text: "注册",
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
      if (valid) {
        switch (this.type) {
          case "login":
            this.toLogin(data);
            break;
          case "register":
            this.toRegister(data);
            break;
        }
      }
      console.log(valid, data);
    },
    toLogin(data) {
      console.log(data);
    },
    toRegister(data) {
      console.log(data);
    },
    switchType(type) {
      this.type = type;
    }
  }
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  margin-top: 100px;
}
.logo {
  width: 350px;
}
.body {
  text-align: center;
  width: 200px;
  margin: auto;
}
.actions {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 20px;
  position: relative;
  color: #999999;
}
::v-deep .el-form {
  .el-input__inner {
    border: none;
    border-bottom: 1px solid #dcdfe6;
    text-align: center;
  }
  .form-item__slot {
    margin-bottom: 0;
    .el-form-item__content {
      display: block;
    }
  }
}
::v-deep .el-button {
  border: none;
  border-radius: 15px;
  background-color: rgba(109, 117, 241, 1);
  color: #fff;
  padding: 8px 25px;
}
::v-deep .el-checkbox {
  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #999;
  }
}
</style>
