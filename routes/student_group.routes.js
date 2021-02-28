
const controller = require("../controller/logic/student_group.controller"); 

module.exports = (app) => {
    
    app.get("/student_group", (req, res, next) => {
        controller.getAll(req, res, next); 
    }); 

    app.get("/student_group/bycode/:code", (req, res, next) => {
        controller.getByCode(req, res, next); 
    }); 

    app.post("/student_group", (req, res, next) => {
        controller.createStudent_group(req, res, next); 
    }); 

    app.put("/student_group", (req, res, next) => {
        controller.updateStudent_group(req, res, next); 
    }); 

    app.delete("/student_group", (req, res, next) => {
        controller.deleteStudent_group(req, res, next); 
    }); 
}; 