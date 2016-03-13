$(document).ready(function () {
    caloriesChart.update(0);
    cholesterolChart.update(0);
    fiberChart.update(0);
    proteinChart.update(0);
});

function fadeIn() {
    console.log($('#usr').val());
    username = $('#usr').val();
    $('#calories').text(username);
    console.log("hi");
    $.ajax({
        url: 'http://cors.io/?u=https://polar-refuge-50216.herokuapp.com/api/food/'+username+'/Test',
        dataType: 'json',
        success: function (json) {
            // Rates area in `json.rates`
            // Base currency (USD) is `json.base`
            // UNIX Timestamp when rates were collected is in `json.timestamp`        
            if (json.error == 1) {

            } else {
                calories = Math.round(json.calories);
                chol = Math.round(json.cholersterol);
                fiber = Math.round(json.fiber);
                sugar = Math.round(json.sugar);
                protein = Math.round(json.protein);
                va = Math.round(json.vitaminA);
                vc = Math.round(json.vitaminC);
                calcium = Math.round(json.calcium);
                iron = Math.round(json.iron);

                caloriesChart.update(calories);
                cholesterolChart.update(chol);
                fiberChart.update(fiber);
                proteinChart.update(protein);

                console.log(calories);
                console.log(chol);
                console.log(fiber);
                console.log(protein);
                console.log(iron);
                $('#calories').text(calories + " cal");
                $('#chol').text(chol + " mg");
                $('#fiber').text(fiber + " mg");
                $('#sugar').text(sugar + " g");
                $('#protein').text(protein + " g");
                $('#va').text(va + "%");
                $('#vc').text(vc + "%");
                $('#cal').text(calcium + " %");
                $('#iron').text(iron + " %");
            }

        }
    });
    $('.whiteBackground').fadeIn(500);
}

var caloriesChart = new RadialProgressChart('.calories', {
    diameter: 150,
    max: 2500,
    round: true,
    series: [{
        value: 0,
        color: ['white', 'grey']
  }],
    center: {
        content: [function (value) {
            return value
    }, ' of 2500 calories'] //daily recommended calories
    }
});

var cholesterolChart = new RadialProgressChart('.cholesterol', {
    diameter: 150,
    max: 300, //300 mg max
    round: false,
    series: [{
        value: 0,
        color: ['red', '#7CFC00']
  }],   
    center: [function (d) {
        return d.toFixed(2) + ' mg'
  }, 'of daily cholesterol']
});

var fiberChart = new RadialProgressChart('.fiber', {
    diameter: 150,
    max: 25, //25mg max
    round: false,
    series: [{
        value: 0,
        color: ['#FFFFFF', 'blue']
  }],
    center: [function (d) {
        return d.toFixed(2) + ' mg'
  }, 'of daily fiber']
});

var proteinChart = new RadialProgressChart('.protein', {
    diameter: 150,
    max: 50, //50g max
    round: false,
    series: [{
        value: 0,
        color: ['green', 'orange']
  }],
    center: [function (d) {
        return d.toFixed(2) + ' g'
  }, 'of daily protein']
});


function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}