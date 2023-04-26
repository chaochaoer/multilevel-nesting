import { useCounter } from "@/util";
import { useRouter, useRoute } from "vue-router";
import { computed } from "vue";
export default {
  name: "demo1-index",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const [count, counter] = useCounter();
    const jump = () => {
      router.push("/team");
    };
    const currentCom = computed(() => {
      return (
        route.matched.at(-1).components.default
      );
    });
    return () => {
      console.log(currentCom, 123);
      return (
        <div>
          <p>这里是 demo1</p>
          <span>{count.value}</span>
          <button onClick={counter}>累加</button>
          <button onClick={jump}>跳转到 团队管理</button>
        </div>
      );
    };
  },
};
