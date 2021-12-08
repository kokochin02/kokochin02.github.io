//url = `/home/pi/Strage_count/strage.json`;
url = `./json/strage.json`;
$.getJSON(url, function(json) {
    //alert(json.value);
    $("#counter3").text(json.value);
});
//$("#counter3").text('1');

//Form
//window.onload = function(){
//    document.getElementById("ov").onsubmit = function(){
//        return confirm("リセットのぱいそん呼び出すよ～ん");
//    }
//}
const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    // デフォルトのイベントをキャンセル
    e.preventDefault();
    alert("リセットのぱいそん呼び出すよ～ん");
});

