import mongoose from "mongoose";
import request from "supertest";
import app from "../src/app.js";
import Adoption from "../src/models/adoption.model.js";
import User from "../src/models/user.model.js";

before(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

after(async () => {
  await mongoose.disconnect();
});

beforeEach(async () => {
  await Adoption.deleteMany({});
  await User.deleteMany({});
});

describe("Adoption routes", () => {
  it("GET /api/adoption → 200 y array vacío", async () => {
    const res = await request(app).get("/api/adoption").expect(200);
    expect(res.body).to.be.an("array").that.is.empty;
  });

  it("POST /api/adoption → 201 y objeto creado", async () => {
    // crear usuario adoptante
    const userRes = await request(app)
      .post("/api/users")
      .send({ name: "Tester", email: "tester@mail.com", password: "123" })
      .expect(201);

    const payload = { petName: "Firulais", adopter: userRes.body._id };

    const res = await request(app)
      .post("/api/adoption")
      .send(payload)
      .expect(201);

    expect(res.body).to.include({ petName: "Firulais", status: "pending" });
    expect(res.body).to.have.property("_id");
  });
});
