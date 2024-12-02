import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const addExampleValidate = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
});

const updateExampleValidate = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
});

export const addExampleMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await addExampleValidate.validate(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      message: "Validation Error",
      error: error,
    });
  }
};

export const updateExampleMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await updateExampleValidate.validate(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      message: "Validation Error",
      error: error,
    });
  }
};
