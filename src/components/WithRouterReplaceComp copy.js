// import { h, KeepAlive, computed } from 'vue';
import { h, KeepAlive } from 'vue';
import { useRoute } from 'vue-router';

export default function WithRouterReplaceComp(Component, keepAlive = true) {
  const fn = async () => {
    let ComponentWarper;
    try { ComponentWarper = (await Component()).default }
    catch (err) { ComponentWarper = Component }
    return {
      name: "replaceAAAA",
      setup(props, { attrs }) {
        const route = useRoute()
        const Com = h(route.matched.at(-1).components.default, attrs)
        console.log(route.matched)
        console.log(Com, KeepAlive, keepAlive)
        return () => {
          if (keepAlive) return h(KeepAlive, { include: [ComponentWarper.name] }, [Com])
          else return Com
          // return h('div', null, ['123'])
        }
      }
    }
  }
  return () => fn()
}
