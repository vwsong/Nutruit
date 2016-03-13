$(document).ready(function () {

});

function fadeIn() {
    console.log($('#usr').val());
    username = $('#usr').val();
    $('#calories').text(username);
    console.log("hi");
    $.ajax({
        url: 'https://morning-basin-19700.herokuapp.com/api/info/' + username,
        dataType: 'json',
        success: function (json) {
            // Rates are in `json.rates`
            // Base currency (USD) is `json.base`
            // UNIX Timestamp when rates were collected is in `json.timestamp`        
            if (json.error == 1) {
                
            } else {
                calories = json.calories;
                chol = json.cholesterol;
                fiber = json.fiber;
                sugar = json.sugar;
                protein = json.protein;
                va = json.vitaminA;
                vc = json.vitaminC;
                calcium = json.calcium;
                iron = json.iron;
                console.log(calories);
                $('#calories').text(calories);
                $('#chol').text(chol);
                $('#fiber').text(fiber);
                $('#sugar').text(sugar);
                $('#protein').text(protein);
                $('#va').text(va);
                $('#vc').text(vc);
                $('#cal').text(calcium);
                $('#iron').text(iron);
            }

        }
    });
    $('.whiteBackground').fadeIn(500);
}