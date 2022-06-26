const express = require('express');

import controllerPlants from '../controller/controller.plants';

const router = express.Router();

router.get('/plants', controllerPlants.getPlants);

router.get('/plant/:id', controllerPlants.getPlantsById);

router.get('/sunny/:id', controllerPlants.getSunnyById);

router.put('/plant/:id', controllerPlants.updatePlant);

router.post('/plant', controllerPlants.createPlant);

router.delete('/plant/:id', controllerPlants.deletePlant);




export default router;