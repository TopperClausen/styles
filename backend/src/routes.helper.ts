import { Router } from "express";
import { BaseController } from "./controllers/base.controller";

export const createRoutes = (actions: Array<string>, path: string, controller: BaseController): void => {
    actions.forEach(action => {
        switch (action) {
            case 'index':
                router.get(path, controller.index);
                break;
            case 'show':
                router.get(`${path}/:id`, controller.show);
                break;
            case 'create':
                router.post(path, controller.create);
                break;
            case 'update':
                router.put(`${path}/:id`, controller.update);
                break;
            case 'delete':
                router.delete(`${path}/:id`, controller.delete);
                break;
            default:
                break;
        }
    });
}
