
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

var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve('This is executed once the timer is done!');
    //console.log('This is executed once the timer is done!');
}, 3000);
});

promise.then(function(text){
    return text;
}, function(err){
    console.log(err.code, err.message)    
}).then(function(newText){
    console.log(newText);
});

console.log('This is executed right after setTimeOut()...')