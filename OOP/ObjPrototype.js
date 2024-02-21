

const myObj = {
    city: "Nairobi",
    greetings(){
        console.log(`Greetings from ${this.city}`);
    }
};

myObj.greetings();

console.log(myObj);