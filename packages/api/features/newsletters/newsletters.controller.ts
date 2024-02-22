import { Request, Response, NextFunction } from "express";
import * as newlettersService from "./newsletters.service";

async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await newlettersService.getAll());
    } catch (err) {
      console.error(`Error while getting the newletters`, err.message);
      next(err);
    }
  }

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await newlettersService.get(req.params.id));
  } catch (err) {
    console.error(`Error while getting the newletter`, err.message);
    next(err);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await newlettersService.create(req.body));
  } catch (err) {
    console.error(`Error while creating the newletter`, err.message);
    next(err);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await newlettersService.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating the newletter`, err.message);
    next(err);
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await newlettersService.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting the newletter`, err.message);
    next(err);
  }
}

export { getAll, get, create, update, remove };
