function calculateAge() {
    var dobInput = document.getElementById("dob").value;

    if (dobInput !== "") {
        var dob = new Date(dobInput);
        var currentDate = new Date();

        var ageInMilliseconds = currentDate - dob;
        var ageInYears = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000);

        var age = Math.floor(ageInYears);

        document.getElementById("result").innerText = `Your age is ${age} years.`;
    } else {
        alert("Please enter your date of birth.");
    }
}