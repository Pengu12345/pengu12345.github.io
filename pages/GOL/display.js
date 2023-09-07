const canvas = document.getElementById("board_display");
let ctx = canvas.getContext("2d");

let board = new Board(50);

let timer;

function resize(size) {
    board = new Board(size);
    fill_random();
}

function fill_random() {
    board.fill_random();
    update_visuals();
}

function update_visuals() {

    let size = board.get_size();

    // Draw the grid
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;

    let cell_w = canvas.getAttribute("width") / size;
    let cell_h = canvas.getAttribute("height") / size;

    for(let y=0; y < size; y++) {
        for(let x=0; x < size; x++) {
            
            ctx.beginPath();
            if(board.get(x,y) == 0) {
                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(x*cell_w, y*cell_h, cell_w, cell_h);
            } else {
                ctx.fillStyle = "#000000";
                ctx.fillRect(x*cell_w, y*cell_h, cell_w, cell_h);
            }
            ctx.stroke();

        }
    }
}

function start_simulation() {
    timer = window.setInterval(simulate_one, 100);
}

function stop_simulation() {
    clearInterval(timer);
}

function simulate_one() {
    board.step();
    update_visuals();
}

        
// Floater
board.fill_random();

update_visuals();