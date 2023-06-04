import { Request, Response } from "express";

export abstract class BaseController {
    public index(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }

    public show(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }

    public create(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }

    public update(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }

    public delete(req: Request, res: Response) {
        throw new Error("Method not implemented.");
    }
}