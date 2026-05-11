const express = require('express');
const router = express.Router();
const {
    getAllTodos,
    getOneTodo,
    createTodo,
    updateTodo,
    deleteTodo
} = require("../controller/todoController");

router.get("/all", getAllTodos);
router.get("/get-one/:id", getOneTodo);
router.post("/create", createTodo);
router.patch("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);


module.exports = router;