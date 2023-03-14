export const incNumber = () => {
    return {
        type: "INCREMENT"
    }
}   

export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}

export const multNumber = (num) => {
    return {
        type: "MULT",
        payload: num
    }
}

export const divNumber = () => {
    return {
        type: "DIV"
    }
}

export const addTodo = () => {
    return {
        type: "ADDTODO"
    }
}