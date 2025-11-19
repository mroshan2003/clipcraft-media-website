const { MongoClient } = require("mongodb");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const body = JSON.parse(event.body);

  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("clipcraft");            // your DB name
    const collection = db.collection("contacts"); // collection

    await collection.insertOne({
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
      createdAt: new Date()
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Submitted Successfully" })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message })
    };

  } finally {
    await client.close();
  }
};
