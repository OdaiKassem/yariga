import  express  from "express";

// we have to import all the controllers
 import { getAllUsers, createUser, getUserInfoByID} from '../Controllers/user.controller.js';


 const router = express.Router();
  router.route('/').get(getAllUsers);
  router.route('/').post(createUser);
  router.route('/:id').get(getUserInfoByID);

  export default router
