const takeExam=function()
{
    return new Promise((resolve,reject)=>{
        //code
        // resolve(" Success !");
        reject (" Fail !");
    })
}

const getFavCountries=function(userId){

    //conection userId
  return new Promise((resolve,reject)=>{
    resolve(["X","Y"]);
    // reject(" Can't get countries ")
  })
}

const getWeather=function(countries)
{
        return new Promise((resolve,reject)=>{
                    //API countries
                    // resolve("Wethear for countries "+countries);
                    reject("can't get weaher for "+countries );
        })
}









const runWeatherForCountries=async function(id){
        try{
            let resultCountries=await getFavCountries(id);
            let Wethear=await  getWeather(resultCountries);
            console.log(Wethear);
        }catch(error){
                console.log(error,"error");
        }
            
}











