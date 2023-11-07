const express = require('express');
const responseController = require('../controllers/response.controller');

const router = express.Router();

router.post('/login', responseController.getResponse);
router.get('/refresh-token', responseController.getResponse);
router.post('/send-register-email/signup', responseController.getResponse);
router.post('/signup', responseController.getResponse);
router.post('/send-register-email/update/password', responseController.getResponse);
router.patch('/update/password', responseController.getResponse);
router.post('/send-register-email/update/email', responseController.getResponse);
router.patch('/update/email', responseController.getResponse);
router.post('/route/search', responseController.getResponse);
router.get('/route/finished', responseController.getResponse);
router.get('/route/lose', responseController.getResponse);
router.get('/route/list/projected', responseController.getResponse);
router.get('/route/:id', responseController.getResponse);
router.get('/route/:id/projected-evaluated', responseController.getResponse);
router.get('/route/topo/:id', responseController.getResponse);
router.post('/route/:id/record', responseController.getResponse);
router.patch('/route/record/:id', responseController.getResponse);
router.delete('/route/record/:id', responseController.getResponse);
router.get('/route/record/:id', responseController.getResponse);
router.get('/route/record/list/user/:id', responseController.getResponse);
router.get('/route/record/list/:id', responseController.getResponse);
router.get('/route/:id/record/summary', responseController.getResponse);
router.post('/route/:id/project', responseController.getResponse);
router.delete('/route/:id/project', responseController.getResponse);
router.post('/user/check-exist', responseController.getResponse);
router.post('/user/search', responseController.getResponse);
router.get('/user', responseController.getResponse);
router.delete('/user', responseController.getResponse);
router.get('/user/mypage', responseController.getResponse);
router.get('/user/mypage/:id', responseController.getResponse);
router.post('/user/sign-up', responseController.getResponse);
router.patch('/user/profile', responseController.getResponse);
router.patch('/user/account/public-setting', responseController.getResponse);
router.patch('/user/language', responseController.getResponse);
router.post('/admins/users/create', responseController.getResponse);
router.get('/merchandise/:id', responseController.getResponse);
router.get('/merchandise/:id/areas', responseController.getResponse);
router.get('/merchandise/list/area/:id', responseController.getResponse);
router.post('/sub-area/search', responseController.getResponse);
router.get('/sub-area/:id', responseController.getResponse);
router.get('/sub-area/:id/is-evaluated', responseController.getResponse);
router.post('/area/search', responseController.getResponse);
router.get('/area/:id', responseController.getResponse);
router.get('/area/:id/is-evaluated', responseController.getResponse);
router.get('/area/:id/facilities', responseController.getResponse);
router.post('/area/update-time/:id', responseController.getResponse);
router.get('/facility/:id', responseController.getResponse);
router.get('/comment/:id', responseController.getResponse);
router.post('/comment/create', responseController.getResponse);
router.patch('/comment/update/:id', responseController.getResponse);
router.delete('/comment/delete/:id', responseController.getResponse);
router.post('/evaluation/users', responseController.getResponse);
router.post('/evaluation', responseController.getResponse);
router.delete('/evaluation', responseController.getResponse);
router.get('/follow/following/:id', responseController.getResponse);
router.get('/follow/followed/:id', responseController.getResponse);
router.get('/follow/is-followed/:id', responseController.getResponse);
router.post('/follow/:id', responseController.getResponse);
router.delete('/follow/:id', responseController.getResponse);
router.get('/notifications/main/list', responseController.getResponse);
router.get('/notifications/area/list', responseController.getResponse);
//Update 2 apis
router.get('/notification/main/list', responseController.getResponse);
router.get('/notification/area/list', responseController.getResponse);
router.patch('/notifications/main/update/is-read', responseController.getResponse);
router.patch('/notifications/area/update/is-read', responseController.getResponse);
router.get('/information/from-area/:id', responseController.getResponse);
router.get('/information/list/from-area/:id', responseController.getResponse);
router.get('/information/from-admin/:id', responseController.getResponse);
router.post('/inquiry', responseController.getResponse);
router.get('/timeline', responseController.getResponse);
router.get('/timeline/area/:id', responseController.getResponse);
router.get('/timeline/subArea/:id', responseController.getResponse);
router.get('/timeline/route/:id', responseController.getResponse);
router.get('/timeline/user/:id', responseController.getResponse);
router.post('/area/:id/check-in', responseController.getResponse);
router.get('/route/graph/finished-and-lose/user/:id', responseController.getResponse);
router.get('/merchandise/list/purchased/subArea/:id', responseController.getResponse);
router.get('/route/:id/record/summary', responseController.getResponse);
router.post('/route/:id/project', responseController.getResponse);
router.delete('/route/:id/project', responseController.getResponse);
router.get('/merchandise/list/purchased/route/:id', responseController.getResponse);
router.get('/area/download/:id/merchandise/:id1', responseController.getResponse);
module.exports = router;