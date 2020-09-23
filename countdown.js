
function get_date(){

    var input_title=document.getElementById('get_title').value;
    var input_date = document.getElementById('get_date').value; 
    
    var today_date = new Date().getTime();
    var date_to_compare = new Date(input_date).getTime();
    var gmtlocal_timeoffset=new Date().getTimezoneOffset(); 

    var time_left = (date_to_compare-today_date)+(gmtlocal_timeoffset*60*1000);

    var seconds_left=Math.floor(time_left/1000);
    var day= add_zero(Math.floor(seconds_left/86400));
    var hour = add_zero(Math.floor((seconds_left%86400)/3600));
    var minute =add_zero(Math.floor(((seconds_left%86400)%3600)/60)) ;
    var second =add_zero(Math.floor(((seconds_left%86400)%3600)%60)) ;

    function add_zero(i){
       if(i<10){
           i='0'+i;
          }
             return i;
            }
    
    document.getElementById('heading').innerHTML=input_title + " "+ 'countdown';
    document.getElementById('days').innerHTML=day;
    document.getElementById('hours').innerHTML=hour;
    document.getElementById('minutes').innerHTML=minute;
    document.getElementById('seconds').innerHTML=second;


    var ti=setTimeout(get_date,500);


}

