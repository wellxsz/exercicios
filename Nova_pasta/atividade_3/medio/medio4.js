let year = 2028
if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0) ) {
    console.log ('ano bissexto')
} else {
    console.log ('ano não bissexto')
}