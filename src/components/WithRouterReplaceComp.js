import { h, KeepAlive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
// import { watchPausable } from '@vueuse/core'

export default function WithRouterReplaceComp(Component, f) {
  const fn = async () => {
    let ComponentWarper;
    try { ComponentWarper = (await Component()).default }
    catch (err) { ComponentWarper = Component }
    return {
      name: ComponentWarper.name,
      setup() {
        const route = useRoute()
        const keepAliveComponentName = ref([])
        let currentCom = ComponentWarper
        watch(
          () => route.matched.at(-1).components.default.name,
          (newV) => {
            console.log(f, keepAliveComponentName.value, 'watch');
            let flag = false
            keepAliveComponentName.value = []
            route.matched.forEach((item) => {
              if (flag) {
                keepAliveComponentName.value.push(item.components.default.name)
              }
              if (item.components.default.name === ComponentWarper.name) {
                keepAliveComponentName.value.push(item.components.default.name)
                flag = true
              }
            })
            currentCom = (newV === ComponentWarper.name) ? ComponentWarper : route.matched.at(-1).components.default
          },
          { immediate: true }
        )
        // onActivated(() => {
        //   console.log(f, 'active')
        //   currentCom = ComponentWarper
        //   resume()
        // })
        // onDeactivated(() => {
        //   pause()
        //   console.log(f, 'deactivate')
        // })
        // console.log(f, keepAliveComponentName.value, 'setup');
        return () => {
          // console.log(f, 'render')
          // console.log(f, keepAliveComponentName.value, '123w');
          return h('div', null, h(KeepAlive, null, [h(currentCom)]))
        }
      }
    }
  }
  return () => fn()
}