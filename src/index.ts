import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    const pageContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Foodare - Page not ready</title>
        <style>
          body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #f5f5f5;
            font-family: Arial, sans-serif;
          }
          
          h1 {
            font-weight: bold;
            margin-bottom: 20px;
          }
          
          .footer {
            position: absolute;
            bottom: 10px;
            font-size: 12px;
            color: #555;
          }
  
          .button-container {
            display: flex;
            margin-top: 20px;
          }
  
          .button {
            margin: 0 10px;
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <h1>Foodare</h1>
        <h1>Page not ready</h1>
        <div class="button-container">
          <button class="button" onclick="window.location.href='/login'">Login</button>
          <button class="button" onclick="window.location.href='/register'">Register</button>
          <button class="button" onclick="window.location.href='/dashboard'">Dashboard</button>
          <button class="button" onclick="window.location.href='/admin'">Admin</button>
          <button class="button" onclick="window.location.href='/users'">Users</button>
        </div>
        <div class="footer">Created by Georgios</div>
      </body>
      </html>
    `;
  
    res.send(pageContent);
  });

app.get('/photoUpload',(req,res)=>{
    res.send("Photo upload Page");
})
app.get('/:page', (req, res) => {
    const requestedPage = req.params.page;
    const pageTitle = requestedPage.charAt(0).toUpperCase() + requestedPage.slice(1);
    
    const pageContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Foodare - ${pageTitle}</title>
        <style>
          body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #f5f5f5;
            font-family: Arial, sans-serif;
          }
          
          h1 {
            font-weight: bold;
            margin-bottom: 20px;
          }
          
          .footer {
            position: absolute;
            bottom: 10px;
            font-size: 12px;
            color: #555;
          }
  
          .button-container {
            display: flex;
            margin-top: 20px;
          }
  
          .button {
            margin: 0 10px;
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <h1>Foodare</h1>
        <h1>${pageTitle} - Page not ready</h1>
        <div class="button-container">
          <button class="button" onclick="window.location.href='/login'">Login</button>
          <button class="button" onclick="window.location.href='/register'">Register</button>
          <button class="button" onclick="window.location.href='/dashboard'">Dashboard</button>
          <button class="button" onclick="window.location.href='/admin'">Admin</button>
          <button class="button" onclick="window.location.href='/users'">Users</button>
        </div>
        <div class="footer">Created by Georgios</div>
      </body>
      </html>
    `;
  
    res.send(pageContent);
  });


app.listen(3000, ()=>{
    console.log('Server ready at localhost:3000')
});