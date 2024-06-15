// Question # 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.

function fetchGreeting(){
    setTimeout(()=>{
        console.log("2nd day of Eid mubarak")
    },2000)
    console.log("1st day of eid -ul-adha mubarak")
}
fetchGreeting();

