const express   = require('express'),
      app       = express(),
      path      = require('path')

app.use(express.static(path.join(__dirname,'')))
app.listen(process.env.PORT || 8080)
