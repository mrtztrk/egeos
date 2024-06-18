const main = document.getElementById("main")
let AIRPORTS;

const getAirports = async () => {

    try {
        const response = await fetch('https://cyclic-demo.vercel.app/')
        const data = await response.json()
        AIRPORTS = data
        console.log(AIRPORTS); // Log the airports array to the console

        main.innerHTML = ''
        AIRPORTS.forEach((airport) => {
            const { title, metar, taf } = airport
            const airportEl = document.createElement('div')
            airportEl.classList.add('airport')
            airportEl.innerHTML = `
            <div class="airport-name">
            <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-airplane-fill" viewBox="0 0 16 16">
            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849"/>
            </svg>
            ${title}</h3>
            </div>
            <div class="mini-container" >
            <h3 class="mini-title">METAR</h3>
            <h3 class="mini-info">${metar}</h3>
            </div>
            <div class="mini-container" >
            <h3 class="mini-title">TAF</h3>
            <h3 class="mini-info">${taf}</h3>
            </div>
            `
            main.appendChild(airportEl)
        })
        // Use the 'data' array as needed in your client-side code
    } catch (error) {
        error => console.error('Error fetching airports:', error)
    }
}
getAirports()

// window.addEventListener("load", () => {
//     const loader = document.querySelector(".loader");

//     loader.classList.add("loader--hidden");

//     loader.addEventListener("transitionend", () => {
//         document.body.removeChild(loader);
//     });
// });
