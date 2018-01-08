var HomeLoan = /** @class */ (function () {
    function HomeLoan() {
    }
    return HomeLoan;
}());
var CarLoan = /** @class */ (function () {
    function CarLoan() {
    }
    return CarLoan;
}());
function loanApproval(loan) {
    if (loan instanceof HomeLoan)
        console.log("Homeloan");
    else
        console.log("Carloan");
}
loanApproval(new HomeLoan());
