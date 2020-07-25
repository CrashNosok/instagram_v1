document.addEventListener("DOMContentLoaded", () => {
    ready();
});

function ready() {
    let video = document.getElementById('video'),
        vendorUrl = window.URL || window.webkitURL;

    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.
    mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getMedia({
        video: true,
        audio: false
    }, function(stream) {
        video.srcObject = stream;
        video.play();
    }, function(error) {
        alert('Ошибка! Что-то пошло не так, попробуйте позже.');
    });
    main_photo = video;
    is_cam = false;

    document.getElementById('capture').addEventListener('click', function() {
        context.drawImage(video, 0, 0, canvas_width, canvas_height);
        main_photo = context.getImageData(0, 0, canvas_width, canvas_height);
        is_cam = true;
        // в реальном времени:
        // main_photo = video;
        // is_cam = false;

        // photo.setAttribute('src', canvas.toDataURL('image/png'));
    });

    // рисовать в canvas
    // canvas.onmousedown = function(event) {
    //     canvas.onmousemove = function(event) {
    //         let x = event.offsetX;
    //         let y = event.offsetY;
    //         context.fillRect(x - 5, y - 5, 10, 10);
    //         context.fillStyle = 'red';
    //         context.fill();
    //     }
    //     canvas.onmouseup = function() {
    //         canvas.onmousemove = null;
    //     }
    // }
};

function previewImage() {
    let file = document.getElementById('file').files;

    context.clearRect(0, 0, canvas_width, canvas_height);
    if (file.length > 0) {
        let fileReader = new FileReader();

        fileReader.onload = function(event) {
            main_photo = document.getElementById('tmp_photo');
            is_cam = false;
            main_photo.setAttribute('src', window.URL.createObjectURL(file[0]));
        };
        fileReader.readAsDataURL(file[0]);
    }
}
