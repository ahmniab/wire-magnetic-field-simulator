class FieldPoint{
    static pointID = 0;
    constructor(posx , posy , screen_meters){
        this.posx = posx;
        this.posy = posy;
        this.distance =  (posx / screen.width ) * screen_meters;
        this.display();
        this.start_click_functions();

    }
    display(){
        let wire_board = WireBoard.getInstance();
        const new_point = document.createElement("div");
        
        new_point.classList.add("field-point");
        const id = `point_${FieldPoint.pointID++}`;
        new_point.setAttribute("id",id);

        this.calc_point_B_to_node(new_point);
        
        wire_board.wire_board_node.appendChild(new_point);
        this.point_node = document.getElementById(id);
        this.menue_node = this.point_node.querySelector('.point-info');
        this.menue_btn_node = this.menue_node.querySelector('i');
        
        this.set_style();
    }
    set_style(){
        if (this.posy > this.menue_node.offsetHeight + 20) {
            var styles = `left: ${this.posx}px;top:${this.posy}px;margin-top: -${this.point_node.offsetHeight -10}px`;
            this.point_node.setAttribute("style" , styles);
            styles = `top:-${this.menue_node.offsetHeight + 20}px`;
            this.menue_node.setAttribute("style" , styles);
            // console.log('this.posy > this.menue_node.offsetHeight + 20')
            
        }else{
            var styles = `left: ${this.posx}px;top:${this.posy}px;margin-top: -${this.point_node.offsetHeight -10}px`;
            this.point_node.setAttribute("style" , styles);
            styles = `top: ${this.menue_node.offsetHeight - 150}px ;`
            this.menue_node.setAttribute("style" , styles);
        }
    }

    calc_point_B_to_node(node){
        let info_form = InfoForm.getInstance();
        
        let world_B = parseFloat(info_form.world_B.value) * parseInt(info_form.info_form.querySelector('input[name="field_dir"]:checked').value);
        
        let B = calc_B_in_point(wire_board.wires,this.distance , world_B);

        
        let b_arr = `${B}`.split('e');
        let b_str = Number.parseFloat(Math.abs(parseFloat(b_arr[0])).toFixed(2));
        let pow_str = b_arr[1];
        if (b_arr.length == 1 )  pow_str = 0;
        

        if (B > 0) {
            node.innerHTML = point_info_inside(wire_board.wires  , this.distance ,b_str  , pow_str);
            
        }
        else if(B < 0){
            node.innerHTML = point_info_outside(wire_board.wires  , this.distance , b_str , pow_str);

        }else{
            node.innerHTML = point_info_Draw(wire_board.wires  , this.distance ) ;

        }
    }
    recalc_B(){
        this.delete_point();
        this.display();
        this.start_click_functions();
    }
    change_point_world_d(new_d){
        this.posx = (this.distance /  new_d) * screen.width ;
        this.set_style();
    }

    start_click_functions(){
        let point = this ;
        this.point_node.addEventListener('click', (event) => {
            event.stopPropagation();
            point.toggle_opening();
            
        });
        let btn = this.menue_btn_node ;
        btn.addEventListener('click', (event) => {
            event.stopPropagation();
            point.delete_point();
        });
        
    }
    toggle_opening(){
        this.menue_node.classList.toggle("display-none");
    }
    delete_point(){
        this.point_node.remove();
        let wire_board = WireBoard.getInstance();
        let ind  = wire_board.points.indexOf(this) ;
        wire_board.points.splice(ind , ind);
        
    }
}