// Import the MongoMemoryServer class from the mongodb-memory-server package
// This allows us to create an in-memory MongoDB instance for testing
import { MongoMemoryServer } from 'mongodb-memory-server'
//adding comments honestlyu
// Export an async function that sets up a global test environment
// This is typically used as a Jest globalSetup function
export default async function globalSetup() {   
    // Create a new in-memory MongoDB server instance
    // This spins up a real MongoDB server that runs entirely in memory
    const instance = await MongoMemoryServer.create({
        binary: {      
             // Specify which version of MongoDB to use for the in-memory server
             // Using version 6.0.4 ensures consistent behavior across test environments
             version: '8.0.10',    
         },  
     })

// Store the MongoDB instance in a global variable so it can be accessed
// from other parts of the test suite (like globalTeardown)
global.__MONGOINSTANCE = instance

// Set the DATABASE_URL environment variable to the connection string
// of our in-memory MongoDB instance, allowing the application to connect to it
process.env.DATABASE_URL = instance.getUri()
}