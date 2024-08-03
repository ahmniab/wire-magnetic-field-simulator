/*
******* dirictions ********
*
* field inside  =  1
* field outside = -1
*
* current up    =  1
* current down  = -1
*
*/

const PI = Math.PI ;
const mu = PI * 4e-7 ;


function calc_B_in_point_for_wire(wire , point) {
    if(point == wire.pos){
        return NaN;
    }

    B = (mu * wire.I)/(2 * PI * Math.abs(wire.pos - point));
    console.log(Math.abs(wire.pos - point));
    
    if ((point < wire.pos && wire.I_dir == 1) || (point > wire.pos && wire.I_dir == -1)) {
        B *= -1;
    } 
    console.log('B = '+B);
    return B ;  
    
}

function calc_B_in_point(wires , point , field) {
    let Total_B = field;
    wires.forEach(wire => {
        Total_B += calc_B_in_point_for_wire(wire , point);
        console.log('total B = '+Total_B);
    });
    return Total_B;
    
}
