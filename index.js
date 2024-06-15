"use strict";
// Question # 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.
function fetchGreeting() {
    setTimeout(() => {
        console.log("2nd day of Eid mubarak");
    }, 2000);
    console.log("1st day of eid -ul-adha mubarak");
}
fetchGreeting();
// Question # 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
function simulateTask() {
    setTimeout(() => {
        console.log("task completed");
    }, 1000);
    console.log("task started");
}
;
simulateTask();
