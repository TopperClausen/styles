import express, { Request, Response, NextFunction } from 'express';

import { PrismaClient } from "@prisma/client";
import { BaseController } from './base.controller';
const prisma = new PrismaClient();

export class SizesController extends BaseController {
    public async show(req: Request, res: Response) {
        const size = await prisma.variantSizes.findFirst({ where: { id: parseInt(req.params.id) } });
        if (!size) {
            res.status(404).json({ message: "Not found", size: null });
        } else {
            res.status(200).json({ message: "success", size });
        }
    }

    public async create(req: Request, res: Response) {
        const size = await prisma.variantSizes.create({
            data: {
                ...req.body.size,
                styleVariantId: parseInt(req.params.variantId)
            }
        });
    
        res.status(201).json({ size: size });
    }

    public async update(req: Request, res: Response) {
        const size = await prisma.variantSizes.update({
            where: { id: parseInt(req.params.id) },
            data: req.body.size
        });
    
        res.status(201).json({ size });
    }

    public async delete(req: Request, res: Response) {
        try {
            await prisma.variantSizes.delete({
                where: { id: parseInt(req.params.id) }
            });
            res.status(200).json({ message: "success" });
        } catch(err: any) {
            res.status(404).json({ message: "Størrelsen blev ikke slettet" });
        }
    }
}
