import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import { Style } from '../entity/Style';
const router = express.Router();

// Index
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const styles = await Style.find();
    res.status(200).json({ styles: styles });
});

// Show
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const style = await Style.findOneBy({ id: parseInt(req.params.id) })
    if (!style) {
        res.status(404).json({ message: "Not found", style: null });
    } else {
        res.status(200).json({ message: "success", style });
    }
});

// Create
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const style = await Style.create(req.body.style).save();
        res.status(201).json({ message: 'success', style });
    } catch(e: any) {
        res.status(400).json({ message: e.message });
    }
    
});

//update
router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    const style = await await Style.findOneBy({ id: parseInt(req.params.id) });
    if(style === null) {
        return res.status(404).json({ message: "Not found" });
    }
    style.name = req.body.style.name;
    style.description = req.body.style.description;
    style.price = req.body.style.price;
    try {
        style.save();
        res.status(201).json({ style });
    }catch(e: any) {
        res.status(400).json({ message: e.message });
    }
});

// Delete
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    Style.delete({ id: parseInt(req.params.id) });
    res.status(204).json({ message: "success" });
});

module.exports = router;
