import{a as o}from"./axios-fd1fa517.js";const n=document.querySelector("#title"),e=document.querySelector("#content"),c="http://localhost:3000",l=location.href.split("=")[1];o.get(`${c}/todos/${l}`).then(function(t){n.textContent=t.data.id,e.textContent=t.data.content}).catch(function(t){console.log(t)});