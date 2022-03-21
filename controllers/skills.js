const Skill = require('../models/skill');


module.exports = {
    index,
    show,
    create,
    newSkill,
    deleteSkill
};



function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
};

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    });
};

function create(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
  }

  function newSkill(req, res) {
    res.render('skills/new');
  }

  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }
