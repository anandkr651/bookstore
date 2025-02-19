import {Router} from "express"
import { getbook } from "../controllers/book.controller.js"

const route = Router()

route.get('/',getbook)
export default route