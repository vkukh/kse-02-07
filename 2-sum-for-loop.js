const sum = (...args) => {
    let result = 0;
    
    for (const i of args) {
        result += i;
    }
    
    return result;
};

console.log(sum(1, 2, 3));
