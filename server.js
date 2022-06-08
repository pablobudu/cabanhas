import { append } from 'express/lib/response'
import router from './routes/routes.js'
const rutas = router
append.use(router)