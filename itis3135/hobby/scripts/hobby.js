document.getElementById("navp1").addEventListener("click",() => revealPage("page1"))
document.getElementById("navp2").addEventListener("click",() => revealPage("page2"))
document.getElementById("navp3").addEventListener("click",() => revealPage("page3"))
document.getElementById("navp4").addEventListener("click",() => revealPage("page4"))
document.getElementById("navp5").addEventListener("click",() => revealPage("page5"))
document.getElementById("navp6").addEventListener("click",() => revealPage("page6"))
window.onload = function () {
    revealPage("page1")
};
function revealPage(pageNum){
    
    let pageArr = ['page1','page2','page3','page4','page5','page6']

    for (let i = 0; i < pageArr.length; i++) {
        let page = document.getElementById(pageArr[i])

        if(pageArr[i] == pageNum){
            page.style.display = "block"
        }
        else{
            
            console.log("made it here")
            page.style.display = "none"
        }
        
    }


    localStorage.setItem('currentPage', pageNum);
}

window.addEventListener('load', function(event) {
    //saves the current state of the page so it can be returned to even after a refresh
    var currentPage = localStorage.getItem('currentPage');
    revealPage(currentPage);
  });

