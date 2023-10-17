import axios from 'axios';
import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import { name } from 'ejs';

const url = 'https://json-auth-test.onrender.com';
const list = document.querySelector('#list');
const txt = document.querySelector('#txt');
const btnSave = document.querySelector('#btn-save');
// 從JSON伺服器取得資料
let data = []
function init() {
    axios.get(`${url}/todos`)
        .then(function (res) {
            data = res.data;
            renderData();
        })
        .catch(function (err) {
            console.log(err);
        })
}
init();
// 渲染資料到畫面上
function renderData() {
    let str = '';
    data.forEach(function (value) {
        str += `<li><a href="page.html?id=${value.id}">${value.content}</a><input value="刪除" type="button" id="btn-delete" data-num='${value.id}'></li>`
    })
    list.innerHTML = str;
}
//新增待辦
btnSave.addEventListener('click', function (e) {
    if (txt.value === '') {
        alert('請輸入待辦事項');
        return;
    }
    let obj = {};
    obj.content = txt.value;
    axios.post(`${url}/todos`, obj)
        .then(function (res) {
            alert('新增待辦成功');
            txt.value = '';
            init();
        })
        .catch(function (err) {
            console.log(err);
        })
})
//刪除待辦
list.addEventListener('click', function (e) {
    if (e.target.getAttribute('id') !== 'btn-delete') {
        return;
    }
    else {
        let id = e.target.getAttribute('data-num');
        axios.delete(`${url}/todos/${id}`)
            .then(function (res) {
                alert('待辦事項刪除成功！');
                init();
            })
            .catch(function (err) {
                console.log(err);
            })
    }

})
