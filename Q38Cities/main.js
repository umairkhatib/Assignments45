"use strict";
//Assigment # 38
function describe_city(cityname, country = "Pakistan") {
    console.log(`${cityname} is in ${country}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Colombo", "Srilanka");
