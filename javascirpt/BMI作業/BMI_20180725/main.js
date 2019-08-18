var BMIinfo = JSON.parse(localStorage.getItem('weightForm')) || [];
var weightForm = document.querySelector('.weightForm');
var finalBtn = document.querySelector('.finalBtn');
var tallNum = document.querySelector('#tall');
var weightNum = document.querySelector('#weight');
//inputValue將兩個input用object陣列裝起來
var inputValue = document.querySelectorAll('.input_num');
//reset input
var BMILoopReset = document.querySelector('.BMILoop');


//點案鈕觸發
finalBtn.addEventListener('click', BMIFinal, false);
//點loop案鈕觸發reset
BMILoopReset.addEventListener('click', resetInput, false);
//監聽UL刪除li
weightForm.addEventListener('click', deleteDataNum, false);

//更新List資料
updateList();


function BMIFinal() {

    //檢查填入內容
    checkValue()

    //計算BMI
    const tall = parseInt(tallNum.value);
    const weight = parseInt(weightNum.value);
    const BMInumber = (weight / [(tall / 100) * (tall / 100)]);

    //帶入BMI值
    const BtnBMINum = document.querySelector('.BMINum');
    BtnBMINum.textContent = BMInumber.toFixed(2); //使用.toFixed(2)四捨五入到小數點後兩位
    const BMI = BtnBMINum.textContent;

    //btn按鈕結果
    const BTNBMIFinal = document.querySelector('.BMIFinal'); //btn的結果
    const BTNBMIText = document.querySelector('.BMIText'); //結果按鈕後面文字

    //添加的LI的文字及class 顏色
    let BMItext = '';
    let listClass = '';

    //顯示結果按鈕 
    //判斷class內有沒有'error'的屬性
    if (tallNum.classList.contains('error') || weightNum.classList.contains('error')) {
        return;
    } else {
        //顯示結果按鈕function
        BtnBMIFinal()
    }

    //btn判斷顏色及屬性
    if (18.5 <= BtnBMINum.textContent && BtnBMINum.textContent <= 25) {
        // alert('理想');
        //btn
        BTNBMIText.textContent = '理想';
        BTNBMIText.style.color = '#86D73E';
        BTNBMIFinal.style.color = '#86D73E';
        BTNBMIFinal.style.border = '6px solid #86D73E';
        BMILoopReset.style.background = '#86D73E';
        //添加的LI的文字及class 顏色
        BMItext = '理 想';
        listClass = 'BMI-green';
    } else
    if (BtnBMINum.textContent <= 16) {
        // alert('過輕');
        //btn
        BTNBMIText.textContent = '過輕';
        BTNBMIText.style.color = '#31BAF9';
        BTNBMIFinal.style.color = '#31BAF9';
        BTNBMIFinal.style.border = '6px solid #31BAF9';
        BMILoopReset.style.background = '#31BAF9';
        //添加的LI的文字及class 顏色
        BMItext = '過 輕';
        listClass = 'BMI-blue';

    } else
    if (25 <= BtnBMINum.textContent && BtnBMINum.textContent <= 30) {
        // alert('過重');
        //btn
        BTNBMIText.textContent = '過重';
        BTNBMIText.style.color = '#FF982D';
        BTNBMIFinal.style.color = '#FF982D';
        BTNBMIFinal.style.border = '6px solid #FF982D';
        BMILoopReset.style.background = '#FF982D';
        //添加的LI的文字及class 顏色
        BMItext = '過 重';
        listClass = 'BMI-orange';
    } else
    if (30 <= BtnBMINum.textContent && BtnBMINum.textContent <= 35) {
        // alert('輕度肥胖');
        //btn
        BTNBMIText.textContent = '輕度肥胖';
        BTNBMIText.style.color = '#FF6C02';
        BTNBMIFinal.style.color = '#FF6C02';
        BTNBMIFinal.style.border = '6px solid #FF6C02';
        BMILoopReset.style.background = '#FF6C02';
        //添加的LI的文字及class 顏色
        BMItext = '輕度肥胖';
        listClass = 'BMI-mediumOrange';
    } else
    if (35 <= BtnBMINum.textContent && BtnBMINum.textContent <= 40) {
        // alert('中度肥胖');
        //btn
        BTNBMIText.textContent = '中度肥胖';
        BTNBMIText.style.color = '#FF6C02';
        BTNBMIFinal.style.color = '#FF6C02';
        BTNBMIFinal.style.border = '6px solid #FF6C02';
        BMILoopReset.style.background = '#FF6C02';
        //添加的LI的文字及class 顏色
        BMItext = '中度肥胖';
        listClass = 'BMI-heavyOrange';
    } else
    if (40 <= BtnBMINum.textContent) {
        // alert('重度肥胖');
        //btn
        BTNBMIText.textContent = '重度肥胖';
        BTNBMIText.style.color = '#FF1200';
        BTNBMIFinal.style.color = '#FF1200';
        BTNBMIFinal.style.border = '6px solid #FF1200';
        BMILoopReset.style.background = '#FF1200';
        //添加的LI的文字及class 顏色
        BMItext = '重度肥胖';
        listClass = 'BMI-red';
    }

    //設定目前時間
    let nowTime = new Date(); //得到目前時間
    let timeYear = nowTime.getFullYear();
    let timeMonth = nowTime.getMonth() + 1;
    let timeDate = nowTime.getDate();
    let timeHours = nowTime.getHours();
    let timeMinute = nowTime.getMinutes();
    let momment = `${timeYear}/${timeMonth}/${timeDate}-${timeHours}:${timeMinute}`;

    //自己設定 BMIitem 空的陣列準備裝資料
    let BMIitem = {
        momment,
        listClass,
        BMI,
        BMItext,
        listTall: tall,
        listWeight: weight,
    };

    //使用.unshift()將資料裝進去陣列最前頭
    //使用.push()的話，會將資料裝進陣列最後頭
    BMIinfo.unshift(BMIitem);

    //更新List資料
    updateList();

}


