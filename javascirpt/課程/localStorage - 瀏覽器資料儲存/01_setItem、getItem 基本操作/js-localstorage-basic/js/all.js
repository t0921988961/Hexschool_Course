// var str = 'tom';

// localStorage.setItem("myName", str);


// console.log(localStorage.getItem('myName'));



var btn = document.querySelector('.btnClass');
var callName = document.querySelector('.btnCall');

//存入名字
function saveName(e) {
    var str = document.querySelector('.textClass').value;
    // console.log(str);
    localStorage.setItem('Name', str);
}

//點擊時存入名字
btn.addEventListener('click', saveName, false);

//點擊時呼叫名字
callName.addEventListener('click', function() {
    var str = localStorage.getItem('Name', str);
    alert(`你的名字是${str}`);
})