var express = require('express');
var router = express.Router();
var companyModel = require('../models/Company-model')
var paymentModel =  require('../models/paymentModel')
var Rent_New = require('../models/Rent_new')
var complaintModel = require('../models/complaints')
//controllers
const {profileUpdate,forGotPage,newPassword,searchByCategory,getplace,getSignupPage, doSignup, getLoginPage, doLogin, getHomePage, logout, searchHotel, searchHospital, searchTheater, searchLibrary } = require("../controllers/tourist-controller")
const checkTourist = require('../middleware/checkTourist')

router.route('/').get(checkTourist, getHomePage);
router.route('/signup').get(getSignupPage).post(doSignup);
router.route('/login').get(getLoginPage).post(doLogin);
router.route('/logout').get(checkTourist, logout);
router.route('/search-hotels').get(checkTourist, searchHotel);
router.route('/search-hospitals').get(checkTourist, searchHospital);
router.route('/search-theaters').get(checkTourist, searchTheater);
router.route('/search-libraries').get(checkTourist, searchLibrary);
router.route('/search').post(checkTourist, searchByCategory);
router.route('/get-touristPlace').get(checkTourist,getplace)
router.get('/get-forGotPassword',forGotPage)
router.route('/forGotPassword').post(newPassword)
router.post('/company_profile',profileUpdate)
router.get('/profile_update',(req,res)=>{
        try {
                res.render('tourist/update-profile')        
        } catch (error) {
                console.log(error)
        }
})
router.get('/payments', async (req, res) => {
    try {
        let id = req.session.tourist._id;
        console.log(id, "company id");

        let payments = await paymentModel.find({company_id:id}); // Use id.id to access the string value
        console.log(payments, "--payments");

        res.render('tourist/payments', { payments });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/RentSpace',(req,res)=>{
    res.render('tourist/Rent-New') 
})
router.get('/Complaints',(req,res)=>{
    res.render('tourist/Complaints')
})
router.post('/addPayments',async(req,res)=>{
    try {
        let company = req.session.tourist;
        let name = req.session.tourist.username;
        let id = req.session.tourist._id;
        let Data = req.body;
        Data.company_id = company._id;
        Data.company_name = name;
       let payement =  await paymentModel.create(Data)
       res.redirect('/tourist')
    } catch (error) {
        console.log(error)
    }
})

router.post('/Rent_new',async(req,res)=>{
    try {
        let company = req.session.tourist;
        let name = req.session.tourist.username;
        let id = req.session.tourist._id;
        let Data = req.body;
        Data.company_id = company._id;
        Data.company_name = name;
       let payement =  await Rent_New.create(Data)
       res.redirect('/tourist')
    } catch (error) {
        console.log(error)
    }
})

router.post('/complaints',async(req,res)=>{
    try {
        let company = req.session.tourist;
        let email = req.session.tourist.email;
        let id = req.session.tourist._id;
        let Data = req.body;
        Data.email = email;
        Data.company_name = company.username;
       let payement =  await complaintModel.create(Data)
       res.redirect('/tourist')
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
