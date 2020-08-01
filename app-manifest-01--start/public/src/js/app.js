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
})