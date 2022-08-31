import React, { useEffect } from "react";
//const axios = require("axios");
//var parseString = require("xml2js").parseString;

const Add = () => {
  useEffect(() => {
    const fetchdata = async () => {
      await fetch("http://localhost:4000/", {
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          if (response) {
            console.log(response);
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((textResponse) => {
          console.log(textResponse.AddResult);
          //   parseString(textResponse, function (err, result) {
          //     console.log(result.person.fname[0]);
          //   });
        })
        .catch((error) => {
          alert(error);
        });
    };
    fetchdata();
  }, []);

  return <div>as dvbc rfhgf</div>;
};
export default Add;
