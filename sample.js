// const App1 = {
//     data() {
//         return {
//             count: 0
//         }
//     },
//     mounted(){
//       setInterval(() => {
//             this.count++
//       }, 1000)
//     }
// }

// Vue.createApp(App1).mount('#app1')

// // ヘッダーのcompoment
const ComponentsHeader = {}
const app1 = Vue.createApp(ComponentsHeader)
app1.component('componentsheader', {
  template:`<header>Kondo Works ~~ ゼロからのAWS学習　~~ </header>`
})

app1.mount('#componentsheader')

const ComponentsButton = {}
const app = Vue.createApp(ComponentsButton)
app.component('componentsbutton', {
  props: ['prop1'],
  template:`<button>{{prop1}}</button>`
})

app.mount('#componentsbutton')