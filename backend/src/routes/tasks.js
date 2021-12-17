import { Router } from "express";
import { getTasks, getTaskCount, getTask, saveTask, deleteTask, updateTask } from "../controllers/tasks";

const router = Router();

/**
 * @swagger
 * tags: 
 *  name:Tasks
 *  description: Tasks endpoint
 */
/**
 * @swagger
 *  /tasks:
 *   get:
 *      summary: Get all tasks 
 *      tags: [Tasks] 
 */
router.get('/tasks', getTasks)

/**
 * @swagger
 *  /tasks/count:
 *   get:
 *      summary: Get total tasks counter
 *      tags: [Tasks] 
 */

router.get('/tasks/count', getTaskCount)

/**
 * @swagger
 *  /tasks:
 *   get:
 *      summary: Get all tasks  by id
 *      tags: [Tasks] 
 */

router.get('/tasks/:id', getTask)

/**
 * @swagger
 *  /tasks:
 *   post:
 *      summary: save a new tasks 
 *      tags: [Tasks]  
 */

router.post('/tasks/', saveTask)

/**
 * @swagger
 *  /tasks:
 *   delete:
 *      summary: Delete a tasks by id 
 *      tags: [Tasks]  
 */

router.delete('/tasks/:id', deleteTask) 

/**
 * @swagger
 *  /tasks:
 *   put:
 *      summary: Update a tasks by id
 *      tags: [Tasks]   
 */

router.put('/tasks/:id', updateTask)

export default router