import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueI18n from 'vue-i18n'

Vue.use(ElementUI)
Vue.use(VueI18n)
var i18n = new VueI18n({
  locale: 'zh-tw',
  messages: {
    "en": {
      message: {
        hello: 'hello world',
      }
    },
    "ja": {
      message: {
        hello: 'こんにちは、世界',
      }
    },
    "zh-tw": {
      message: {
        hello: '你好，世界',
      }
    }
  }
})
var HelloComponent = {
  template: '<div class="container">' +
    '<p>Component1 locale messages: {{ $t("message.hello") }}</p>' +
    '<p>Fallback global locale messages: {{ $t("message.greeting") }}</p>' +
    '</div>',
}

new Vue({
  el: '#app',
  render: h=>h(App),
  i18n: i18n,
  components: {
    "component-hello": HelloComponent
  }
}).$mount('#app')
