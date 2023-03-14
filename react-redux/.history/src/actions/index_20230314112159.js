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

export const addTodo = (data) => {
    return {
        type: "ADDTODO",
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteTodo = () => {
    return {
        type: "DELETETODO"
    }
}

export const deleteAllTodo = () => {
    return {
        type: "DELETEALLTODO"
    }
}