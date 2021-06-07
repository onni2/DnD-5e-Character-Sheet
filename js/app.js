function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

$(document).ready(function() {
    $("#collapse-all").click(function() {
        $(".collapse").slideUp();
    });
});

$(document).ready(function() {
    $("#expand-all").click(function() {
        $(".collapse").slideDown();
    });
});

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
    $(".scrollTo").click(function() {
        var position = $($(this).attr("href")).offset().top;
        $("html, body").animate({ scrollTop: position }, 1000);
        return false;
    });
});