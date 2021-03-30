<template>
  <div
    id="userLayout"
    class="user-layout-wrapper mobile"
  >
    <div class="container">
      <div class="user-layout-lang" />
      <div class="user-layout-content">
        <div class="top">
          <div class="header">
            <a href="/">
              <span class="title">方 舟</span>
            </a>
          </div>
        </div>
        <div class="main">
          <a-form
            layout="horizontal"
            :wrapper-col="wrapperCol"
            @submit.prevent="handleSubmit"
          >
            <a-form-item v-bind="validateInfos.username">
              <a-input v-model:value="userState.username">
                <template #prefix>
                  <UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item v-bind="validateInfos.password">
              <a-input v-model:value="userState.password">
                <template #prefix>
                  <LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button
                type="primary"
                html-type="submit"
                block
              >
                登 录
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue'
import { useForm } from '@ant-design-vue/use'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined
  },
  setup() {
    const userState = reactive({
      username: '',
      password: ''
    })
    const userRule = reactive({
      username: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    })
    const { validate, validateInfos } = useForm(userState, userRule)
    const handleSubmit = async() => {
      validate()
        .then(res => {
          const { username, password } = toRaw(userState)
          console.log(res, toRaw(userState))
        })
        .catch(err => {
          console.log('error', err)
        })
    }
    return {
      userState,
      userRule,
      validate,
      validateInfos,
      wrapperCol: { span: 24 },
      handleSubmit
    }
  }
})
</script>

<style lang="scss" scoped>
#userLayout.user-layout-wrapper {
  height: 100%;

  &.mobile {
    .container {
      .main {
        max-width: 368px;
        width: 98%;
      }
    }
  }

  .container {
    width: 100%;
    min-height: 100%;
    background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
    background-size: 100%;
    //padding: 50px 0 84px;
    position: relative;

    .user-layout-lang {
      width: 100%;
      height: 40px;
      line-height: 44px;
      text-align: right;

      .select-lang-trigger {
        cursor: pointer;
        padding: 12px;
        margin-right: 24px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        vertical-align: middle;
      }
    }

    .user-layout-content {
      padding: 32px 0 24px;

      .top {
        text-align: center;

        .header {
          height: 44px;
          line-height: 44px;

          .badge {
            position: absolute;
            display: inline-block;
            line-height: 1;
            vertical-align: middle;
            margin-left: -12px;
            margin-top: -10px;
            opacity: 0.8;
          }

          .logo {
            height: 44px;
            vertical-align: top;
            margin-right: 16px;
            border-style: none;
          }

          .title {
            font-size: 33px;
            color: rgba(0, 0, 0, 0.85);
            font-family: Avenir, "Helvetica Neue", Arial, Helvetica, sans-serif;
            font-weight: 600;
            position: relative;
            top: 2px;
          }
        }
        .desc {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.45);
          margin-top: 12px;
          margin-bottom: 40px;
        }
      }

      .main {
        min-width: 260px;
        width: 368px;
        margin: 0 auto;
        margin-top: 100px;
      }

      .footer {
        // position: absolute;
        width: 100%;
        bottom: 0;
        padding: 0 16px;
        margin: 48px 0 24px;
        text-align: center;

        .links {
          margin-bottom: 8px;
          font-size: 14px;
          a {
            color: rgba(0, 0, 0, 0.45);
            transition: all 0.3s;
            &:not(:last-child) {
              margin-right: 40px;
            }
          }
        }
        .copyright {
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
        }
      }
    }

    a {
      text-decoration: none;
    }
  }
}
</style>
