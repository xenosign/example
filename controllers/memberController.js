const mongoClient = require("./mongoConnect");

const db = {
  getAllMember: async () => {
    const client = await mongoClient.connect();
    const user = client.db("kdt4").collection("user");

    const cursor = user.find({});
    const AllMember = await cursor.toArray();
    if (!AllMember) return false;
    return AllMember;
  },
};

module.exports = db;
