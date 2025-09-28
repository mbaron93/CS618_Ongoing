// eslint-disable-next-line no-unused-vars
import mongoose, { mongo } from 'mongoose';

export function initDB() {
    const DATABASE_URL = process.env.DATABASE_URL
    mongoose.connection.on('open', () => {
        console.log('Connected to MongoDB: ', DATABASE_URL)
    })

    const connection = mongoose.connect(DATABASE_URL)
    return connection
}