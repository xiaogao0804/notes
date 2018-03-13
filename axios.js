<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery实现JSONP</title>
</head>
<body>

</body>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script type="text/javascript">
	//get的第一种请求方法
/*   axios.get('./user?ID=12345')
         .then(function(response){
         	console.log(response)
         })
         .catch(function(err){
         	console.log(err)
         });*/


    //get的第二种请求方法
/*    axios.get('/user',{
    	params:{
    		ID:12345
    	}
    })
    .then(function(response){
    	console.log(response)
    })
    .catch(function(err){
    	console.log(err)
    })*/




    //post请求
/*    axios.post('/user',{
    	firstName:'Fred',
    	lastName:'li'
    })
    .then(function(res){
    	console.log(res)
    })
    .catch(function(err){
    	console.log(err)
    });*/




    //一次性并发多个请求/*
/*  function getUserAccount(){
 	 return axios.get('/user/12345');
	}
function getUserPermissions(){
  return axios.get('/user/12345/permissions');
}
axios.all([getUserAccount(),getUserPermissions()])
  .then(axios.spread(function(acct,perms){
    //当这两个请求都完成的时候会触发这个函数，两个参数分别代表返回的结果
  }))*/




  //发送一个`POST`请求
/*axios({
    method:"POST",
    url:'/user/12345',
    data:{
        firstName:"Fred",
        lastName:"Flintstone"
    }
});*/




//拦截器

//添加一个请求拦截器
axios.interceptors.request.use(function(config){
  //在请求发出之前进行一些操作
  return config;
},function(err){
  //Do something with request error
  return Promise.reject(error);
});
//添加一个响应拦截器
axios.interceptors.response.use(function(res){
  //在这里对返回的数据进行处理
  return res;
},function(err){
  //Do something with response error
  return Promise.reject(error);
})

//取消拦截器

var myInterceptor = axios.interceptor.request.use(function(){/*....*/});
axios.interceptors.request.eject(myInterceptor);


八、错误处理

axios.get('/user/12345')
  .catch(function(error){
    if(error.response){
      //请求已经发出，但是服务器响应返回的状态吗不在2xx的范围内
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.header);
    }else {
      //一些错误是在设置请求的时候触发
      console.log('Error',error.message);
    }
    console.log(error.config);
  })

 

</script>
</html>