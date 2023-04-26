import { ref } from "vue"

export const useCounter = () => {
  const count = ref(0)
  const jump = () => {
    count.value++
  }
  return [count, jump]
}