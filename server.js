import express from 'express'
const app = express()
import router from './routes/routes.js'
const rutas = router
app.use(router)



app.listen(3000, ()=>{
  console.log('Listen 3000');
})

