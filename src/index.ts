import express from 'express';
import usersRoutes from './routes/usersRoutes';
import photosRoutes from './routes/photosRoutes';
import weightRoutes from './routes/weightRoutes';
const app = express();
app.use(express.json());
app.use('/user',usersRoutes);
app.use('/photos',photosRoutes);
app.use('/weight',weightRoutes);


app.get('/', (req, res) => {
    res.send("pageContent");
  });




app.listen(3000, ()=>{
    console.log('Server ready at localhost:3000')
});