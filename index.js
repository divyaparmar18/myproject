'use strict'
const Hapi = require('hapi');
const server = hapi.server({
    port : 3000,
    host:'localhost'
});

server.route({
    method:'GET',
    path:'/',
    handler:(resolve,h)=>{
        return 'Hello world!';
    }
});

server.route({
    method:'GET',
    path:'/{name}',
    handler:(resover,h) =>{
        return "hello, " + encodeURIComponent(request.params.name) + "!";
    }
});

const init = async() =>{

    await server.start();
    console.log(`Server running at:${server.info.uri}`);
};

ProcessingInstruction.on('unhandledRejection',(err) =>{
    console.log(err);
    process.exit(1);
});
init();
