 // Destructuring with annotations


const foreCast = {
    date: new Date(),
    weather: 'sunny',
}

// const logWeather = (foreCast: {date: Date, weather: string}) : void => {
//     console.log(foreCast.date);
//     console.log(foreCast.weather);
// } 


// destructuring

const logWeather2 = ({date,weather}:{date: Date,weather: string}): void => {
    console.log(date,weather);
}