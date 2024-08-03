class Wire {
    static wireID = 0;
    wire_node;
    I_dir;
    constructor(name , pos/*meters*/ , screen_width /*meters*/ , I , I_dir, color) {
        this.name = name;

        this.pos = pos;
        let screen_meter = screen.width / screen_width;
        this.screen_px_meter = screen_meter;
        this.px_pos = pos * screen_meter;

        this.I = I;

        this.color = color;

        this.displayWire();
        this.set_current_dir(I_dir);
        this.start_click_functions();
        this.wire_node.classList.toggle("show-dirs");
    }
    displayWire() {

        const wire_board = document.getElementById("wire_board");
        const new_wire = document.createElement("div");
        
        new_wire.classList.add("line");
        const wire_id = `wire_${Wire.wireID++}`
        new_wire.setAttribute("id",wire_id);

        
        wire_board.appendChild(new_wire);
        this.wire_node = document.getElementById(wire_id);
        this.set_style();
    }


    set_current_dir(dir){
        this.I_dir = dir;
        switch (this.I_dir) {
            case -1:
                this.wire_node.innerHTML = current_down_html;
                break;
                
            case 1:
                this.wire_node.innerHTML = current_up_html;
                break;
        }
    }

    start_click_functions(){
        let WireNode = this.wire_node;
        let WireObj = this;
        WireNode.addEventListener("click",function(event){  
            event.stopPropagation();
            WireObj.chage_focus_to_me();
            this.classList.toggle("show-dirs");

        });
    }

    update_pos(world_long){
        this.screen_px_meter = parseInt(screen.width / world_long);
        this.px_pos = this.pos * this.screen_px_meter;
        this.set_style();
    }
    
    setWirePos(newPos){
        this.pos = newPos;
        console.log(newPos);
        console.log(this.pos);
        this.px_pos = this.pos * this.screen_px_meter;
        console.log(this.px_pos);
        this.set_style();
    }

    set_style(){
        let styles = `color: ${this.color} ;left: ${this.px_pos}px;`;
        this.wire_node.setAttribute("style" , styles);
    }
    
    chage_focus_to_me(){
        let form = InfoForm.getInstance();
        form.set_focus_on_wire(this);
    }

    

}