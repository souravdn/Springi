const cityName = document.getElementById("cityName");
const city_name_display = document.getElementById("city_name_display");
const submitBtn = document.getElementById("submitBtn");
const temp_status=document.getElementById("temp_status");
const temp=document.getElementById("temp");


// const getInfo = async (event) =>{
    async function getInfo(event) {

    event.preventDefault();
    let city_val = cityName.value;


    if (city_val === "") {
        city_name_display.innerText = 'Please write the name before search';
    }
    else {
        try {
 
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_val}&appid=74e49b7956db2c13d0b170e6ede6e046`;
            const response = await fetch(url);
            const data= await response.json();
            const arrData=[data];
            // console.log(arrData[0]);

            var tempC=arrData[0].main.temp;
            tempC=Math.round(tempC-273);
            temp.innerText=tempC;
            // temp_status.innerText=arrData[0].weather[0].main;
            city_name_display.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;

            //condition to check sunny or cloudy
            const tempMood=arrData[0].weather[0].main;

            if(tempMood==="Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='colour:#eccc68 ;'> </i>"
            }
           else if(tempMood==="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='colour:#f1f2f6 ;'> </i>"
            }
           else if(tempMood==="Rain"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='colour:#a4b0be ;'> </i>"
            }
            else{
                temp_status.innerHTML="<i class='fas fa-sun' style='colour:#f1f2f6 ;'> </i>"
            }
        }
        catch {

            city_name_display.innerText = 'Please Enter The City Name Properly.';
        }
    }


}
submitBtn.addEventListener('click', getInfo);



//js for date and time**********************************************************************************
let curDate = document.getElementById('day');

        const tempStatus = "clouds";

       //function for day
       const getCurrentDay = () => {
           
           var weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            
            let currentTime = new Date();//realtime fatching constructor
            let day=weekday[currentTime.getDay()];
            return day;
        };
        
        
        //function for date/Month/year
        const getCurrentTime=()=>{
            var month=[
                "Jan",
                "Fab",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ]
            let now = new Date();//realtime fatching constructor
            var month_no=now.getMonth();
            var date=now.getDate();
            var year=now.getFullYear();
            var hour=now.getHours();
            var min=now.getMinutes();
            var mil=now.getMilliseconds();

            var period="AM";

            if(hour>11 ){
                period="PM";
            }
            if(hour>12){
                hour=hour-12;
            }
            if(min<10){
                min='0'+min;
            }
            if(hour<10){
                hour='0'+hour;
            }
               //console.log("Date:"+date+"/"+month[month_no]+"/"+year+" TIME= "+hour+":"+min+":"+period);

               return `${date}-${month[month_no]}-${year}  | ${hour}:${min} ${period}`;


        };

        //Printing to display
     curDate.innerHTML=getCurrentDay()+"  |  "+getCurrentTime();





