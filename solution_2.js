(function() {
    var preventTouchend = false

    // Hacky fix...it works...but it's ugly as shit....
    var triggerStupidOverlay = function() {
        preventTouchend = true
        setTimeout(function() {
            preventTouchend = false
        }, 400)
    }

    $(document).on("touchend", function(e) {
        if (preventTouchend) {
            e.preventDefault()
            e.stopPropagation()
            return false
        }
    })

    $(document).on("touchend", "#show-next", function() {
        $(".page").hide()
        $("#page2").show()
        triggerStupidOverlay()
    })

})()
