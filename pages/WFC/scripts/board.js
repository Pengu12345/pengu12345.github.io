let possible_states = {
    ".": 1,
    "~": 1,
    "O":1
}

let input_data = [

    [".", ".", ".", ".", ".","."],
    [".", ".", ".", ".", ".","."],
    [".", "~", "~", "~", ".","."],
    ["~", "O", "O", "O", "~","."],
    ["~", "O", "O", "O", "~","."],
    ["~", "O", "O", "O", "~","."],
    [".", "~", "~", "~", ".","."],

]

class Board {

    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.grid = new Array(height+2);
        for(let i=0; i<height; i++)
            this.grid[i] = new Array(width+2);

        this.grid.forEach(y => {
            this.grid[x].forEach(_ => { this.grid[y][x] = "-" });
        });
    }

    // Getters
    get_width() {return this.width}
    get_height() {return this.height}


    compare_score_with_input(x,y, input_x, input_y) {
        score = 0;
        for(let h=-1; h<=1; h++) {
            for(let w=-1; w<=1; w++) {
                if(h == 0 && w == 0) continue; // We ignore the center
                
                if(x-w < 0 || input_x-w < 0) continue;
                if()

                if(this.grid[y + h][x + w] == input_data[input_y + h][input_x + w]) {
                    score++;
                }
            }
        }

        return score;
    }

    get_possible_states(x,y) {

    }

    get_entropy(x,y) {
        let enthropy = 0;
        this.get_possible_states(x,y).forEach(state => {
            entropy += possible_states[state];
        });
        
        return enthropy;
    }

    collapse(x,y) {

    }
}