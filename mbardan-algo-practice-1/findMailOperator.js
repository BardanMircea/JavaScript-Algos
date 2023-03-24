// Write a module findMailOperator that exports a function findMailOperator.

// The function findMailOperator takes an email address as argument, and prints the mail operator.

// The mail operator is the part that's after the @ and before the ..

// Examples
// This: findMailOperator("elon.musk@gmail.com")
// Will print: gmail

// This: findMailOperator("laurie@rbean.io")
// Will print: rbean

const findMailOperator = (emailAddress) => {
    
    if(!(emailAddress.includes("@") && emailAddress.includes(".")))
        return;

    let startPos = emailAddress.lastIndexOf("@") + 1;
    let tempStr = emailAddress.slice(startPos);
    let emailOperator = tempStr.slice(0, tempStr.indexOf("."))

    console.log(emailOperator)

    // const result = emailAddress.slice(startPos, endPos)
    // console.log(result);
}

module.exports = findMailOperator;
