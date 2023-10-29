import { Router } from 'express'

import { pool } from '../db.js  '

const router = Router()

router.get('/ping', async (req, res) => {
  const conn = await pool.getConnection()
  try {
    const rows = await conn.query('SELECT 1 + 1 AS solution')
    console.log('rows :>> ', rows)
    res.json(rows[0])
    res.json({ message: 'Pong' })
  } catch (error) {
    console.log('error router :>> ', error)
    res.status(500).json({ message: error.message })
  } finally {
    conn.release()
  }
})

export default router
