// for slider
let
    slides = document.querySelectorAll('.slide_single'),
    slider = [],
    step = 0, 
    box_size = 100,
    count_masc = 3;

// for cam
let
    main_photo = document.getElementById('tmp_photo'),
    canvas_width = 600,
    canvas_height = 500,
    canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    is_cam = false,
    mascs_arr = [],
    selected = false,
    mouse = {
        win_x: 0,
        win_y: 0,
        x: 0,
        y: 0,
        down: false,
    };

let c = document.getElementById('canvas');
c.setAttribute('width', canvas_width);
c.setAttribute('height', canvas_height);
