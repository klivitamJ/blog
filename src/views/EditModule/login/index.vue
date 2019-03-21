<template>
  <div>
    <h2>后台博客录入系统</h2>
    <form>
      <div>
        <span>账号：</span>
        <input placeholder="请输入用户名"/>
      </div>
      <div>
        <span>密码：</span>
        <input placeholder="请输入密码" type="password"/>
      </div>
      <div>
        <input type="checkbox"/>
        <span>确认使用当前用户协议</span>
      </div>
      <div>
        <input type="submit" value="登陆"/>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>

</style>
