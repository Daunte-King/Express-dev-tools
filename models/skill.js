const skills = [
    {id: 125, skill: 'Singing'},
    {id: 127, skill: 'Skating'},
    {id:139, skill: 'photography'}
];

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
