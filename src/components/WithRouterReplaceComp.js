import { h, KeepAlive, watch } from 'vue';
import { useRoute } from 'vue-router';

export default function WithRouterReplaceComp(Component) {
  const fn = async () => {
    let ComponentWarper;
    try { ComponentWarper = (await Component()).default }
    catch (err) { ComponentWarper = Component }

    return {
      name: ComponentWarper.name,
      setup() {
        const route = useRoute()
        let keepAliveComponentName = []
        let currentCom = ComponentWarper
        watch(
          () => route.matched.at(-1).components.default.name,
          (newV) => {
            let flag = false
            keepAliveComponentName = []
            route.matched.forEach((item) => {
              if (flag) {
                keepAliveComponentName.push(item.components.default.name)
              }
              if (item.components.default.name === ComponentWarper.name) {
                keepAliveComponentName.push(item.components.default.name)
                flag = true
              }
            })

            currentCom = (newV === ComponentWarper.name) ? ComponentWarper : route.matched.at(-1).components.default
          },
          { immediate: true }
        )

        return () => {
          return h('div', null, h(KeepAlive, { include: keepAliveComponentName }, [h(currentCom)]))
        }
      }
    }
  }
  return () => fn()
}