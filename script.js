let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();

request.onload=function(){
    let res = JSON.parse(request.response);
    console.log(res)
    console.log("a. Get all the countries from asia continents using 'Filter' ")
    let asiaContinentsOnly = res.filter(ele => ele.continents == 'Asia')
    console.log(asiaContinentsOnly.map(ele=>ele.name.common))

    console.log("b. Get all the countries with a population less tha 2 lakhs using 'Filter' ")
    let populationLessThan2Lakhs = res.filter(ele => ele.population < 200000)
    console.log(populationLessThan2Lakhs.map(ele=>ele.name.common))

    console.log("c. Print the following details name , capital flag using forEach function ")
    let details = populationLessThan2Lakhs.forEach((ele) => {
        if(ele.capital==undefined){
          ele.capital= "Nil"
        }
        console.log("Name : ",ele.name.common,", Capital : ", ele.capital[0],", Flag : ", ele.flag)
    })

    console.log("d. Print total population of countries using reduce function ")
    let totalPopulation = res.reduce((acc,curr)=> acc+curr.population,0)
    console.log(totalPopulation)
 
    console.log("e. Print countries that use US dollar ");

    let usDollarCountries = res.filter(country => {
      return country.currencies && country.currencies.USD;
    });
    
    usDollarCountries.forEach(country => {
      console.log(country.name.common);
    });

}
