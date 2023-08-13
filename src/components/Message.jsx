import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  // Create a new Date object using the milliseconds value
 const timeMilli = Math.floor(message.currentTimeMilli);
 const date = new Date(timeMilli);
 const today = new Date();
// Extract the date and time components from the Date object
 var year = date.getFullYear();
//  year = year % 100;
 var month = date.getMonth() + 1; // Month is zero-based, so add 1
 if(month<10) month = '0' + month
 var day = date.getDate();  if(day<10) day = '0'+day
 var hours = date.getHours(); if(hours<'10')hours='0'+hours
 var minutes = date.getMinutes();if(minutes<'10') minutes='0'+minutes
//  const seconds = date.getSeconds();

const formattedTime = `${hours}:${minutes}`;

var today_month = today.getMonth() + 1; if(today_month<10) today_month='0'+today_month;
var today_day =today.getDate(); if(today_day<'10') today_day = '0' + today_day;
let formattedDate;
if (
  year === (today.getFullYear())&&
  month ===today_month &&
  day === today_day
) {
  // If the date is the same as today, display only the time
  // formattedDate = &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  formattedDate =""+ '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';
} else {
  // If the date is different from today, display both the date and time
  formattedDate = `${day}/${month}/${year}`;
}
// formattedDateTime = `${formattedTime}`;
console.log(formattedDate); console.log("mm")
  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        {/* <span>just now</span> */}
        {<span>{formattedTime}</span>}
        {<span>{formattedDate}</span>}
        {/* <span>{% if formattedDate %}{{ formattedDate}}{% else %}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{% endif %}</span> */}
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};


export default Message;
