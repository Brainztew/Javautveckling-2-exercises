let ateamList = document.getElementById("ateamList");

function printUsers() {
    fetch("ateam.json")
    .then(res => res.json())
    .then(data => {
        data.sort((a, b) => (a.age > b.age) ? 1 : -1);
        data.map(hero => {
            console.log("hero:", hero);

            let li = document.createElement("li");
            li.innerText = "namn: " + hero.name + " Email: " + hero.email + " Titel: " + hero.title;
            ateamList.appendChild(li);
        });
    });
}

fetch("ateam.json")
.then(function(response) {
    return response.json();
})
.then(function(json) {

console.log("Användare:", json);

json.sort((a, b) => (a.age > b.age) ? 1 : -1);
console.log("Användare", json);
});

printUsers();