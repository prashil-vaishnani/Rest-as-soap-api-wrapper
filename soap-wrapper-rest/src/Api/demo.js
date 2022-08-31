import React, { useEffect } from "react";
var parseString = require("xml2js").parseString;

const Demo = () => {
  useEffect(() => {
    const fetchdata = async () => {
      await fetch(
        "https://gist.githubusercontent.com/Pavneet-Sing/d0f3324f2cd3244a6ac8ffc5e8550102/raw/8ebc801b3e4d4987590958978ae58d3f931193a3/XMLResponse.xml"
      )
        .then((userData) => {
          if (userData.ok) {
            console.log(userData);
            return userData.text();
          }
          throw new Error("Something went wrong");
        })
        .then((textResponse) => {
          console.log(textResponse);
          parseString(textResponse, function (err, result) {
            console.log(result.person.fname[0]);
          });
        })
        .catch((error) => {
          alert(error);
        });
    };
    fetchdata();
  });

  return <div>as dvbc rfhgf</div>;
};
export default Demo;
