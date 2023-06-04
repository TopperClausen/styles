import express, { Request, Response, NextFunction } from 'express';

import { PrismaClient } from "@prisma/client";
import { BaseController } from './base.controller';
const prisma = new PrismaClient();

export class StylesController extends BaseController {
    public async index(req: Request, res: Response) {
        const styles = await prisma.styles.findMany({ include: { styleVariants: true } });
        res.status(200).json({ styles: styles });
    }
    
    public async show(req: Request, res: Response) {
        const styles = await prisma.styles.findMany({ include: { styleVariants: true } });
        res.status(200).json({ styles: styles });
    }

    public async create(req: Request, res: Response) {
        const style = await prisma.styles.create({
            data: req.body.style
        });
        res.status(201).json({ message: 'success', style });
    }

    public async update(req: Request, res: Response) {
        const style = await prisma.styles.update({
            where: { id: parseInt(req.params.id) },
            data: req.body.style
        });
        res.status(201).json({ style });
    }

    public async delete(req: Request, res: Response) {
        try {
            await prisma.styles.delete({
                where: { id: parseInt(req.params.id) }
            })
            res.status(200).json({ message: "Deleted successfully" });
        } catch (error: any) {
            res.status(404).json({ message: "Produktet blev ikke slettet" });
        }
    }
}
