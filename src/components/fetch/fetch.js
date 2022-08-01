

// function ApiFetch(){

// fetch('https://www.breakingbadapi.com/api/').then(response => response.json())
// .then(data =>  console.log(data))   
// .catch(err =>  console.log('errror'));
// }

// export default ApiFetch ;

// function ApiFetch(){

// const Getdata= async () => {
// const response = await fetch('https://www.breakingbadapi.com/api/');
// const data = await response.json()
// console.log(data);
// }
// Getdata();
// }
// export default ApiFetch;

/// another way to get the dataa in the console 

// function ApiFetch(){

//     const Getdata= async () => {
//      await fetch('https://www.breakingbadapi.com/api/').then(Response => Response.json()).then(data => console.log(data)).catch(err => console.log("eroor"));
//     }
//     Getdata();
//     }
//     export default ApiFetch;

// to Get name of one of the chrachter and show in front end 

// import { useEffect } from "react";

// function ApiFetch() {

//     useEffect(() => {
//         const Getdata = async () => {
//             const response = await fetch('https://www.breakingbadapi.com/api/characters');
//             const data = await response.json()
//             console.log(data);

//             document.querySelector("#card h1").innerText = data[0].name;
//             document.querySelector("#card h2").innerText = data[0].nickname
//             document.querySelector("#card img").src = data[0].img;
//             document.querySelector("#card h4").innerText = data[0].birthday
//             document.querySelector("#ActorName").innerHTML = ` <select>
// ${data.map(actor => `<option> ${actor.name} </option>`)}
// </select>
//     `
//         }
        
//         Getdata();
        
//     }, [])

//     return (
//         <div>
//             <div id="card">
//                 <h1></h1>
//                 <h2></h2>
//                 <h4></h4>
//                 <img width={"50px"} src="" alt="imagee" />
//             </div>
//             <div id="ActorName">
//             </div>
//         </div>
//     )

// }
// export default ApiFetch;


import { useEffect } from "react";

function ApiFetch() {


    useEffect(() => {
        const Getdata = async () => {
            const response = await fetch('https://www.breakingbadapi.com/api/characters');
            const data = await response.json()
            console.log(data)
         

            document.querySelector("#card h1").innerText = data[0].name;
            document.querySelector("#card h2").innerText = data[0].nickname
            document.querySelector("#card img").src = data[0].img;
            document.querySelector("#card h4").innerText = data[0].birthday
            document.querySelector("#ActorName").innerHTML = ` <select>
${data.map(actor => `<option> ${actor.name} </option>`)}
</select>
    `
        }
        
        Getdata();
        
    }, [])

    return (
        <div>
            <div id="card">
                <h1></h1>
                <h2></h2>
                <h4></h4>
                <img width={"50px"} src="" alt="imagee" />
            </div>
            <div id="ActorName">
            </div>
        </div>
    )

}
export default ApiFetch;

