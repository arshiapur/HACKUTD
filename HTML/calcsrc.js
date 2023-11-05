$(document).ready(function() {
    $("#calculateButton").click(function() {
        let annualSalary = parseFloat($("#annualSalary").val());
        let percentToSave = parseFloat($("#percentToSave").val());

        if (isNaN(annualSalary) || isNaN(percentToSave)) {
            $("#savingsResult").text("Invalid input. Please enter numbers only.");
        } else {
            let savingsAmount = annualSalary * percentToSave;
            $("#savingsResult").text("You should save $" + savingsAmount.toFixed(2) + " per month.");
        }
    });
});