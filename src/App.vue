<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">{{ $t("message.hello") }}</el-button>
    <p></p>
      <p>{{ $t("message.hello") }}</p>
      <component-hello></component-hello>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Want something new?'
    }
  },

  methods: {
    startHacking () {
      this.$notify({
        title: 'Shhh',
        message: 'Just be patient...',
        duration: 6000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
