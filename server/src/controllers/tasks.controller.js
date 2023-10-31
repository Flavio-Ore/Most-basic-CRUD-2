import { pool } from '../db.js'

export const patchTask = async (req, res) => {
  try {
    const { id } = req.params
    const { done } = req.body
    console.log('{id, done} :>> ', { id, done })
    await pool.query('UPDATE tasks SET done=? WHERE id=?', [done, id])

    return res.sendStatus(204)
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Something goes wrong patching the task'
    })
  }
}

export const getTasks = async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM tasks ORDER BY createdAt DESC'
    )

    res.json(rows)
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Something goes wrong retrieving the tasks'
    })
  }
}
export const getTask = async (req, res) => {
  try {
    const { id } = req.params
    const [task] = await pool.query('SELECT * FROM tasks WHERE id=?', [id])
    console.log('task :>> ', task)

    if (task.length === 0)
      return res.status(404).json({ message: `Task not found` })

    res.json(task[0])
  } catch (error) {
    res.status(500).json({
      message: error.message || `Something goes wrong retrieving the task`
    })
  }
}
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body

    const result = await pool.query(
      'INSERT INTO tasks(title, description) VALUES (?, ?)',
      [title, description]
    )

    res.json({
      id: result.insertId,
      title,
      description,
      message: 'Task created successfully'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Something goes wrong creating a task'
    })
  }
}
export const updateTask = async (req, res) => {
  try {
    const newTask = req.body
    const { id } = req.params

    await pool.query('UPDATE tasks SET ? WHERE id=?', [newTask, id])

    return res.sendStatus(204)
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Something goes wrong updating a task'
    })
  }
}
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    const [result] = await pool.query('DELETE FROM tasks WHERE id=?', [id])
    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Task not found' })

    return res.sendStatus(204)
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Something goes wrong deleting a task'
    })
  }
}
