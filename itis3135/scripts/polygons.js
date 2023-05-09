function getShape() {
    let test = document.getElementById('numsides').value;
    test = parseFloat(test);
    // alert(typeof test);
    if (validateEntry(test) == true) {
        test = Math.abs(test)
        test = Math.round(test)
        
        let polyArr = ["dot","bigon","triangle","square","pentagon","hexagon","heptagon","octagon","nonagon","decagon"]
        
        document.getElementById('test').innerHTML = "Your shape is a: " + polyArr[(test-1)] + "!";
    }
    else {
        document.getElementById('test').innerHTML = "Invalid entry! Please enter a number from 1-10"

    }


    // alert("working!");
}
function validateEntry(val) {
    if (isNaN(val)) {
        return false;

    }
    else 
    {
        val = parseFloat(val)
        console.log(val)
        val = Math.round(val)
        console.log(val)
        val = Math.abs(Number(val))
        
        console.log(val)
        if (val <= 10 && val >= 1) {

            return true;
        }
        // alert("made it here!" + typeof val)
        
    }
}