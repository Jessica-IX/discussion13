window.addEventListener('load', (event) => {
    var sec_figure = document.getElementById('thumbs').children[1];
    alert(sec_figure.getElementsByTagName('figcaption')[0].innerHTML);
});

var imgs = document.querySelectorAll('.thumbnail');
let showcase = document.getElementById("display");
imgs.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        item.style.visibility = 'hidden'; 
    });
});
