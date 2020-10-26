window.addEventListener('load', function(){
    console.log('Loaded.');
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response){
        response.json().then(function(json) {
            console.log(json);
                let container = document.getElementById('container');

                for (let i = 0; i < 7; i++){
                    container.innerHTML += `
                        <div class = "astronaut">
                            <div class = "bio">
                                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                                    <ul>
                                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                                        <li>Active: ${json[i].active}</li>
                                        <li>Skills: ${json[i].skills}</li>
                                    </ul>
                            </div>
                            <img class="avatar" src = ${json[i].picture}></img>
                        </div>`;
                };

            });
        });
});