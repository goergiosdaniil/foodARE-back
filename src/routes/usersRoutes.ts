import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();
// USER CRUD

//Create user
router.post('/',async (req, res)=>{
    const {email, firstName, lastName, gender, image,city } = req.body;
    try{
        const result = await prisma.user.create({
            data: {
                email,
                firstName,
                lastName,
                gender,
                image,
                city,
            },
        });
        res.json(result);
    } catch(e){
        res.status(400).json({error: "mail should be unique"});
    }
    
    
});

// List users
router.get('/',async (req, res)=> {
    const allUser = await prisma.user.findMany({
         select:{
            id : true ,
            firstName : true ,
            lastName:true,
            image: true,
            email: true,
            gender: true,
            isDietitian: true,
        },
    });
    res.json(allUser);
});

//Get one user
router.get('/:id',async (req, res)=> {
    const {id} = req.params;
    const user = await prisma.user.findUnique({ where: {id: Number(id)},include:{weights: true,photos: true},})
    if (!user){
        res.status(404).json({error: "User not found"});
    }
    res.json(user);
});

//Update one user
router.put('/:id',async (req, res)=> {
    const {id} = req.params;
    const {email, firstName, lastName, gender, image,city} = req.body;
    try{
        const result = await prisma.user.update({
            where: {id: Number(id)},
            data:{email, firstName, lastName, gender, image,city}
        })
        res.json(result);
    } catch(e){
        res.status(400).json({error: "Failed to update"});
    }
});

//Delete one user
router.delete('/:id',async (req, res)=> {
    const {id} = req.params;
    try{
        const result = await prisma.user.delete({
            where: {id: Number(id)}
        })
        res.sendStatus(200);
    } catch(e){
        res.status(400).json({error: "Failed to delete"});

    }

});

export default router;