const path = require('path');
const sequelize = require('./utill/database');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoute = require('./router/userRoute')

// const userControl = require('./controls/userControl')

// const ExpenseData = require('./models/expenseDataFormat');

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// app.post('/user/expense-data', userControl.postExpenseData);


// app.get('/user/get-data', userControl.getExpenseData)

// app.get('/user/raat-data/:id', userControl.deleteExpensedata)

// // get data for editing
// app.get('/user/edit-data/:id', userControl.getEditData)


// app.post('/user/updated-data', userControl.updatedData)


app.use('/user',userRoute);

sequelize.sync()
    .then(result => {
        app.listen(4000);
    })
    .catch(err => {
        console.log(err)
    })