const json=require('json-server')
const server=json.create()
const router=json.router('../public/Mock-data/db.json')
const middleware=json.defaults()
const port=process.env.PORT || 3001

server.use(middleware)
server.use(router)
server.listen(port)