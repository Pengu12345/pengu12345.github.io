const canvas = document.getElementById("board_display");
let ctx = canvas.getContext("2d");

let board = new Board(50);

let timer;

let simulating = false;
let sim_speed = 100;

function resize(size) {
    console.log(size);
    board = new Board(size);

    fill_random();
}

function change_speed(new_speed) {

    let was_simulating = simulating;

    stop_simulation();
    sim_speed = new_speed;

    if(was_simulating)
        start_simulation();
}

function fill_random() {
    board.fill_random();
    update_visuals();
}

function reset_board() {
    board.reset();
    update_visuals();
}

function flip_cell(x,y) {
    board.set(x,y, 1 - board.get(x,y));
}

function update_visuals() {

    let canvas_w = canvas.getAttribute("width");
    let canvas_h = canvas.getAttribute("height");

    let size = board.get_size();

    // Draw the grid

    ctx.clearRect(0,0,canvas_w, canvas_h);

    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;

    let cell_w = canvas_w / size;
    let cell_h = canvas_h / size;

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
    if(!simulating) {
        simulating = true;
        timer = window.setInterval(simulate_one, sim_speed);
    }
}

function stop_simulation() {
    clearInterval(timer);
    simulating = false;
}

function simulate_one() {
    board.step();
    update_visuals();
}

        
// Floater
board.fill_random();

update_visuals();