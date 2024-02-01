npm init
npm install express
npm install typescript ts-node nodemon @types/node @types/express --save-dev

npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name "Init"
npx prisma studio 