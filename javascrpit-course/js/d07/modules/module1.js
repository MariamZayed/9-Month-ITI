
export let number=1;
console.log("module1",number);

let projectName="ITI";

export {projectName}

import {number as number2} from "./module2.js"
console.log("number -> module2",number2);

