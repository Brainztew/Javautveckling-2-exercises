
    console.log("HEJ FRÅN JS!");
    let randomUserInfo = document.getElementById("randomUserInfo");
    let randomUserBtn = document.getElementById("randomUserBtn");

    randomUserBtn.addEventListener("click", () => {
        console.log("klick på knapp");
        getRandomUserInfo();
    })

    function getRandomUserInfo() {
        fetch("https://randomuser.me/api/")
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];

                console.log(user);

                // Create elements to display user information
                let gender = document.createElement("p");
                gender.innerText = "gender: " + user.gender

                let name = document.createElement("p");
                name.innerText = "Firstname: " + user.name.first +" Lastname: " + user.name.last 

                let email = document.createElement("p");
                email.innerText = "Email: " + user.email 

                let phone = document.createElement("p");
                phone.innerText = "Phone number: " + user.phone

                let location = document.createElement("p");
                location.innerText = "Country: " + user.location.country 

                let dob = document.createElement("p");
                dob.innerText = `Date of Birth: ${new Date(user.dob.date).toLocaleDateString()}, Age: ${user.dob.age}`;

                let picture = document.createElement("picture");
                
                let sourceLarge = document.createElement("source");
                sourceLarge.setAttribute("srcset", user.picture.large);
                let img = document.createElement("img");
                img.setAttribute("src", user.picture.large);
                img.setAttribute("alt", "User Image");
                
                picture.appendChild(sourceLarge);
                picture.appendChild(img);

                randomUserInfo.innerHTML = '';
                randomUserInfo.appendChild(gender);
                randomUserInfo.appendChild(name);
                randomUserInfo.appendChild(email);
                randomUserInfo.appendChild(phone);
                randomUserInfo.appendChild(location);
                randomUserInfo.appendChild(dob);
                randomUserInfo.appendChild(picture);
            })
    }

    getRandomUserInfo();