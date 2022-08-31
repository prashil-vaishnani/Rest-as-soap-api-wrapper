import React from "react";
import soapRequest from "easy-soap-request";

function SoapToRest() {
  const url =
    "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL";
  const sampleHeaders = {
    "Content-Type": "text/xml",
    "Access-Control-Allow-Headers": "POST",
  };
  const xml = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <ListOfContinentsByName xmlns="http://www.oorsprong.org/websamples.countryinfo">
      </ListOfContinentsByName>
    </soap:Body>
  </soap:Envelope>
  
`;

  (async () => {
    const { response } = await soapRequest({
      url: url,
      headers: sampleHeaders,
      mode: "no-cors",
      xml: xml,
    });
    console.log(response.body);
  })();
  /*first tech */
  // useEffect(() => {
  //   fetch(
  //     "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso",
  //     {
  //       mode: "no-cors",
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "text/xml",
  //       },
  //     }
  //   )
  //     .then((res) => {
  //       console.log("sbajhd ", res);
  //       res.text();
  //     })
  //     .then((data) => {
  //       console.log("data ", data);
  //       var xml = new XMLParser().toString(data);
  //       console.log(xml);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  /* second tech */
  // var xmlhttp = new XMLHttpRequest();
  // xmlhttp.open(
  //   "POST",
  //   "http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL",
  //   true
  // );

  // // build SOAP request
  // var sr =
  //   '<?xml version="1.0" encoding="utf-8"?>' +
  //   "<soapenv:Envelope " +
  //   'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
  //   'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
  //   'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
  //   'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
  //   "<soapenv:Body>" +
  //   '<api:some_api_call soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">' +
  //   '<username xsi:type="xsd:string">login_username</username>' +
  //   '<password xsi:type="xsd:string">password</password>' +
  //   "</api:some_api_call>" +
  //   "</soapenv:Body>" +
  //   "</soapenv:Envelope>";

  // xmlhttp.onreadystatechange = function () {
  //   if (xmlhttp.readyState === 4) {
  //     if (xmlhttp.status === 200) {
  //       alert(xmlhttp.responseText);
  //       // alert('done. use firebug/console to see network response');
  //     }
  //   }
  // };
  // xmlhttp.setRequestHeader("Content-Type", "text/xml");
  // xmlhttp.send(sr);
  return <div>soapToRest</div>;
}
export default SoapToRest;
