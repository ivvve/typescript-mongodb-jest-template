import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

let mongoMemoryServer: MongoMemoryServer;

beforeAll(async () => {
    mongoMemoryServer = new MongoMemoryServer();
    console.log('Mongo Memory Server initilized');

    await mongoMemoryServer.getConnectionString()
        .then(mongoUri => {
            process.env.MONGODB_URI = mongoUri;
            mongoose.connect(mongoUri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                poolSize: 10
            })
            .then(() => {
                console.log('Mongoose initilized');
    
                Object.values(mongoose.connection.collections).map(collection => {
                    collection.remove(() => {});
                });
            });
        });    
});

afterAll(async done => {
    await mongoose.disconnect();
    console.log('Mongoose finalized');

    await mongoMemoryServer.stop();
    console.log('Mongo Memory Server finalized');
    
    return done();
});