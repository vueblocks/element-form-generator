import Vue from 'vue'

import 'normalize.css'
import './plugins/json-viewer'
import './plugins/clipboard2'

import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import '../theme/index.css'

// 引入codeMirror的样式
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/cobalt.css'
import 'codemirror/mode/javascript/javascript.js'

import SchemaForm, { SchemaFormItem } from '@vueblocks/element-schema-form'

import SchemaFormQuill from '@vueblocks/element-schema-form/lib/SchemaFormQuill.common.min'
import SchemaFormCodemirror from '@vueblocks/element-schema-form/lib/SchemaFormCodemirror.common.min'

import App from './App.vue'

Vue.use(ElementUI, {
  size: 'small'
})

Vue.component('SchemaFormQuill', SchemaFormQuill)
Vue.component('SchemaFormCodemirror', SchemaFormCodemirror)

Vue.component('SchemaFormItem', SchemaFormItem)

Vue.use(SchemaForm, {
  'codemirror': {
    cmOptions: {
      tabSize: 2,
      mode: 'text/javascript',
      theme: 'cobalt',
      lineNumbers: true,
      line: true
    }
  },
  input: {
    placeholder: '全局定义变量实验'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
