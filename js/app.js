function openPage(pageName) {
    var i;
    var x = document.getElementsByClassName("page");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "";
}

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

$(document).ready(function() {
    $(".expando").click(function() {
        $(this).next().slideToggle();
    });
});

$(document).ready(function() {
    $("#scroll-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
});



$(document).ready(function() {
    console.log("Get File");
    $('input[type="file"]').change(function(e) {
        var fileName = e.target.files.item(0);
        console.log(fileName);
        let json = JSON.stringify(fileName);
        console.log(json);
        const blob = new Blob([json], { type: "application/json" });

        const fr = new FileReader();

        fr.addEventListener("load", e => {
            console.log(e.target.result, JSON.parse(fr.result))
        });

        fr.readAsText(blob);
        console.log("hmm...");
        var datas = fr.result;
        console.log(datas);

        $.getJSON(datas, function(data) {
            jsonData = data.items;
            console.log(jsonData);
        });
    });
});