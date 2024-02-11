import React from "react";
export default function getInvolved() {
  return (
    <div className="getInvolved">
      <div className="left">
        <h1>Making a contribution for a noble cause</h1>
        <p>
          "By supporting menstrual health initiatives, you're investing in the
          well-being of women and girls today, empowering them to lead healthier
          and more fulfilling lives tomorrow."
        </p>
        <img src="./nithya_pic5-removebg-preview.png"></img>
      </div>

      <div className="right">
        <h1 className="right-title">Become a Volunteer</h1>
            <form>
              <input type="text" placeholder="Name"></input>
              <input type="text" placeholder="Ph number"></input>
              <input type="text" placeholder="Email"></input>
              <textarea name="descrip" cols="25" rows="4" placeholder="How would you like to help?"></textarea>
              <br/>
              <button className="btn">Submit</button>
            </form>
      </div>
    </div>
  );
}
