let users=[
    {
      id:1,
      name:"Vijay",
      age:25
    },
    {
        id:2,
        name:"PonSuriya",
        age:25
      },
      {
        id:3,
        name:"VIP",
        age:0.9
      },
]
let requestHandler=(request,response)=>{
    if(request.url==='/'){
        response.end("Home Page");
    }
    else if(request.url==='/login'){
        response.end("Login Page");
    }
    else if(request.url==='/users'){
        let userData=JSON.stringify(users)
        response.end(userData);
    }
    else {
        response.end("<h1>404 Error can not find error<h1>")
    }
}

module.exports={
    requestHandler
}