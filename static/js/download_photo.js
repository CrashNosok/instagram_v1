document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('download_photo').onclick = download_foo;
});

function download_foo(event) {
    let img = canvas.toDataURL('image/png').replace('data:image/png;base64,', '');
    let sender = new XMLHttpRequest();
    sender.open('POST', 'upload_photo.php', true);
    sender.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    sender.onreadystatechange = function() {
        if (sender.readyState == 4) {
            console.log(sender.responseText);
        }
    }
    sender.send('upload_cam=' + img);
}
