import axios from "axios";

const title = document.querySelector('#title');
const content = document.querySelector('#content');
const url = 'http://localhost:3000';
const id = location.href.split('=')[1];
axios.get(`${url}/todos/${id}`)
    .then(function (res) {
        title.textContent = res.data.id;
        content.textContent = res.data.content;
    })
    .catch(function (err) {
        console.log(err);
    })