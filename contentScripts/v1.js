function run() {
    var list = document.getElementsByClassName("user-nick-text");
    console.log("first idx : ", list.length);

    if (list.length < 1) return;

    //ban = localStorage.getItem(ban);  미구현
    let ban = ["Mamette", ]        //*****여기에 닉네임을 입력하세요*****

    for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < ban.length; j++) {
            if (list[i].innerText == ban[j]) {
                list[i].parentElement.parentElement.parentElement.parentElement.parentElement.remove();
                i--;
                break;
            }
            if (list[i].innerText == " " + ban[j]) {
                list[i].parentElement.parentElement.parentElement.remove();
                i--;
                break;
            }
        }
    }
    console.log("last idx : ", list.length);
}

/*  미구현
function push(str) {
    ban = localStorage.getItem(ban);
    ban.push(str);
    localStorage.setItem("ban", ban);
}

function pop(num) {
    ban = localStorage.getItem(ban);
    ban.splice(num - 1, 1);
    localStorage.setItem("ban", ban);
}
*/

window.addEventListener("DOMContentLoaded", () => {
    run();
  });