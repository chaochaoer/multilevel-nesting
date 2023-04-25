import { h, KeepAlive } from 'vue';
import { RouterView } from 'vue-router';

export default function WithRouterReplaceComp(Component, keepAlive = true) {
  const fn = async () => {
    let ComponentWarper;
    try { ComponentWarper = (await Component()).default }
    catch (err) { ComponentWarper = Component }
    return {
      name: ComponentWarper.name,
      setup(props, { attrs }) {
        return () => {
          return h(RouterView, null, {
            default: ({ Component }) => {
              let Com = h(Component ?? ComponentWarper, { ...attrs })
              if (keepAlive) return h(KeepAlive, { include: [ComponentWarper.name] }, [Com])
              else return Com
            }
          })
        }
      }
    }
  }
  return () => fn()
}
