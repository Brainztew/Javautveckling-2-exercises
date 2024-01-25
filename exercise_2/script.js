console.log("HEJ!");
const heroList = document.getElementById("heroList");

fetch("teams.json")
.then(function(response) {
    return response.json();
})
.then(function(json) {

json.sort((a, b) => (a.teamName > b.teamName) ? 1 : -1);
console.log("Teams", json);
});

fetch("heroes.json")
.then(function(response) {
    return response.json();
})
.then(function(json) {

json.sort((a, b) => (a.heroName > b.heroName) ? 1 : -1);
console.log("Heroes", json);
});

async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}

async function pairHeroesWithTeams() {
    const teams = await fetchData('teams.json');
    const heroes = await fetchData('heroes.json');

    const teamHeroMap = new Map();

    teams.forEach(team => {
        const teamHeroes = heroes.filter(hero => hero.teamId === team.teamId);
        teamHeroes.sort((a, b) => a.heroName.localeCompare(b.heroName));
        teamHeroMap.set(team.teamName, teamHeroes);
    });

    console.log([...teamHeroMap]);
}
async function renderTeamsAndHeroes() {
    const teams = await fetchData('teams.json');
    const heroes = await fetchData('heroes.json');
    const teamsAndHeroesDiv = document.getElementById('teamsAndHeroes');
    const teamHeroMap = new Map();

    teams.forEach(team => {
        const teamHeroes = heroes.filter(hero => hero.teamId === team.teamId);
        teamHeroes.sort((a, b) => a.heroName.localeCompare(b.heroName));
        teamHeroMap.set(team.teamName, teamHeroes);
    });
    teamHeroMap.forEach((teamHeroes, teamName) => {
        const teamList = document.createElement('ul');
        teamList.id = "teamList";
        const teamNameItem = document.createElement('li');
        teamNameItem.classList.add('team-name');
        teamNameItem.innerText = `*${teamName}`;
        teamList.appendChild(teamNameItem);

        const heroList = document.createElement('ul');
        heroList.classList.add('hero-list');
        teamHeroes.forEach(hero => {
            const heroItem = document.createElement('li');
            heroItem.innerText = hero.heroName;
            heroList.appendChild(heroItem);
        });

        teamList.appendChild(heroList);
        teamsAndHeroesDiv.appendChild(teamList);
    });




}

pairHeroesWithTeams();
renderTeamsAndHeroes();