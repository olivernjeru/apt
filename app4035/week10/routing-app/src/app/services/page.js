// import PopulationData from "../PopulationData";

// export default function About() {
//     return (
//         <div>
//             <h1>This is the services page. We offer Data Services such as:</h1>
//             <PopulationData />
//         </div>
//     );
// }

"use client";

export default function Services() {
    function doSomethingOne(event) {
        console.log('This is function 1');
    }

    const doSomethingTwo = (e) => {
        console.log('This is function 2');
    }

    return (
        <div>
            <h1>This is the services page</h1>
            <p>This is teh services page content</p>
            <button onClick={doSomethingOne}>Button 1</button>
            <button onClick={doSomethingTwo}>Button 2</button>
        </div>
    );
}