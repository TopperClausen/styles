import express, { Request, Response, NextFunction } from 'express';
const router = express.Router({ mergeParams: true });

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Show 
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const size = await prisma.variantSizes.findFirst({ where: { id: parseInt(req.params.id) } });
    if (!size) {
        res.status(404).json({ message: "Not found", size: null });
    } else {
        res.status(200).json({ message: "success", size });
    }
});

// Update
router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const size = await prisma.variantSizes.update({
        where: { id: parseInt(req.params.id) },
        data: req.body.size
    });

    res.status(201).json({ size });
});

// Create
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const size = await prisma.variantSizes.create({
        data: {
            ...req.body.size,
            styleVariantId: parseInt(req.params.variantId)
        }
    });

    res.status(201).json({ size: size });
});

// Delete
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await prisma.variantSizes.delete({
            where: { id: parseInt(req.params.id) }
        });
        res.status(200).json({ message: "success" });
    } catch(err: any) {
        res.status(404).json({ message: "Størrelsen blev ikke slettet" });
    }
});

module.exports = router;
