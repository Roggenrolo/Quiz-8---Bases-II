const { MongoClient } = require("mongodb");

const connectDatabase = () => {
    const client = new MongoClient("mongodb://localhost:27017,localhost:27018");
    client.connect().then(() => {
    console.log(client.db("turismo").collection("atracciones").find());
    });
}

connectDatabase();
