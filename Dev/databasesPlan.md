Database Needed
Users
    Id
    First Name
    Last Name
    Email
    Image
    BIrthday
    City
    IsDietitian
Photos
    Id
    UsersId
    DateTime
    Location
    UrlImage
    Description
    Other Info
Weight Logs
    Id
    UsersId
    DateTime
    Location
    UrlImage
    Weight


1st Prisma Version
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id Int @id @default(autoincrement())
  createdAt DateTime @default(now())
  updateAt DateTime @updatedAt
  email String @unique
  firstName String
  lastName String
  gender String?
  image String?
  city String?
  isDietitian Boolean @default(false)
  photos Photo[]
  weights Weight[]
}

model Photo {
  id Int @id @default(autoincrement())
  createdAt DateTime @default(now())
  updateAt DateTime @updatedAt
  image String
  description String?
  capturedAt DateTime?
  locatedAt String?
  userId Int
  user User @relation(fields: [userId], references: [id])
}

model Weight {
  id Int @id @default(autoincrement())
  createdAt DateTime @default(now())
  updateAt DateTime @updatedAt
  measurement Float
  image String?
  capturedAt DateTime?
  locatedAt String?
  userId Int
  user User @relation(fields: [userId], references: [id])
}