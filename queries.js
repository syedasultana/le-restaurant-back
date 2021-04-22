const Pool = require('pg').Pool
const pool = new Pool({
  user: 'syedasultana',
  host: 'localhost',
  database: 'restaurant',
  port: 5432,
})

const getItems = async (request, response) => {
    await pool.query('SELECT * FROM items', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getUsers = async (request, response) => {
  await pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


//for Admin to to see table bookings
const getBookings = async (request, response) => {
  await pool.query('SELECT * FROM bookings', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const postBooking = async (request, response) => {
  console.log('QUERY'+ request.query.seating_no);
  const qdate = "'" + request.query.date + "'";
  const qtime = "'" + request.query.time + "'";
  await pool.query(`INSERT INTO bookings (user_id, date, time, seating_no) VALUES (${request.query.user_id}, ${qdate}, ${qtime}, ${request.query.seating_no});`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('booking created')
  })
}

const getBookingsById = async (request, response) => {
  const user_id = request.params.user_id
  console.log('userID:', user_id);
  await pool.query(`SELECT * FROM bookings WHERE user_id = ${user_id};`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}








module.exports = {
    getItems,
    getUsers,
    getBookings,
    postBooking,
    getBookingsById
}

