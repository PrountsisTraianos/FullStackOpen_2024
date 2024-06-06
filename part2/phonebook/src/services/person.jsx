/*eslint-disable react/prop-types*/
import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseURL)

const create = newObject => axios.post(baseURL,newObject)

export default {getAll, create}
