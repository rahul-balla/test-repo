const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send(
    {
      firstName: 'John',
      lastName: 'Doe',
      claimStatus: 'Processed',
      claimNumber: '123456789',
      memberID: '987656789',
      employer: 'Anthem Inc'
    }
  )
})

const PORT = process.env.PORT || 4600

app.listen({port: PORT}, () => {
  console.log('Backedn API is running on port 4600')
})