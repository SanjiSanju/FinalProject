const mongodb = require ('mongodb')

CONNECTIONSTRING = 'mongodb+srv://Abcd:@kfqZjs-X6CVMM3@cluster0-de3fh.mongodb.net/ABCD?retryWrites=true&w=majority'

mongodb.connect(CONNECTIONSTRING, {useNewUrlParser: true , useUnifiedTopology: true}, function(err, client){
  module.exports = client.db()

  console.log("DB Connected")
  const app = require('./app')
  app.listen(3000)

})