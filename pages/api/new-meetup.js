// url: /api/new-meetup
import { MongoClient, ObjectId } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://ya:qwe123zx@cluster0.kxotm.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    if (data.type === "update") {
      console.log(data);
      const result = await meetupsCollection.updateOne(
        { _id: ObjectId(data.id) },
        { $set: { isFav: data.isFav } }
      );
      console.log(result);
      res
        .status(201)
        .json({ message: `${data.isFav ? "Added to" : "Removed from"} favs.` });
    } else if (data.type === "new") {
      const result = await meetupsCollection.insertOne(data);
      console.log(result);
      res.status(201).json({ message: "Meetup inserted." });
    } else {
      const result = await (
        await meetupsCollection.find().toArray()
      ).map(meetup => ({ ...meetup, _id: meetup._id.toString() }));

      console.log(result);
      res.status(201).json({ meetups: result });
    }
    client.close();
  }
}

export default handler;
