const skills = [
    {id: 125, skill: 'Singing'},
    {id: 127, skill: 'Skating'},
    {id:139, skill: 'photography'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skills.push(skill);
  }

  function deleteOne(id) {
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }
