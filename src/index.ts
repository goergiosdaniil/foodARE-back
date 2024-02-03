import express from 'express';
import usersRoutes from './routes/usersRoutes';
import photosRoutes from './routes/photosRoutes';
import weightRoutes from './routes/weightRoutes';
import authRoutes from './routes/authRoutes';
const app = express();
app.use(express.json());
app.use('/user',usersRoutes);
app.use('/photos',photosRoutes);
app.use('/weight',weightRoutes);
app.use('/auth',authRoutes);

app.get('/', (req, res) => {
  const pageContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
  </head>
  <body>
    <h1>Home Page</h1>
    <button onclick="window.location.href='/user'">User</button>
    <button onclick="window.location.href='/photos'">Photos</button>
    <button onclick="window.location.href='/weight'">Weight</button>
  </body>
  </html>
`;

res.send(pageContent);
  });




app.listen(3000, ()=>{
    console.log('Server ready at localhost:3000')
});