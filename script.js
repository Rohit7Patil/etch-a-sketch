const grid = document.querySelector(".grid-container");
const colorPicker = document.querySelector("#color-picker");
const gridSize = document.querySelector("#grid-size");

gridSize.addEventListener("change", (e) => {
    gridValue = e.target.value;
    
    const gridWidth = 500 / gridValue;
    const gridHeight = 500 / gridValue;
    const container = document.querySelector(".grid-container");
    const gridInput = document.querySelector(".grid-input");
    const drawBtn = document.querySelector(".draw");
    const eraseBtn = document.querySelector(".erase");
    const resetBtn = document.querySelector(".clear");
    var eraseBtnValue = 0;

    container.innerHTML = "";
    gridInput.textContent = `${gridValue} x ${gridValue}`;
    
    drawBtn.classList.add("drawing");
    eraseBtn.classList.remove("erasing");

    for (let i = 1; i <= gridValue * gridValue; i++) {
        const btns = document.createElement("button");
        btns.classList.add("grid-blocks");
        btns.style.width = `${gridWidth}px`;
        btns.style.height = `${gridHeight}px`;
        grid.appendChild(btns);
    }
    
    const btns = document.querySelectorAll(".grid-blocks");

    function draw() {
        drawBtnValue = 1;
        eraseBtnValue = 0;
        drawBtn.classList.add("drawing");
        eraseBtn.classList.remove("erasing");
    }

    function erase() {
        drawBtnValue = 0;
        eraseBtnValue = 1;
        drawBtn.classList.remove("drawing");
        eraseBtn.classList.add("erasing");
    }

    function reset() {
        drawBtn.classList.remove("drawing");
        eraseBtn.classList.remove("erasing");
        resetBtn.classList.add("clearing");

        btns.forEach((btn) => {
            btn.style.backgroundColor = "";
        });

        setTimeout(() => {
            resetBtn.classList.remove("clearing");
            draw();
        }, 500);
    }

    drawBtn.addEventListener("click", () => {
        draw();
    });
    
    eraseBtn.addEventListener("click", () => {
        erase();
    });

    resetBtn.addEventListener("click", () => {
        reset();
    });

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (eraseBtnValue != 0) {
                btn.style.backgroundColor = "";
            } else {
                btn.style.backgroundColor = colorPicker.value;
            }
        });
    });
});
