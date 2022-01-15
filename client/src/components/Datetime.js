import React from "react";
import styled from "styled-components";

const datetime = styled.div`
  width: 100%;
  color: red;
`;


const Datetime = () => {

    var showdate = new Date();
    // var displaytodaysdate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
    var dt = showdate.toDateString();
    var displaytime = showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds();

    return (
        <datetime>
            <div>
                {/* <input type="text" value={displaytodaysdate} readOnly="true" /> */}
                {dt} - {displaytime}
            </div>
        </datetime>
    );
};

export default Datetime;