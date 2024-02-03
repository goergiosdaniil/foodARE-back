import { Router } from "express";
import { PrismaClient } from "@prisma/client";


const router = Router();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'SUPER SECRET';

// USER CRUD

//Upload new Photo
router.post('/',async (req, res)=>{
    const {image, description} = req.body;
// @ts-ignore
    const user = req.user;

    try{
        const result = await prisma.photo.create({
            data: {
                image,
                description,
                userId: user.id,
            },
        });
        res.json(result);
    } catch(e){
        res.status(400).json({error: "Error don`t know why"});
    }
    
    
});

// List photos
router.get('/',async (req, res)=> {
    const allPhotos = await prisma.photo.findMany({
        select:{
            id:true,
            image: true,
            description:true,
            capturedAt:true,
            locatedAt:true,
            userId:true,
        },
    });
    res.json(allPhotos);
});

//Get one photo
router.get('/:id',async (req, res)=> {
    const {id} = req.params;
    const user = await prisma.photo.findUnique({ where: {id: Number(id)}})
    if (!user){
        res.status(404).json({error: "Photo not found"});
    }
    else {res.json(user);}

});

//Update one Photo 
router.put('/:id',async (req, res)=> {
    const {id} = req.params;
    const {image,description} = req.body;
    try{
        const result = await prisma.photo.update({
            where: {id: Number(id)},
            data:{description,image}
        })
        res.json(result);
    } catch(e){
        res.status(400).json({error: "Failed to update"});
    }
});

//Delete one Photo
router.delete('/:id',async (req, res)=> {
    const {id} = req.params;
    try{
        const result = await prisma.photo.delete({
            where: {id: Number(id)}
        })
        res.sendStatus(200);
    } catch(e){
        res.status(400).json({error: "Failed to delete"});

    }

});

export default router;