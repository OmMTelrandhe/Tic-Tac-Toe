let btn = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let newbtn = document.querySelector(".newbtn");
let msgcon = document.querySelector(".msgcon");
let msg = document.querySelector("#msg");

let turnO = true;

const arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const resetgame = () => {
    turnO = true;
    enablebtn();
    msgcon.classList.add("hide");
    btn.forEach((element) => {
        element.innerText = "";
    })
}

btn.forEach((element) => {
    element.addEventListener("click", () => {
        if (element.innerHTML == "") {
            if (turnO) {
                element.innerText = "X";
                turnO = false;
            }
            else {
                element.innerText = "O";
                turnO = true;
            }
        }
        check();
    })
})

const disablebtn = () => {
    btn.forEach((element) => {
        element.disabled = true;
    })

}
const enablebtn = () => {
    btn.forEach((element) => {
        element.disabled = false;

    })

}
const showwinner = (win) => {
    msg.innerHTML = `Congratulations !! ${win} is winner`;
    msgcon.classList.remove("hide");
    disablebtn();
}

const check = () => {
    for (let pattern of arr) {
        let pos1 = btn[pattern[0]].innerText;
        let pos2 = btn[pattern[1]].innerText;
        let pos3 = btn[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showwinner(pos1);
            }

        }
    }
    //draw
    let count = 0;
    btn.forEach((element) => {
        if (element.innerText != "") {
            count++;
        }
        if (count == 9) {
            msg.innerHTML = "Match Draw";
            msgcon.classList.remove("hide");
            disablebtn();
        }
    })


}

newbtn.addEventListener("click", () => {
    resetgame();
})

reset.addEventListener("click", () => {
    resetgame();
})
