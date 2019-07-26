document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)


function myName() {
    document.getElementById("name").innerHTML = "I like to read, write, watch the Flash and sing!";
}

function mySchool() {
    document.getElementById("school").innerHTML = "People who put dog poop in a bag and then leave it on other people's lawns, when people touch my hair, when people insult people I care about, etc.";
}

function myCareer() {
    document.getElementById("career").innerHTML = "Favorite Ice Cream Flavor: Butter Pecan, Favorite Color: Undecided, Favorite Class at School: Orchestra, Favorite Youtube Channel: Two Set Violin";
}

function myHobbies() {
    document.getElementById("hobbies").innerHTML = "I am a second degree black belt in Tae Kwon Do, I can play 4 instruments, I have never broken a bone,  and I'm pretty clumsy!";
}