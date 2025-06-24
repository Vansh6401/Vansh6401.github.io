function main() {
    let b = 1;
    function sub() {          //closure function
        return b++;
    }
    return sub;
}

const f1 = main()
console.log(f1());
console.log(f1());