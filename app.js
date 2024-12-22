
// document.querySelector('#btn').addEventListener("click", () => {
//     const name = document.querySelector("#name").value;
//     const email = document.querySelector("#email").value;
//     const password = document.querySelector("#password").value;
//     const date = document.querySelector("#date").value;
//     const message = document.querySelector("#message").value;

//     if (!name || !email || !password || !date || !message) {
//         alert("Please fill in all fields!");
//         return;
//     }

//     const data = {
//         name: name,
//         email: email,
//         password : password,
//         date : date,
//         message : message
//     };

//     const jsonStr = JSON.stringify(data, null, 2);

//     document.querySelector("#jsonOutput").textContent = jsonStr;

//     localStorage.setItem("formData", jsonStr);

//     alert("Data Saved");
// })

gsap.from("#h-right",{
    x:-700,
    duration:3,
    delay:0.5
})

var tl = gsap.timeline();
tl.from("h1",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from("h3",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0,
    stagger:0.4
})
tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    // delay:0.2
})
tl.from("label",{
    y:-10,
    duration:0.5,
    opacity:0,
    // delay:0.2,
    stagger:0.2
})
tl.from("input",{
    y:-10,
    duration:1,
    delay:0.1,
    opacity:0,
    stagger : 0.2
})
tl.from("textarea",{
    y:-10,
    duration:1,
    delay:0,
    opacity:0
})
tl.from("#btn",{
    y:40,
    duration:1,
    // delay:0.5,
    opacity:0
})

document.querySelector('#btn').addEventListener("click", () => {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const date = document.querySelector("#date").value;
    const message = document.querySelector("#message").value;

    if (!name || !email || !password || !date || !message) {
        alert("Please fill in all fields!");
        return;
    }

    const data = {
        name: name,
        email: email,
        password: password,
        date: date,
        message: message
    };

    const jsonStr = JSON.stringify(data, null, 2);
    
    document.querySelector("#jsonOutput").textContent = jsonStr;

    localStorage.setItem("formData", jsonStr);

    // Send data to -> server
    const response = fetch('/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    if (response) {
        alert("Data saved successfully!");
    } else {
        alert("Error saving data.");
    }
    
});
