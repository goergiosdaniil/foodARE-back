import { Router } from "express";
import { PrismaClient } from "@prisma/client";


const router = Router();
const prisma = new PrismaClient();

// Tweet CRUD

//Upload Weight
router.post('/',async (req, res)=>{
    const {measurement, image, userId} = req.body;
    try{
        const result = await prisma.weight.create({
            data: {
                measurement,
                image,
                userId:Number(userId),
            },
        });

        res.json(result);
    } catch(e){
        res.status(400).json({error: "UserID should exist"});
    }
    
    
});

//List Weight
router.get('/',async (req, res)=> {
    const allWeights = await prisma.weight.findMany({
        include : {
            user : {
                select:{
                    id : true,
                    firstName: true,
                    lastName: true,
                    email: true
                }
            },
        },
    });
    res.json(allWeights);
});

//Get one Weight
router.get('/:id',async (req, res)=> {
    const {id} = req.params;
    const tweet = await prisma.weight.findUnique({ where: {id: Number(id)}})
    if (!tweet){
        res.status(404).json({error: "Tweet not found"});
    }
    else {res.json(tweet);}
});

//Update one Weight
router.put('/:id',async (req, res)=> {
    const {id} = req.params;
    const {measurement,image} = req.body;
    try{
        const result = await prisma.weight.update({
            where: {id: Number(id)},
            data:{measurement,image}
        })
        res.json(result);
    } catch(e){
        res.status(400).json({error: "Failed to update"});
    }
});

//Delete one Weight
router.delete('/:id',async (req, res)=> {
    const {id} = req.params;
    try{
        const result = await prisma.weight.delete({
            where: {id: Number(id)}
        })
        res.sendStatus(200);
    } catch(e){
        res.status(400).json({error: "Failed to delete"});

    }

});

export default router;