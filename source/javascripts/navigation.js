(function() {
    // Hacky fix...it works...but it's ugly as shit....
    var triggerStupidOverlay = function() {
        $(".stupid-overlay").show()
        setTimeout(function() {
            $(".stupid-overlay").hide()
        }, 400)
    }

    $(document).on("touchend", "#show-next", function() {
        $(".page").hide()
        $("#page2").show()

        triggerStupidOverlay()
    })
})()
