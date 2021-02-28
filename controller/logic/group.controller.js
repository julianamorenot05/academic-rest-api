/** Dto */
const groupDto = require("../../model/dto/group.dto"); 
const config = require("config"); 

exports.createGroup = (req,res, next) => {
    let group = {
        course_id: req.body.course_id, 
        period: req.body.period_id, 
        teacher: req.body.teacher_id, 
        number: req.body.numer
    }; 
    groupDto.create(group, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
}; 


exports.updateGroup = (req, res, next) => {
    let group = {
        course_id: req.body.course_id, 
        period: req.body.period_id, 
        teacher: req.body.teacher_id, 
        number: req.body.numer
    }; 
    groupDto.update({_id: req.body.id}, group, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );  
    });
}; 

exports.getAll = (req, res, next) => {
    
    groupDto.getAll({}, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        ); 
    });
}; 

exports.deleteGroup = () => {
    groupDto.delete({_id: req.body.id}, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json(); 
    });
}; 

/* Previo a responder al cliente se debe guardar nuevamente pero en el usuario */