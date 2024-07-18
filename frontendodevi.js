document.getElementById('search-btn').addEventListener('click', function() {
    var searchInput = document.querySelector('.form-control').value;
    var searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchInput);
    window.location.href = searchUrl;
})

document.getElementById('lucky-btn').addEventListener('click', function() {
    var searchInput = document.querySelector('.form-control').value;
    var luckyUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchInput) + '&btnI=1';
    window.location.href = luckyUrl;
})

document.querySelector('.nav-link').addEventListener('click', function() {
    var searchInput = document.querySelector('.form-control').value;
    var imagesUrl = 'https://www.google.com/search?tbm=isch&q=' + encodeURIComponent(searchInput);
    window.location.href = imagesUrl;
});