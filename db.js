const mongodb = require ('mongodb')

CONNECTIONSTRING = 'mongodb+srv://sinthe:shitheya@cluster0-cl4we.mongodb.net/abcd?retryWrites=true&w=majority'

mongodb.connect(CONNECTIONSTRING, {useNewUrlParser: true , useUnifiedTopology: true}, function(err, client){
  module.exports = client.db()

  console.log("DB Connected")
  const app = require('./app')
  app.listen(3000)

})