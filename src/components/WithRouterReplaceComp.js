import { h, KeepAlive, watch, ref, onDeactivated, Component as Real } from 'vue';
import { useRoute } from 'vue-router';

export default function WithRouterReplaceComp(Component, f) {
  const fn = async () => {
    let ComponentWarper;
    try { ComponentWarper = (await Component()).default }
    catch (err) { ComponentWarper = Component }
    return {
      name: ComponentWarper.name,
      setup() {
        const route = useRoute()
        const currentCom = ref(ComponentWarper)
        const stop = watch(
          () => route.matched.at(-1).components.default.name,
          (newV, oldV) => {
            console.log(f, newV, oldV, '111')
            currentCom.value = (newV === ComponentWarper.name) ? ComponentWarper : route.matched.at(-1).components.default
          },
          {
            immediate: true
          }
        )
        onDeactivated(() => {
          console.log(f, 'XXX')
          stop()
        })
        return () => {
          console.log(f, 123)
          return h('div', null, h(KeepAlive, null, [h(Real, { is: currentCom.value })]))
        }
      }
    }
  }
  return () => fn()
}
