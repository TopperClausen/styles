import express, { Request, Response, NextFunction } from 'express';
const router = express.Router({ mergeParams: true });

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Index
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const variants = await prisma.styleVariants.findMany({ include: { variantSizes: true } });
    res.json({ variants: variants });
});

// Show
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const variant = await prisma.styleVariants.findFirst(
        { 
            where: { 
                id: parseInt(req.params.id),
                styleId: parseInt(req.params.styleId)
            },
            include: { variantSizes: true } 
        }
    );
    if (!variant) {
        res.status(404).json({ message: "Not found", variant: null });
    } else {
        res.status(200).json({ message: "success", variant });
    }
});

// Update
router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const variant = await prisma.styleVariants.update({
        where: { id: parseInt(req.params.id) },
        data: req.body.variant
    });
    res.status(201).json({ variant });
});

// Create
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const variant = await prisma.styleVariants.create({
        data: {
            ...req.body.variant,
            styleId: parseInt(req.params.styleId)
        }
    });
    res.status(201).json({ variant: variant });
});

// Delete
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await prisma.styleVariants.delete({
            where: { id: parseInt(req.params.id) }
        });
        res.status(200).json({ message: "success" });
    } catch(err: any) {
        res.status(404).json({ message: "Varianten blev ikke slettet" });
    }
});

module.exports = router;
