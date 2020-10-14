//question 1

"use strict";

function getDogImage(userNum) {
    if (userNum < 3) {
        fetch('https://dog.ceo/api/breeds/image/random/3')
            .then(response => response.json())
            .then(responseJson => console.log(responseJson));
    } else if (userNum > 50) {
        return alert("Please enter a value less than 50");
    } else {
        fetch(`https://dog.ceo/api/breeds/image/random/${userNum}`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
    }
}

function watchForm() {
    $("#dog-number-form").submit(e => {
        e.preventDefault();
        let userNum = $(`#dog-number-user`).val();
        getDogImage(userNum);
    });
}

$(function () {
    console.log('App is running!  Submit to run.');
    watchForm();
});