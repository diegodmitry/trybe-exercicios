import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Plants from "../plants";

const plants = new Plants();

const getPlants = async (_req: Request, res: Response) => {
  try {
    const plantsData = await plants.getPlants();
    return res.status(StatusCodes.OK).json(plantsData);
  } catch (error: any) {
    console.log(error.message);
  }
}

const getPlantsById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const plantsData = await plants.getPlants();
    const plantId = plantsData.filter((plant) => plant.id === id);
    if (plantId.length > 0) {
      return res.status(StatusCodes.OK).json(plantId);
    };
    return res.status(StatusCodes.NOT_FOUND).json({ error: 'There is no id' });
  } catch (error: any) {
    console.log(error.message);
  }
}

const getSunnyById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const plantSunId = await plants.getPlantsThatNeedsSunWithId(id);
    return res.status(StatusCodes.OK).json(plantSunId);
  } catch (error: any) {
    console.log(error.message);
  }
}

const updatePlant = async (req: Request, res: Response) => {
  const { id } = req.params;
  const newPlant = req.body;
  const plant = await (plants.editPlant(id, newPlant));
  res.send(plant);
}

const createPlant = async (req: Request, res: Response) => {
  const newPlant = req.body;

  const plant = await (plants.savePlant(newPlant));
  res.send(plant);
}

const deletePlant = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const plant = await plants.removePlantById(id);
    return res.status(StatusCodes.OK).json(plant);
  } catch (error: any) {
    console.log(error.message);
  }
}

export default { 
  getPlants,
  getPlantsById,
  getSunnyById,
  updatePlant,
  createPlant,
  deletePlant
};