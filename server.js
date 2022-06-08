import express from 'express'
import { append } from 'express/lib/response'
import router from './routes/routes.js'
const rutas = router
append.use(router)



append.listen(3000, ()=>{
  console.log('Listen 3000');
})

