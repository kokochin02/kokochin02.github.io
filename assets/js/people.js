//url = `/home/pi/Strage_count/strage.json`;
url = `./json/people.json`;
$.getJSON(url, function(json) {
    //alert(json.value);
    $("#counter1").text(json.th);
    $("#counter2").text(json.us);
});
//$("#counter3").text('1');

//Form
//window.onload = function(){
//    document.getElementById("ov").onsubmit = function(){
//        return confirm("リセットのぱいそん呼び出すよ～ん");
//    }
//}
const submit = document.getElementById('submit');
const submit2 = document.getElementById('submit2');
submit.addEventListener('click', (e) => {
    // デフォルトのイベントをキャンセル
    e.preventDefault();
    alert("通過リセットのぱいそん呼び出すよ～ん");
});
submit2.addEventListener('click', (e) => {
    // デフォルトのイベントをキャンセル
    e.preventDefault();
    alert("消毒リセットのぱいそん呼び出すよ～ん");
});