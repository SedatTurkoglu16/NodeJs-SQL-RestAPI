import { getConnection, sql } from "../database/connection"
import queries from "../database/queries";

export const getPersons = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllPersons);
        console.log(result);
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const createNewPerson = async (req, res) => {

    const { lastName, firstName, address, city } = req.body;

    if (lastName == null || firstName == null || address == null || city == null) {
        return res.status(400).json({msg: 'Bad Request. Please fill all fields.'});
    }

    try {
        const pool = await getConnection();

        const result = await pool.request()
        .input("lastName", sql.VarChar, lastName)
        .input("firstName", sql.VarChar, firstName)
        .input("address", sql.VarChar, address)
        .input("city", sql.VarChar, city)
        .query(queries.addNewPerson);

        console.log(result);

        res.json({ lastName, firstName, address, city })  

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getPersonById = async (req, res) => {
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("PersonId", id)
        .query(queries.getPersonById);
    
    res.send(result.recordset);
}

export const deletePerson = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("PersonId", id)
        .query(queries.deletePerson);
    
    res.send(result);
}

export const updatePersonById = async (req, res) => {

    const { lastName, firstName, address, city } = req.body;
    const { id } = req.params;

    if (lastName == null || firstName == null || address == null || city == null) {
        return res.status(400).json({msg: 'Bad Request. Please fill all fields.'});
    }

    try {
        const pool = await getConnection();

        const result = await pool.request()
        .input("lastName", sql.VarChar, lastName)
        .input("firstName", sql.VarChar, firstName)
        .input("address", sql.VarChar, address)
        .input("city", sql.VarChar, city)
        .input("PersonId", id)
        .query(queries.updatePersonById);

        console.log(result);

        res.json({ lastName, firstName, address, city })  

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}