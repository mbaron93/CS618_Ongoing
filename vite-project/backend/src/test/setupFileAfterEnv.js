import mongoose from 'mongoose'
 import { beforeAll, afterAll } from '@jest/globals' 
 import { initDB } from '../db/initdb.js' 
 beforeAll(async () => { 
    await initDB()
 }) 
 afterAll(async () => { 
    await mongoose.disconnect() })