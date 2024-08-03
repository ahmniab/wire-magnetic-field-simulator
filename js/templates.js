const current_up_html = `
<div class="dirs">
    <div class="dir-x-o">
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
    </div>
    <div class="direction">
        <i class="fa-solid fa-arrow-up-long"></i>
    </div>
    <div class="dir-x-o">
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
    </div>
    </div>
`
const current_down_html = `
<div class="dirs">
    <div class="dir-x-o">
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
        <i class="fa-solid fa-xmark"></i>
    </div>

    <div class="direction">
        <i class="fa-solid fa-arrow-down-long"></i> 
    </div>

    <div class="dir-x-o">
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
    </div>
</div>
`

function point_info_inside(wires  , distance , B , pow ) {
    

    let temp = `
    <div class="point-info">
        <i class="fa-solid fa-trash"></i>
        <div class="distances">
        <h4 style="margin-bottom: 10px;">
            wires distances
        </h4>`
    wires.forEach(wire => {
        temp += `<p style="color: ${wire.color};">${wire.name} = ${Number.parseFloat(Math.abs(distance - wire.pos).toFixed(1))} m</p>`;
    });

                    
    temp +=`</div>
     <h4>`
     if(pow != 0)
         temp += `   Total B = ${B}x10 <span class="pow">${pow}</span> T`
     else
         temp += `   Total B = ${B} T`
 
     temp += `</h4>
     <strong>inside </strong>
     </div>
     <i class="fa-solid fa-xmark"></i>
     `
    return temp;
}
function point_info_outside(wires  , distance , B , pow ) {
    

    let temp = `
    <div class="point-info">
        <i class="fa-solid fa-trash"></i>
        <div class="distances">
        <h4 style="margin-bottom: 10px;">
            wires distances
        </h4>`
    wires.forEach(wire => {
        temp += `<p style="color: ${wire.color};">${wire.name} = ${Number.parseFloat(Math.abs(distance - wire.pos).toFixed(1))} m</p>`;
    });

                    
    temp += `
    </div>
    <h4>`
    if(pow != 0)
        temp += `   Total B = ${B}x10 <span class="pow">${pow}</span> T`
    else
        temp += `   Total B = ${B} T`

    temp += `</h4>
    <strong>outside </strong>
    </div>
    <i class="fa-solid fa-circle"></i>
    `
    return temp;
}
function point_info_Draw(wires  , distance ) {
    

    let temp = `
    <div class="point-info">
        <i class="fa-solid fa-trash"></i>
        <div class="distances">
        <h4 style="margin-bottom: 10px;">
            wires distances
        </h4>`
    wires.forEach(wire => {
        temp += `<p style="color: ${wire.color};">${wire.name} = ${Number.parseFloat(Math.abs(distance - wire.pos).toFixed(1))} m</p>`;
    });

                    
    temp += `
    </div>
    <h4>`;

    temp += `   Total B = 0 T`;

    temp += `</h4>
    <strong>Draw </strong>
    </div>
    <i class="fa-regular fa-circle-xmark"></i>
    `
    return temp;
}