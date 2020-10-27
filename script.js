console.log('Welcome to the Work Day Scheduler by Jay Idrees')

// Add today's Day and date to the Jumbotron

var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

var d = new Date();
var day = weekday[d.getDay()];
console.log(day)

// Micromanaging display of date
var date_raw = new Date();
var dd = date_raw.getDate(); //yields day
var MM = date_raw.getMonth(); //yields month
var yyyy = date_raw.getFullYear(); //yields year
var date_today=(MM+1)+". "+dd+". "+yyyy;
var day_date='Welcome, Today is '+day+', '+date_today;

const h2_todays_date=$("<h2 id='p_todays_date'>"+day_date+" </h2> <br> <br>")
h2_todays_date.attr("class", "cover-heading text-dark font-italic font-weight-bold  ")
console.log(h2_todays_date)
   
$("#jumbotron").append(h2_todays_date);

// Inserting a "plan as you go statement under Today's date in jumbotron- the text area is a custom class created by me"
const statement=$("<h3> Plan as you go ! </h3>")
statement.attr("class", "cover-heading text-warning font-weight-bold textarea ")
$("#jumbotron").append(statement);
console.log(statement)

//================================================================
//Decide colors based on hr blocks, Presnt, past and future colorscheme
//================================================================

function match_color_bytime (){
// Obtain present hr

const presnt_hr=moment().hr



} //br-close match_color_bytime function
