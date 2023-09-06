document.getElementById("bored-bot").addEventListener("click", getIdea)

function getIdea() {
    fetch("https://www.boredapi.com/api/activity")
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            document.body.classList.add("fun")
            document.getElementById("idea").textContent = data.activity
            document.getElementById("title").textContent = "🦾 Happy Bot🦿"
        })
}


















/**
Challenge: 

When the button is clicked, call out to the Bored API
(URL: https://apis.scrimba.com/bored/api/activity)
and replace the h4 with the activity from the API

*/






























// document.getElementById("bored-bot").addEventListener("click", function() {
//     fetch("https://www.boredapi.com/api/activity")
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             document.body.classList.add("fun")
//             document.getElementById("idea").textContent = data.activity
//             document.getElementById("title").textContent = "🦾 HappyBot🦿"
//         })
// })