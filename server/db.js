const mongoose = require("mongoose");
const mongoURI = "mongodb://root:sJkyBXKT3zmY06TZ@174.16.238.231:27017";

const connectToMongo = async (retryCount) => {
  const MAX_RETRIES = 3;
  const count = retryCount ?? 0;
  try {
    await mongoose.connect(mongoURI, { dbName: "2326arce" });
    console.info("Connected to Mongo Successfully");

    return;
  } catch (error) {
    console.error(error);

    const nextRetryCount = count + 1;

    if (nextRetryCount >= MAX_RETRIES) {
      throw new Error("Unable to connect to Mongo!");
    }

    console.info(`Retrying, retry count: ${nextRetryCount}`);

    return await connectToMongo(nextRetryCount);
  }
};

module.exports = connectToMongo;

