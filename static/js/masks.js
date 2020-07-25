document.addEventListener("DOMContentLoaded", () => {
    // document.getElementById('masks').onclick = mask_selection;
    document.getElementById('slide').onclick = mask_selection;

    window.onmousemove = function(e) {
        mouse.win_x = e.pageX;
        mouse.win_y = e.pageY;
    }
    
    canvas.onmousemove = function(e) {
        // мышь относительно canvas
        mouse.x = e.pageX - e.target.offsetLeft;
        mouse.y = e.pageY - e.target.offsetTop;
    }
    
    canvas.onmousedown = function(e) {
        mouse.down = true;
    }
    
    canvas.onmouseup = function(e) {
        mouse.down = false;
        selected = false;
    }
});

function is_cursor_in_mask(mask) {
    return  mouse.x > mask.x && mouse.x < mask.x + mask.width && 
        mouse.y > mask.y && mouse.y < mask.y + mask.height;
}

function is_cursor_in_canvas() {
    return mouse.win_x > canvas.offsetLeft && mouse.win_x < canvas.offsetLeft + canvas_width &&
        mouse.win_y > canvas.offsetTop && mouse.win_y < canvas.offsetTop + canvas_height;
}

function stroke_mask(mask) {
    context.strokeStyle = 'blue';
    context.lineWidth = 3;
    context.strokeRect(mask.x, mask.y, mask.width, mask.height);
}

function mask_selection(event) {
    event.target.classList.toggle('add_border');
    let mask = {
        target: event.target,
        x: 0,
        y: 0,
        width: 200,
        height: 200,
    };
    mascs_arr.push(mask);
    // if (event.target.classList.contains('add_border')) {
    //     context.drawImage(event.target, 0, 0, 100, 100);
    // } else {
    //     context.drawImage(event.target, 0, 0, 0, 0);
    // }
}


document.getElementById('del_photo').onclick = function() {
    for (let mask of mascs_arr) {
        mask.target.classList.remove('add_border');
    }
    mascs_arr = [];
    main_photo = video;
    is_cam = false;
}

setInterval(function() {
    context.clearRect(0, 0, canvas_width, canvas_height);
    if (is_cam) {
        context.putImageData(main_photo, 0, 0);
    } else {
        context.drawImage(main_photo, 0, 0, canvas_width, canvas_height);
    }
    let i = 0;
    for (let mask of mascs_arr) {
        if (mask.target.classList.contains('add_border')) {
            context.drawImage(mask.target, mask.x, mask.y, mask.width, mask.height);
            if (is_cursor_in_mask(mask)) {
                stroke_mask(mask);
                if (mouse.down) {
                    selected = mask;
                }
            }
        } else {
            mascs_arr.splice(i, 1);
        }
        i++;
    }
    if (selected && mouse.down) {
        selected.x = mouse.x - selected.width / 2;
        selected.y = mouse.y - selected.height / 2;
    }
    if (!is_cursor_in_canvas()) {
        mouse.down = false;
        selected = false;
    }
}, 30);
