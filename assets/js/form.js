const submit = document.getElementById('submit1');
const submit2 = document.getElementById('submit2');
submit.addEventListener('click', (e) => {
    // デフォルトのイベントをキャンセル
    e.preventDefault();
    alert("追加音声のぱいそん呼び出すよ～ん");
});
submit2.addEventListener('click', (e) => {
    // デフォルトのイベントをキャンセル
    e.preventDefault();
    alert("削除音声のぱいそん呼び出すよ～ん");
});