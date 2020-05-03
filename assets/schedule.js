//moment api save these in local storage
//have a save local storage local moment 

//function render time, 


// is done

$(document).ready(function () {

    function addDate() {

        const todayDate = (moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
        document.getElementById("todayDate").innerHTML = todayDate;
        setInterval(addDate, 1000);
        
    };


    $(".saveBtn").on("click", function(){

        const timeId = $(this).siblings(".type-text").attr("data-time");
        const userInput = $(this).siblings(".type-text").val();

        localStorage.setItem(timeId, userInput);

    });

    function addRetrieve(){
        const descriptions = $(".type-text");

        $(descriptions).each(function (index, element) {

            const timeId = $(element).attr("data-time");

            const descriptions = localStorage.getItem(timeId);

            $(element).text(descriptions);


        })
    };

    function addHourIndicate() {

        const nowTime = moment().hours();
        const descriptions = $(".type-text");

        
        $(descriptions).each(function (index, element){
    
            const currentTime = parseInt($(element).attr("data-time"));
    
    
            if (nowTime === currentTime) {
                
                $(element).addClass("present");
            }
        
                else if (nowTime < currentTime) {
                   
                    $(element).addClass("future");
                }
        
                    else{
                       
                        $(element).addClass("past");              
                    }
        })
    
    
    };

    addDate();
    addHourIndicate();
    addRetrieve();
});










