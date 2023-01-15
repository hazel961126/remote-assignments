function calculate(args) {
    const num1 = args.n1;
    const num2 = args.n2;
    const operate = args.op;
    if (operate === "+") {
        return ( num1 + num2 );
    } else if (operate === "-") {
        return ( num1 - num2 );
    } else (console.log("Not supported"))
}


console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5 
console.log(calculate({ n1: 5, n2: 2, op: '-' })); // expected output: 3 
console.log(calculate({ n1: 1, n2: 6, op: 'x' })); // expected output: 'Not supported'