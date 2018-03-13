
//1.引入vue  vuex
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); 

//2.store.js文件里增加一个常量对象

const state={
	count:1
}

//3.在store.js文件中加入两个改变state的方法。
//这里的mutations是固定的写法，意思是改变的,要改变state的数值的方法，必须写在mutations里就可以了。

  const mutations={
  	add(state){ 
          state.count+=1;
  	},
  	reduce(state){
  		state.count-=1
  	}
  }


//2.用export default 封装代码，让外部可以引用。

export default new Vuex.Store({
	state
})



//http://blog.csdn.net/h5_queenstyle12/article/details/75386359