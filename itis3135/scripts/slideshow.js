$(document).ready(function(){
    $("#image_storage a").each(function(){
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href")
        // alert(swappedImage.src)
    });
    // console.log("made it here")
    // alert("isworking") tested. it made it here
    // img[src='images/Shooting-in-RAW-TIFF-JPEG-5682ac103df78ccc15bfef42.jpg']" ||
    $(".swap").click(function(Event){
        // alert("working")
        var imageURL = $(this).attr("src");
        // alert(imageURL)
        $("#slideshow-header").attr("src",imageURL)

        var caption = $(this).attr("title")
        console.log(caption)
        $("#caption").text(caption)
        
        Event.preventDefault()
    });
});


