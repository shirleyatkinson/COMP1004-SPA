$(document).ready(function () {

    $('#map').click(function () {
        $('#page-content-wrapper').load('map.html');
    })

    $('#treasure').click(function () {
        $('#page-content-wrapper').load('treasure.html');
    })

    $('#data').click(function () {
        $('#page-content-wrapper').load('data.html');
    })

    $('#SubmitGuess').click(function () {
        window.alert('I am here');

        var player = $('#Player_Name').val();
        var guess = $('#Guess').val();
        window.alert("Well done " + player + ".  You have guessed " + guess);
    })
});