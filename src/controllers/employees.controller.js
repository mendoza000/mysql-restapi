import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (e) {
    res.sedStatus(500);
  }
};

export const getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);

    if (rows.length < 1) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }

    res.json(rows);
  } catch (e) {
    res.sendStatus(500);
  }
};

export const createEmployee = async (req, res) => {
  try {
    const { name, salary } = req.body;

    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?, ?)",
      [name, salary]
    );

    res.json({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (e) {
    res.sendStatus(500);
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const [row] = await pool.query("DELETE FROM employee WHERE id = ?", [id]);

    if (row.affectedRows < 1) {
      return res.status(404).json({
        message: "Delete employee failed",
      });
    }
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(500);
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;

    const [row] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary  ) WHERE id = ?",
      [name, salary, parseInt(id)]
    );

    if (row.changedRows < 1) {
      return res.status(404).json({
        message: "Update employee failed",
      });
    }
    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
};
