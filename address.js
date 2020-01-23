/* 
1. Create a variable that acts as a container for the values you want to insert the information in 
2. Create a function that gets the values you want
3. Append those values to the dom through the container you build (this is where HTML comes in)
4. Use an addEventListener so that an event (click) happens and calls upon the function to 
actually capture the user

*/



//create a container that holds the values of class addressList from html 
const addressContainer = document.querySelector("#addressList")
//create a variable captureUserInfo which gets the values of full name and address
const captureUserInfo = () => {
    const enteredName = document.getElementById("fullName").value
    const enteredAddress = document.getElementById("address").value
    //append the following HTML to the DOM of the value of addressContainer (article AddressList from HTML)
    addressContainer.innerHTML += `
    <section>
        <p>Name: ${enteredName}</p>
        <p>Address: ${enteredAddress}</p>
    </section>
    `
    enteredName.value = "";
    enteredAddress.value = ""
}
//call upon the ID saveEntry in html and when it is clicked perform the function captureUserInfo
document.getElementById("saveEntry").addEventListener("click", captureUserInfo)

const favoriteThingContainer = document.querySelector("#myFavoriteThing")
const captureThing = () => {
    const enteredThing = document.getElementById("favoriteThing").value
    const enteredLocation = document.getElementById("placeOfThing").value
    
    favoriteThingContainer.innerHTML += `
    <section>
        <p>I can purchase ${enteredThing} at ${enteredLocation}</p>
    </section>
    `

    
}
document.getElementById("saveThing").addEventListener("click", captureThing)