import axios from "axios"

const Base_URL = "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api"

const todoApi = {}

todoApi.createTodo = (input, token) => {
    return axios.post(`${Base_URL}/V2/todos`, input, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}

todoApi.getTodo = (token) => {
    return axios.get(`${Base_URL}/V2/todos`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}

todoApi.updateTodo = (id,input,token) => {
    return axios.patch(`${Base_URL}/V2/todos/${id}`, input, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}

todoApi.deleteTodo = (id,token) => {
    return axios.delete(`${Base_URL}/V2/todos/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}

export default todoApi