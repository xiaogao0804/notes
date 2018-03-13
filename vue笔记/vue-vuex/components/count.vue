//在模板中我们引入我们刚建的store.js文件，并在模板中用{{$store.state.count}}输出count 的值。

     <template>
        <div>
            <h2>{{msg}}</h2>
            <hr/>
            <h3>{{$store.state.count}}</h3>

        //4.在count.vue模板中加入两个按钮，并调用mutations中的方法。
        	<button @click="$store.commit('add')">+</button>
        	<button @click="$store.commit('reduce')">-</button>

        </div>
    </template>

       <script>
        import store from '@/vuex/store'
        export default{
            data(){
                return{
                    msg:'Hello Vuex',

                }
            },
            store

        }
    </script>