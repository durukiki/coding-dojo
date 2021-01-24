function solution1(arr) {
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    return sum / arr.length;
}

function solution2(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

function solution3(arr){
    const plus = (number, index) => {
        console.log(number);
        if (index == arr.length) {
            return number;
        }

        return plus(number + arr[index], index + 1)
    };

    return plus(0, 0) / arr.length;
}

it('test', () => {
    expect(solution1([1, 2, 3, 4])).toBe(2.5);
    expect(solution1([5, 5])).toBe(5);

    expect(solution2([1, 2, 3, 4])).toBe(2.5);
    expect(solution2([5, 5])).toBe(5);

    expect(solution3([1, 2, 3, 4])).toBe(2.5);
    expect(solution3([5, 5])).toBe(5);
});
