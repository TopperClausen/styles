import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Index
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const styles = await prisma.styles.findMany({ include: { styleVariants: true } });
    res.status(200).json({ styles: styles });
});

// Show
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const style = await prisma.styles.findFirst({ where: { id: parseInt(req.params.id) }, include: { styleVariants: true } });
    if (!style) {
        res.status(404).json({ message: "Not found", style: null });
    } else  {
        res.status(200).json({ message: "success", style });
    }
});

// Create
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const style = await prisma.styles.create({
        data: req.body.style
    });
    res.status(201).json({ message: 'success', style });
});

//update
router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const style = await prisma.styles.update({
        where: { id: parseInt(req.params.id) },
        data: req.body.style
    });
    res.status(201).json({ style });
});

// Delete
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await prisma.styles.delete({
            where: { id: parseInt(req.params.id) }
        })
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error: any) {
        res.status(404).json({ message: "Produktet blev ikke slettet" });
    }
});

module.exports = router;
