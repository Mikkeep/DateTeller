let day;
let month;
let year;
let multiple;
let leap;
let combined;
let magicDay;
let separation;
let result;

const processDate = document.getElementById("processDate");
processDate.onclick = e => {
    document.getElementById("result").style.display="block";
    day = parseInt(document.getElementById("day").value, 10);
    month = parseInt(document.getElementById("month").value, 10);
    year = parseInt(centuryNum(document.getElementById("year").value), 10);
    multiple = multipleNum(document.getElementById("year").value);
    leap = checkLeap(document.getElementById("year").value);
    combined = Math.floor( ( multiple + year ) % 7 );
    if ( typeof(day) != "number" || typeof(month) != "number" || typeof(year) != "number" ) {
        document.getElementById("result").style.background="red";
        document.getElementById("result").innerText = "Only numbers allowed!";
    }
    else if ( day > 31 ) {
        document.getElementById("result").style.background="yellow";
        document.getElementById("result").innerText = "Maximum day of a month is 31!";
    }
    else if ( month > 12 ) {
        document.getElementById("result").style.background="yellow";
        document.getElementById("result").innerText = "Last month of the year is December!";
    }
    else if ( day < 1 || month < 1 ) {
        document.getElementById("result").style.background="red";
        document.getElementById("result").innerText = "No negative values!";
    }
    else {
//        month = parseInt(month, 10);
        switch ( month ) {
            case 1:
                if ( leap != 0 ) {
                    magicDay = 4
                }
                else {
                    magicDay = 3;
                }
              break;
            case 2:
                if ( leap != 0 ) {
                    magicDay = 29
                }
                else {
                    magicDay = 28;
                }
              break;
            case 3:
               magicDay = 14;
              break;
            case 4:
              magicDay = 4;
              break;
            case 5:
              magicDay = 9;
              break;
            case 6:
              magicDay = 6;
              break;
            case 7:
              magicDay = 11;
            case 8:
              magicDay = 8;
              break;
            case 9:
              magicDay = 5;
              break;
            case 10:
              magicDay = 10;
              break;
            case 11:
              magicDay = 7;
              break;
            case 12:
              magicDay = 12;
              break;
          }
          separation = day - magicDay;
          if ( separation == 0 ) {
              separation = 0;
          }
          if ( separation > 0 ) {
              separation = separation;
          }
          else {
              separation = separation * -1;
          }
          combined = combined + separation;
          result = Math.floor( combined % 7 );
          switch ( result ) {
            case 0:
              result = "Sunday";
              break;
            case 1:
              result = "Monday";
              break;
            case 2:
               result = "Tuesday";
              break;
            case 3:
              result = "Wednesday";
              break;
            case 4:
              result = "Thursday";
              break;
            case 5:
              result = "Friday";
              break;
            case 6:
              result = "Saturday";
          }
        document.getElementById("result").style.background="burlywood";
        document.getElementById("result").innerText = "The day is: " + result;
    }
};

const deleteButton = document.getElementById("deleteButton");
deleteButton.onclick = e => {
    document.getElementById("messagebox").style.display="none";
    document.getElementById("infoText").style.display="block";
};

const infoText = document.getElementById("infoText");
infoText.onclick = e => {
    document.getElementById("messagebox").style.display="block";
    document.getElementById("infoText").style.display="none";
};

const centuryNum = (thousands) => {
    let retval;
    retval = Math.floor((thousands - 2000) / 100);
    if ( retval < 0){
        retval = ( 4 + retval ) % 4 ;
        if ( retval == 1 ) {
            retval = 0;
        }
        if ( retval == 2 ) {
            retval = 5;
        }
        if ( retval == 3 ) {
            retval = 3;
        }
    }
    else if (retval > 4) {
        retval = ( 4 + retval ) % 4;
        if ( retval == 1 ) {
            retval = 0;
        }
        if ( retval == 2 ) {
            retval = 5;
        }
        if ( retval == 3 ) {
            retval = 3;
        }
    }
    else {
    if ( retval == 0 ) {
        retval = 4;
    }
    if ( retval == 1 ) {
        retval = 0;
    }
    if ( retval == 2 ) {
        retval = 5;
    }
    if ( retval == 3 ) {
        retval = 3;
    }
    if ( retval == 4 ) {
        retval = 2;
    }
    }
    return (
        retval
    )
}

const checkLeap = (leapYear) => {
    let isLeap;
    if ( (leapYear % 4) != 0 ) {
        isLeap = 0;
    }
    else {
        isLeap = 1;
    }
    return (
        isLeap
    )
}

const multipleNum = (multiple) => {
    let number;
    let addon;
    let leap;
    if ( multiple < 9 ) {
        multiple = multiple
    }
    else if ( multiple < 99 ) {
        multiple = multiple
    }
    else {
        multiple = multiple % 100
    }
    number = Math.floor( multiple / 12 );
    addon = multiple - ( number * 12 );
    if ( addon > 3 ) {
        leap = Math.floor(addon / 4);
    }
    else {
        leap = 0;
    }
    number = number + addon + leap;
    return (
        number
    )
}
