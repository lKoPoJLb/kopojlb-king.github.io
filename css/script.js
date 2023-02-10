window.$_GET = new URLSearchParams(location.search);
var Count = $_GET.get('Count')
setTimeout(function () {
    window.location.href = atob($_GET.get('Url'))
}, 5000)
document.getElementById('path').innerHTML = "Checkpoint " + Count + " completed, Please Wait 5 Seconds."