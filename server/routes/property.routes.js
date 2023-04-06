import express from 'express';


import {getAllProprties, getPropertyDetail, createProperty, updateProperty, deleteProperty} from '../Controllers/property.controller.js';


const router = express.Router ();

router.route('/').get(getAllProprties);
router.route('/:id').get(getPropertyDetail);
router.route('/').post(createProperty);
router.route('/:id').patch(updateProperty);
router.route('/:id').delete(deleteProperty);


export default router;
