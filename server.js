import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`✅  Server up on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌  DB connection failed", err);
    process.exit(1);
  }
})();
