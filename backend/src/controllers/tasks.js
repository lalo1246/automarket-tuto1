import { connect } from "../databases";


export const getTasks = async (req, res) => {
    console.log("holña")
    const conection =  await connect();
    const [rows] = await conection.query("SELECT * FROM tasks");
    console.log(rows);
    res.json(rows);
} 

export const getTask = async (req, res) => {
    const conection = await connect();
    const [rows] = await conection.query("SELECT * FROM tasks WHERE id = ?", [req.params.id])
    console.log(rows[0]);
    res.json(rows[0])
}

export const getTaskCount = async (req, res) => {

    const conection =  await connect();
    const [rows] = await conection.query("SELECT COUNT(*) FROM tasks")
    console.log(rows);
    res.json(rows[0]["COUNT(*)"])
}

export const saveTask = async (req, res) => {
    const conection =  await connect();
    const [results] = await conection.query('INSERT INTO tasks (title, description) VALUES (?,?)',[
        req.body.title, 
        req.body.description
    ])
    res.json({
        id: results.insertId,
        ...req.body
    })
}

export const deleteTask = async (req, res) => {
    const connection = await connect();
    await connection.query("DELETE FROM tasks WHERE id =?",[
        req.params.id,
    ])
    
    res.sendStatus(204);
}

export const updateTask = async (req, res) => {
    const connection = await connect();
    await connection.query("UPDATE tasks SET ? WHERE id = ?", [
        req.body,
        req.params.id
    ])
    
    res.sendStatus(204);
}