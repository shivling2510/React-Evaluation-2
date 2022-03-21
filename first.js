let a = [1, 2, 3, 4, 5, 6];

let sum1 = 0;
function check(a) {
    let n = a.length;
    let x = n / 3;
    let sum2 = 0;

    let count = 4;
    for (let i = 1; i <= 3; i++) {
        let p = a.splice(0, x);
        let sum = p.reduce((prev, cur) => {
            return prev + cur;
        });

        sum2 = sum2 + count * sum;
        count++;
    }
    console.log(sum2);
}
check(a);
