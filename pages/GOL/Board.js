function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class Board {
    constructor(size) {

        // We add 2 more rows and colums on the sides to simulate virtual bounds (Easier checks)
        let true_size = size + 2;

        this.current_state = new Array(true_size);
        this.next_state = new Array(true_size);

        for(let i=0; i < true_size; i++) {

            this.current_state[i] = new Array(true_size);
            this.next_state[i] = new Array(true_size);
        }

        this.reset();
    }

    get_size() {return this.current_state.length - 2;}

    reset() {
        for(let i=0; i<this.current_state.length; i++)
            for(let j=0; j<this.current_state.length; j++) {
                this.current_state[i][j] = 0;
                this.next_state[i][j] = 0;
            }
    }

    fill_random() {
        for(let i=0; i<this.current_state.length; i++)
            for(let j=0; j<this.current_state.length; j++) 
                this.current_state[i][j] = getRandomInt(3) == 0? 1:0
            
    }

    output() {
        for(let y=1; y<this.current_state.length - 1; y++) {
            let line = "";
            for(let x=1; x<this.current_state.length - 1; x++) {
                line += this.current_state[y][x] == 1 ? "O " : ". ";
            }   
            console.log(line);
        }
    }

    get(x,y) {return this.current_state[y+1][x+1];}
    set(x,y,val) {this.current_state[y+1][x+1] = val; }

    get_alive_neighbors(x, y) {
        
        let nb_alive = 0;

        for(let o_y = -1; o_y <= 1; o_y++)
            for(let o_x = -1; o_x <= 1; o_x++) {
                if(o_x == 0 && o_y == 0) continue; // We ignore outselves
                if(this.current_state[y+o_y][x+o_x] == 1 ) nb_alive++;
            }
        
        return nb_alive;
    }


    compute_next_state() {

        // If nb_alive_neighbors == 2 || 3 => Still alive
        // Else dead as hell

        // Be careful to start from 1 (virtual bounds) and end an index early.
        for(let y = 1; y < this.current_state.length - 1; y++) {
            for(let x = 1; x < this.current_state.length - 1; x++) {
                let alive = this.get_alive_neighbors(x, y);
                let cell = this.current_state[y][x];

                if(cell == 1) {
                    this.next_state[y][x] = (alive == 2 || alive == 3) ? 1 : 0;
                } else {
                    this.next_state[y][x] = (alive == 3) ? 1 : 0;
                }
            }
        }

    }

    step() {

        this.compute_next_state();

        for(let y=0; y<this.current_state.length; y++) {
            for(let x=0; x<this.current_state.length; x++) {

                this.current_state[y][x] = this.next_state[y][x];
                this.next_state[y][x] = 0;

            }
        }
    }




}
