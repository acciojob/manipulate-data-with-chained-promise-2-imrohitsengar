//your JS code here. If required.
function manipulateData() {
    const output = document.getElementById("output");

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then((arr) => {
        return new Promise((resolve) => {
            const evenNumbers = arr.filter(num => num % 2 === 0);

            setTimeout(() => {
                output.textContent = evenNumbers;
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        return new Promise((resolve) => {
            const multiplied = evenNumbers.map(num => num * 2);

            setTimeout(() => {
                output.textContent = multiplied;
                resolve(multiplied);
            }, 2000);
        });
    });
}
manipulateData();