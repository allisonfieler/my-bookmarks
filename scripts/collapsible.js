window.addEventListener('load', (event) => {
    var coll_elems = document.getElementsByClassName("collapsible");

    for (var i = 0; i < coll_elems.length; i++) {
        coll_elems[i].addEventListener("click", function () {
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});