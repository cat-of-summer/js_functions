Функция предназначена для поочередного слияния многомерных ассоциативных массивов.

Пример:

let array_1 = {
    a0: "start_value",
    a1: "start_value",
    a2: {
        b1: "start_value",
        b2: {
            c1: "start_value"
        },
        b3: {
            c1: {
                d1: "start_value"
            }
        }
    }
}

let array_2 = {
    a1: "new_value",
    a2: {
        b2: {
            c1: "new_value",
            c2: "new_value"
        },
        b4: "new_value"
    },
    a3: "new_value"
}

let array_3 = {
    a2: {
        b3: "end_value"
    }
}

console.log(st_assoc_merge(array_1));
console.log(st_assoc_merge(array_1, array_2));
console.log(st_assoc_merge(array_1, array_2, array_3));