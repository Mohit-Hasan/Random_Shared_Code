// Written by Mohit Hasan :)

//Auto select all form
var selectElements = document.querySelectorAll('select[name^="answerValueId"]');
selectElements.forEach(function(select) {
    var options = select.querySelectorAll('option');
    options.forEach(function(option) {
        if (option.value === "1269661") {
            option.selected = true;
        }
    });
});

//Auto write comments
document.getElementById('comment').value = "Your teaching style is very wonderful and clear, making complex topics easy to understand.";
document.getElementById('negativeComment').value = "From my end there is no negative comment about you, dear sir.";
