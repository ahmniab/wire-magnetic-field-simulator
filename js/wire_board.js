class WireBoard{
    static world_distance;
    constructor(){
        this.world_distance = 5;
        this.wire_board_node = document.getElementById("wire_board");
        this.set_click_functions();
        this.colors = ['black' , 'red' ,'yellowgreen' , '#9147ff' , 'blue'] ;
        this.color_ptr = 0;
    }
    
    static instance = null; // https://en.wikipedia.org/wiki/Singleton_pattern
    static getInstance() {
    if (!WireBoard.instance) {
      WireBoard.instance = new WireBoard();
    }

    return WireBoard.instance;
    }

    wires = [];
    points = [];
    addWire( pos , I , I_dir){
        let new_wire = new Wire(`wire ${Wire.wireID +1}` , pos , this.world_distance  , I , I_dir, this.colors[this.color_ptr++%this.colors.length]);
        this.wires.push(new_wire);
        new_wire.chage_focus_to_me();
    }

    change_world_distance(new_distance){
        this.world_distance = parseInt(new_distance);
        // console.log(new_distance)
        this.wires.forEach((wire) => {
            wire.update_pos(this.world_distance);
        });
        // console.log(this.world_distance)
          this.relocate_points(this.world_distance);
        
        
    }
    set_click_functions(){
        let wire_board = this;
        wire_board.wire_board_node.addEventListener("click" , (event)=>{
            wire_board.set_info_form_focus();
            let new_point = new FieldPoint(event.clientX , event.clientY , parseFloat(document.getElementById("world_distance").value));
            wire_board.points.push(new_point);
        });
    }
    set_info_form_focus(){
        let form = InfoForm.getInstance();
        form.set_focus_on_wireBoard();
    }

    recalc_points(){
        this.points.forEach((point)=>{
            point.recalc_B();
        })
    }
    relocate_points(new_d){
        this.points.forEach((point )=>{
            
            point.change_point_world_d(new_d);
        })

    }
}