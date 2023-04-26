import { computed, h, KeepAlive } from 'vue';
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
        const currentCom = computed(() => {
          return route.matched.at(-1).components.default.name === ComponentWarper.name
        })
        // onDeactivated(() => {
        //   console.log('ccc')
        // })
        return () => {
          console.log(route.matched)
          return h('div', null, h(KeepAlive, null, [currentCom.value ? h(ComponentWarper) : h(route.matched.at(-1).components.default)]))
        }
      }
    }
  }
  return () => fn()
}
