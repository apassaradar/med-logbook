import { useState, useEffect } from "react";



function Clock() {
  var showdate = new Date();
  // var displaytodaysdate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
  var dt = showdate.toDateString();
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return <span className="datetime">{dt} -- {date.toLocaleTimeString()}</span>;
}
export default Clock;
