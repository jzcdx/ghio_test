var things = ["Voice Actor", "Software Engineer", "Web Developer", "Storyteller", "Team Player", "Leader"];

var titleSpan = document.getElementById("job-title");

function addHoverEffect() {
    titleSpan.addEventListener("mouseover", (event) => {
        var new_item = things[Math.floor(Math.random() * things.length)];
        titleSpan.innerHTML = new_item;
    });
}
//addHoverEffect();

document.addEventListener("DOMContentLoaded", async () => {
    let testButton = document.getElementById("testButton")
    testButton.addEventListener("click", function() {
        let textToCopy = "c"
        navigator.clipboard.writeText(textToCopy)
        

    });
});