//檢查填入內容
function checkValue() {
    //foreach(function(e))把陣列裡的資料都丟進去function執行
    inputValue.forEach(function(e) {
        // console.log(e.value);
        if (e.value == '') {
            // alert('nothing');
            e.classList.add('error');
            //以.nextElementSibling節點，將文字插入下一個DIV內
            e.nextElementSibling.textContent = '請填入資料';
            //修改.nextElementSibling節點內文字顏色為 紅色
            e.nextElementSibling.style.color = 'rgb(245, 37, 37)';
        } else
        //以isNaN()判斷輸入的是否為文字
        if (isNaN(e.value)) {
            e.classList.add('error');
            //以.nextElementSibling節點，將文字插入下一個DIV內
            e.nextElementSibling.textContent = '請填入數字';
            e.nextElementSibling.style.color = '#ff8d66';
        } else {
            //當所有條件都成立時，移除class 'error'
            e.classList.remove('error');
            //將文字內容改成空的
            e.nextElementSibling.textContent = '';
        }

    })
}


//顯示結果按鈕 
function BtnBMIFinal() {
    const BMIFinal = document.querySelector('.BMIFinal');
    const BMIText = document.querySelector('.BMIText');
    finalBtn.style.display = 'none';
    BMIFinal.style.display = 'inline-block';
    BMIText.style.display = 'inline-block';
}


//reset input
function resetInput() {
    const BMIFinal = document.querySelector('.BMIFinal');
    const BMIText = document.querySelector('.BMIText');
    tallNum.value = '';
    weightNum.value = '';
    BMIText.textContent = '';
    finalBtn.style.display = 'inline-block';
    BMIFinal.style.display = 'none';
    BMIText.style.display = 'none';
}


//刪除LI
function deleteDataNum(e) {
    // console.log(e.target.tagName);
    var num = e.target.nodeName;
    if (num !== "A") { return };
    var index = e.target.dataset.num;
    BMIinfo.splice(index, 1);
    // console.log(BMIinfo);

    //更新List資料
    updateList();
}

//刷新List
function updateList() {
    //取出資料
    // localStorage.getItem('weightForm', JSON.stringify(BMIinfo));

    //舔加列表
    var allList = BMIinfo.map(function(item, index) { //index為這個item在陣列內的第幾位
        // console.log(index);
        return `
    <li class = "formStyle ${item.listClass}" >
        <div class = "BMIstate" >
            <h4>${item.BMItext}</h4> 
        </div> 
        <div class="BMI">
            <h5><span>BMI</span>${item.BMI}</h5>
        </div> 
        <div class = "personWeight" >
            <h5><span>weight</span>${item.listWeight}kg</h5>
        </div> 
        <div class = "personHeight" >
            <h5> <span>height</span>${item.listTall}cm</h5>
        </div> 
        <div class = "date">
            <span>${item.momment}</span>
        </div> 
        <a data-num="${index}">x</a>
    </li>`
    }).join(''); //使用join(''))將map陣列轉成字串中的逗號拿掉

    //存入localstorage
    localStorage.setItem('weightForm', JSON.stringify(BMIinfo));

    //插入Ｌi
    weightForm.innerHTML = allList;

}