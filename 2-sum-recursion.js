const sum = (...args) => args.length ? args[0] + sum(...args.slice(1)) : 0;

console.log(sum(1, 2, 3, 4));