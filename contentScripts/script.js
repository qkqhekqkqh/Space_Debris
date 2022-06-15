function board() {
    let list = document.getElementsByClassName("tit");
    console.log("before cleaning : ", list.length);

    for (var i = 0; i < list.length; i++) {
        if (list[i].innerText == "차단된 회원 게시물입니다.") {
            list[i].parentElement.parentElement.remove();
            i--;
        }
    }

    console.log("After cleaning : ", list.length);
}

function cmt() {
    const itv = setInterval(() => {
        let list = document.getElementsByClassName("note-editor content-view-ok");
        if (list.length){
            clearInterval(itv);
            console.log("before cleaning : ", list.length);

            for (var i = 0; i < list.length; i++) {
                if (list[i].innerText == "차단된 회원 댓글입니다.") {
                    list[i].parentElement.parentElement.parentElement.remove();
                    i--;
                }
            }

            console.log("After cleaning : ", list.length);
        }
    }, 100);
}

window.addEventListener("DOMContentLoaded", () => {
    board();
    cmt();
});

