import { defineStore } from 'pinia'
// import { ref } from 'vue'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(100)
//   const accumulate = () => {
//     count.value++
//   }
//   return {
//     count,
//     accumulate
//   }
// })

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 100
    }
  },
  actions: {
    accumulate() {
      this.count++
    },
    accumulateStep(num: number) {
      this.count += num
    }
  }
})
