
// Домашка 
// Dubassary 0 - center 1 - Fontan 2 - Korjego
// 1. Total salary
// 2. Написать функцию (matrix, 1,2,3) => возврат avr salary
// 3. *** написать функцию которая возвращать matrix3d состаящую из обьектов { name: '', age: 0, salary: Math.floor(Math.random()*10000)}

const matrix3dOfPeople = [
    [
        [
            [{ name: '', age: 0, salary: 100 }],
            [{ name: '', age: 0, salary: 100 }, { name: '', age: 0, salary: 100 }],
            [{ name: '', age: 0, salary: 100 }, { name: '', age: 0, salary: 100 }, { name: '', age: 0, salary: 100 }]
        ],
        [   
            [{ name: '', age: 0, salary: 100 }, { name: '', age: 0, salary: 100 }],
            [{ name: '', age: 0, salary: 100 }], 
            [{ name: '', age: 0, salary: 100 }, { name: '', age: 0, salary: 100 }]
        ], 
        [   
            [],
            [{ name: '', age: 0, salary: 100 }],
            [{ name: '', age: 0, salary: 100 }, { name: '', age: 0, salary: 100 }]
        ]
    ],
    [
        [
            [{ name: '', age: 0, salary: 100 }],
            [{ name: '', age: 0, salary: 100 }, { name: '', age: 0, salary: 100 }],
            [{ name: '', age: 0, salary: 100 }, { name: '', age: 0, salary: 100 }, { name: '', age: 0, salary: 100 }]
        ],
        [
            [{ name: '', age: 0, salary: 100 }, { name: '', age: 0, salary: 100 }],
            [{ name: '', age: 0, salary: 50 }],
            [{ name: '', age: 0, salary: 100 }, { name: '', age: 0, salary: 100 }]
        ],
        [
            [],
            [{ name: '', age: 0, salary: 100 }],
            [{ name: '', age: 0, salary: 100 }, { name: '', age: 0, salary: 100 }]
        ]
    ],
    [
        [
            [{ name: '', age: 0, salary: 100 }],
            [{ name: '', age: 0, salary: 100 }, { name: '', age: 0, salary: 100 }],
            [{ name: '', age: 0, salary: 100 }, { name: '', age: 0, salary: 200 }, { name: '', age: 0, salary: 100 }]
        ],
        [
            [{ name: '', age: 0, salary: 100 }, { name: '', age: 0, salary: 100 }],
            [{ name: '', age: 0, salary: 100 }],
            [{ name: '', age: 0, salary: 100 }, { name: '', age: 0, salary: 100 }]
        ],
        [
            [],
            [{ name: '', age: 0, salary: 100 }],
            [{ name: '', age: 0, salary: 100 }, { name: '', age: 0, salary: 100 }]
        ]
    ]
]

function totalSalary(matrix3dOfPeople) {
    let acc = 0;
    for (let i = 0; i < matrix3dOfPeople.length; i++) {
        for (let j = 0; j < matrix3dOfPeople[i].length; j++) {
            for (let k = 0; k < matrix3dOfPeople[i][j].length; k++) {
                for(let n = 0; n < matrix3dOfPeople[i][j][k].length; n++) {
                    if (matrix3dOfPeople[i][j][k][n].salary > 0) {
                        acc += +(matrix3dOfPeople[i][j][k][n].salary);
                    }
                }
            }
        }
    }
    return acc;
}

const ts = totalSalary(matrix3dOfPeople);
console.log("1. Total salary = " + ts);

function averageSalary(matrix3dOfPeople) {
    let acc = 0;
    let np = 0; //humber of people
    for (let i = 0; i < matrix3dOfPeople.length; i++) {
        for (let j = 0; j < matrix3dOfPeople[i].length; j++) {
            for (let k = 0; k < matrix3dOfPeople[i][j].length; k++) {
                for(let n = 0; n < matrix3dOfPeople[i][j][k].length; n++) {
                    if (matrix3dOfPeople[i][j][k][n].salary > 0) {
                        acc += +(matrix3dOfPeople[i][j][k][n].salary);
                        np++;
                    }
                    
                }
            }
        }
        console.log("2. Average salary " + [i + 1] + " = "  + acc/np);
        acc = 0;
        np = 0;
    }
}

averageSalary(matrix3dOfPeople);

function create3dMatrix(r, d, h, p) { //r-район d-дом h-квартира p-колво людей
    let newMatrix = [[[]]];
    let a = 0;
    let b = 0;
    let c = 0;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < d; j++) {
            for (let k = 0; k < h; k++) {
                for(let n = 0; n < p; n++) {
                    a = getRandomName(0, 5);
                    b = getRandomAge(0, 100);
                    c = getRandomSalary(100, 1000);
                    let y = {"name": a, "age": b, "salary": c,};
                    matrix3dOfPeople[i][j][k][n] = y;
                    
                }
                
            }
        }
    }
    return matrix3dOfPeople;
}

function getRandomName(min, max) {
    let a = Math.round(Math.random() * (max - min) + min);
    let b = Math.round(Math.random() * (max - min) + min);
    let firstName = "";
    switch(a) {
        case 0: firstName = "Alexandr";
        break;
        case 1: firstName = "Andrey";
        break;
        case 2: firstName = "Artem";
        break;
        case 3: firstName = "Boris";
        break;
        case 4: firstName = "Anna";
        break;
        case 5: firstName = "Nastia";
        break;
    }
    let lastName = "";
    switch(b) {
        case 0: lastName = "Ivanov";
        break;
        case 1: lastName = "Stalin";
        break;
        case 2: lastName = "Lenin";
        break;
        case 3: lastName = "Ershov";
        break;
        case 4: lastName = "Lomosov";
        break;
        case 5: lastName = "Gagarin";
        break;
    }
    return firstName + " " + lastName;
  }

function getRandomAge(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
function getRandomSalary(min, max) {
    return Math.random() * (max - min) + min;
  }

console.log(create3dMatrix(3, 3, 3, 3));

console.log("Данные от рандомного массива");
const ts1 = totalSalary(matrix3dOfPeople);
console.log("1. Total salary = " + ts1);
averageSalary(matrix3dOfPeople);