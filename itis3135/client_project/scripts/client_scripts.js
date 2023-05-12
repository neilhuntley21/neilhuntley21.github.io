$(document).ready(function() {
    $('h1').lettering();
    console.log("working")
});
$( function() {
    $( "#accordion" ).accordion();
    console.log("working accord")
  } );
$(document).ready(function () {
    $("#join-form").submit(function (event) {
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var grade = $("#grade").val();
        var parent = $("#parent").val();
        var reason = $("#reason").val();
        var tshirt = $("#tshirt").val();
        $("#result").html("<p>Thank you for joining the 4829 Titanium Tigers Robotics Team, " + name + "! We will contact you at " + email + ".</p>");
    });
    $("#prefill").click(function () {
        $.ajax({
            url: "submissions.json",
            dataType: "json",
            success: function (data) {
                var firstSubmission = data.submissions[0];
                $("#name").val(firstSubmission.name);
                $("#email").val(firstSubmission.email);
                $("#grade").val(firstSubmission.grade);
                $("#parent").val(firstSubmission.parent);
                $("#reason").val(firstSubmission.reason);
                $("#tshirt").val(firstSubmission.tshirt);
            }
        });
    });
});

$(document).ready(function () {
    $( "#founding-date" ).datepicker();
    $("#preload-button").click(function() {
        $.getJSON("team_data.json", function(data) {
            console.log("made it here")
            $("#team-number").val(data.teamNumber);
            $("#founding-date").val(data.foundingDate);
            $("#team-members").val(data.teamMembers);
            $("#additional-questions").val(data.additionalQuestions);
        });
    });
    
    // $("#preload-button").click(function() {
        
    //     $.ajax({
    //         url: "team_data.json",
    //         dataType: "json",
            
    //         success: function (data) {
                
    //             var firstSubmission = data.submissions[0];
    //             console.log("made it to here")
                
    //             $("#team-number").val(firstSubmission.teamNumber);
    //             $("#founding-date").val(firstSubmission.foundingDate);
    //             $("#team-members").val(firstSubmission.teamMembers);
    //         }
    //     });

            
    
    // });
} );

