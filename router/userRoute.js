const express = require('express');
const userControl = require('../controls/userControl')

const router = express.Router();



router.post('/expense-data', userControl.postExpenseData);


router.get('/get-data', userControl.getExpenseData)

router.get('/raat-data/:id', userControl.deleteExpensedata)

// get data for editing
router.get('/edit-data/:id', userControl.getEditData)


router.post('/updated-data', userControl.updatedData)


module.exports = router;