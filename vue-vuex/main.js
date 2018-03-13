//在main.js 中引入新建的vuex文件

import storeConfig from './vuex/store';

//再然后 , 在实例化 Vue对象时加入 store 对象 :

new Vue({
	el:"#app",
	router,
	store,  //使用store
	template:'<App/>',
	components:{App}

})