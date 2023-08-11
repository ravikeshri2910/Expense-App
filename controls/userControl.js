const ExpenseData = require('../models/expenseDataFormat');

exports.postExpenseData = async(req,res)=>{
    try{
        
        const expense = req.body.expense;
        const description = req.body.description;
        const category = req.body.category;

        let data = await ExpenseData.create({
            expense : expense,
            description : description,
            category : category
        })

        res.status(201).json({ userdetails : data})

    }catch(err){console.log(err)}
}

exports.getExpenseData = async(req, res) =>{
    try{
        let data = await ExpenseData.findAll()
        res.status(201).json({ userdetails: data })

    }catch(err){console.log(err)}
}


exports.deleteExpensedata = async (req, res)=>{
    try{
        let deleteId = req.params.id;
        console.log(deleteId)
       await ExpenseData.destroy({where : {id :(+deleteId)}})
        res.redirect('/user/get-data')
    }catch(err){console.log(err)}
}

exports.getEditData = async (req,res)=>{
    try{
        let dataId = req.params.id;
        // let data = await ExpenseData.findById((+dataId))
        let data = await ExpenseData.findAll({where : {id : (+dataId)}})
        res.status(201).json({userdetails:data})

    }catch(err){console.log(err)}
}

exports.updatedData = async(req,res)=>{

    let dataId = req.body.id;
    let updatedExpense = req.body.updatedExpense;
    let updatedDescription = req.body.updatedDescription;
    let updatecatagory = req.body.updatecatagory;

    console.log(updatecatagory)


    let updatedData  = await ExpenseData.findAll({where : { id : (+dataId)}})
    
    console.log(updatedData[0].id)

   
    updatedData[0].expense = updatedExpense,
    updatedData[0].description = updatedDescription,
    updatedData[0].category = updatecatagory
    
    await updatedData[0].save()

    res.redirect('/user/get-data')

}

