import { Request, Response, NextFunction } from "express";
import * as recipientsService from "./recipients.service";

async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(await recipientsService.getAll());
    } catch (err) {
      console.error(`Error while getting the recipients`, err.message);
      next(err);
    }
  }

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await recipientsService.get(req.params.id));
  } catch (err) {
    console.error(`Error while getting the recipient`, err.message);
    next(err);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await recipientsService.create(req.body));
  } catch (err) {
    console.error(`Error while creating the recipient`, err.message);
    next(err);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await recipientsService.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating the recipient`, err.message);
    next(err);
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await recipientsService.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting the recipient`, err.message);
    next(err);
  }
}

export { getAll, get, create, update, remove };
