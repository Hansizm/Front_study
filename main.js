document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.open_new').addEventListener('click', function(){
        window.open('new.html', 'newwin', 'width'=400, height='500');
    });
});