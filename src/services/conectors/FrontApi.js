import axios from "axios";
import { FrontApiURL } from '../config/ports/front.ports'

const FrontApi = axios.create({
    baseUrl: FrontApiURL,
})

export default FrontApi