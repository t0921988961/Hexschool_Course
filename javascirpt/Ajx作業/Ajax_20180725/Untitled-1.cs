//HTML
<div id="app">
    
  <my-counter :outer-count="outerCount" @update="setOuterCount"></my-counter>
  <my-counter :outer-count="outerCount" @update:outer-count=" value => outerCount = value"></my-counter>
  <h1>{{outerCount}}</h1>

</div>


//Vue
Vue.component('my-counter',{
  props:['outerCount'],
  template:`
  <div>
   <h1>{{innerCount}}</h1>
   <button @click="innerCount+=1">+1</button>
   <button @click="sync">sync</button>
  </div>
  `,
  data(){
    return{
      innerCount:this.outerCount,
    };
  },
  methods:{
    sync(){
      this.$emit('update',this.innerCount)
   },
  },
});

new Vue({
    el: '#app',
    data(){
      return{
        outerCount:10,
      };   
    },
  methods:{
    setOuterCount(count){
      this.outerCount = count;
    }
  },

});
