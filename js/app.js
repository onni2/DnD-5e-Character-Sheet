function openPage(pageName) {
    var i;
    var x = document.getElementsByClassName("page");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "";
}

$(document).ready(function() {
    // Open menu on menu button hover
    $("#menu").mouseenter(function() {
        $("#mySidebar").show();
    });
    // Open the men on a click (incase hover isn't available i.e. mobile)
    $("#menu").click(function() {
            $("#mySidebar").show();
        })
        // Close menu on menu button hover
    $("#mySidebar").mouseleave(function() {
        $("#mySidebar").hide();
    });
    // Close the men on a click (incase hover isn't available i.e. mobile)
    $(".closeMenu").click(function() {
        $("#mySidebar").hide();
    });

    // Toggle visibility of cards
    $(".expando").click(function() {
        $(this).next().slideToggle();
    });

    // Go back to top of page
    $("#scroll-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
});

// --- ------- ---
// --- Testing ---
// --- ------- ---

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