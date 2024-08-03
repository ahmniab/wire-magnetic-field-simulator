class InfoForm {

    constructor() {
        this.info_form = document.getElementById("info_form");
        this.btn = this.info_form.querySelector(".toggle");
        this.opened = false;
        this.wire_bord_form = document.getElementById("wire_bord_form");
        this.wire_form = document.getElementById("wire_form");

        // inputs
        this.wire_name = document.getElementById("wire_name");
        this.current = document.getElementById("current");
        this.wire_distance = document.getElementById("wire_distance");
        this.world_B = document.getElementById("world_B");
        this.curr_up = document.getElementById("curr_up")
        this.curr_down = document.getElementById("curr_down")
        this.add_wire_btn = document.getElementById("add_wire_btn")

        this.focusedOn = WireBoard.getInstance();
        this.start_click_functions();
        this.start_change_functions();
    
    }
    static instance = null; // https://en.wikipedia.org/wiki/Singleton_pattern
    static getInstance() {
        if (!InfoForm.instance) {
            InfoForm.instance = new InfoForm();
        }
        return this.instance;
    }
    start_click_functions(){
        this.btn.addEventListener("click",function(event){ 
            let form = InfoForm.getInstance();
            form.toggle_openning();
        });
        this.add_wire_btn.addEventListener("click",function(event){
            let board = WireBoard.getInstance();
            board.addWire(1 , 1 , 1 );
            board.recalc_points();
        });
        
    }
    
    toggle_openning(){
        if(this.opened){
            this.close();
        }else{
            
            this.open();
        }
    }
    open(){
        // if(this.focusedOn instanceof WireBoard){
        //     this.set_focus_on_wireBoard();
        // }

        this.info_form.classList.add("info-opened");
        this.opened = true ; 
        this.btn.innerText = '>';
    }

    set_focus_on_wireBoard(){
        let wire_board = WireBoard.getInstance();
        this.wire_bord_form.classList.add("focus");
        this.wire_form.classList.remove("focus");
        let world_distance = document.getElementById("world_distance");
        world_distance.value = wire_board.world_distance;
    }
    
    set_focus_on_wire(wire){
        this.wire_bord_form.classList.remove("focus");
        this.wire_form.classList.add("focus");
        this.focusedOn = wire;
        // console.log(wire);
        this.wire_name.value = this.focusedOn.name;
        this.current.value = this.focusedOn.I;
        this.wire_distance.value = this.focusedOn.pos;
        
        switch (this.focusedOn.I_dir) {
            case 1:
                this.curr_down.removeAttribute("checked");
                this.curr_up.setAttribute("checked" ,"");
                break;
                
            case -1 :
                this.curr_up.removeAttribute("checked");
                this.curr_down.setAttribute("checked","");
                break;
        }
        
        

    }

    close(){
        if(this.info_form.classList.contains("info-opened")) this.info_form.classList.remove("info-opened");
        this.opened = false ; 
        this.btn.innerText = '<';
    }

    start_change_functions(){
        let form = this;
        let wire_board = WireBoard.getInstance();
        let world_distance = document.getElementById("world_distance");
        world_distance.addEventListener("change" , (event) =>{
            wire_board.change_world_distance(world_distance.value);
        });
        let current = this.current;
        current.addEventListener("change" , (event) =>{
            form.focusedOn.I = parseFloat(current.value);
            wire_board.recalc_points();
        });
        
        let wire_distance = this.wire_distance;
        wire_distance.addEventListener("change" , (event) =>{
            form.focusedOn.setWirePos( parseFloat(wire_distance.value));
            wire_board.recalc_points();
        });
        
        this.curr_up.addEventListener('change', (event)=>{
            form.change_focusedOn_wire_curr_dir(); 
            wire_board.recalc_points();   
        });
        this.curr_down.addEventListener('change', (event)=>{
            form.change_focusedOn_wire_curr_dir();    
        });
        this.world_B.addEventListener('change',(event)=>{
            wire_board.recalc_points();
        });
        
        
    }

    change_focusedOn_wire_curr_dir(){
        this.focusedOn.set_current_dir(parseInt(document.querySelector('input[name="curr_dir"]:checked').value));
    }

}