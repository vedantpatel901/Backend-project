function dateTimeHelper(Timestring1 ,  Timestring2){
  let date1 = new Date(Timestring1);
  let date2 = new Date(Timestring2);
  return date1.getTime() > date2.getTime();

}

module.exports = {dateTimeHelper};