import { Router } from 'express'

import { pool } from '../db.js'

const router = Router()

router.get('/ping', async (req, res) => {
  try {
    const rows = await pool.query('SELECT 1 + 1 AS solution')
    console.log('rows :>> ', rows)

    res.json({ rows: rows[0], message: 'Pong' })
  } catch (error) {
    console.log('error router :>> ', error)
    res.status(500).json({ message: error.message })
  }
})

export default router
