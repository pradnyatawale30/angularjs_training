class HomeLoan {

}

class CarLoan {

}


type LoanType = HomeLoan | CarLoan;

function loanApproval(loan: LoanType): void {
    if (loan instanceof HomeLoan)
        console.log("Homeloan");
    else
        console.log("Carloan");
}

loanApproval(new HomeLoan());
