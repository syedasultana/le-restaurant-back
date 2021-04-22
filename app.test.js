
const app = require("./app"); // Link to your server file
const request = require("supertest");
const bodyParser = require("body-parser");

//const db = require('./queries');

describe("GET /items", function () {
    it("responds with application/json", function (done) {
      request(app)
        .get("/items")
        .set("Accept", "application/json")
        .expect("Content-Type", "application/json; charset=utf-8", done);
    });
  
    it("responds with status code 200", function (done) {
      request(app).get("/items").expect(200, done);
    });
});

describe("GET /users", function () {
  it("responds with application/json", function (done) {
    request(app)
      .get("/users")
      .set("Accept", "application/json")
      .expect("Content-Type", "application/json; charset=utf-8", done);
  });

  it("responds with status code 200", function (done) {
    request(app).get("/users").expect(200, done);
  });

});

describe("GET /bookings", function () {
  it("responds with application/json", function (done) {
    request(app)
      .get("/bookings")
      .set("Accept", "application/json")
      .expect("Content-Type", "application/json; charset=utf-8", done);
  });

  it("responds with status code 200", function (done) {
    request(app).get("/bookings").expect(200, done);
  });

});

describe("POST /booking", async () => {
  let bookingObj = {
    user_id: '1',
    date: '12.04.2021',
    time: '13:00',
    seating_no: 4
  };  
  const { body } = await
  request(app)
    .post("/booking")
    .send(bookingObj)
    .expect(body).toEqual({
      status: "success",
      stateInfo: {
        user_id: '1',
        date: '12.04.2021',
        time: '13:00',
        seating_no: 4
      }
    });

});


