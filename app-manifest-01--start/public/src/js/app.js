
var deferredPrompt;

if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('/sw.js')
    .then(function(){
        console.log('Service worker registered');
    });
}

window.addEventListener('beforeInstallPrompt', function(event){
    console.log('beforeInstallPrompt fired');
    event.preventDefault();
    deferredPrompt = event;
    return false;
});

setTimeout(function(){
    console.log('This is executed once the timer is done!');
}, 3000);

console.log('This is executed right after setTimeOut()...')