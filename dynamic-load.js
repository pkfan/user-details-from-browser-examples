var script = document.createElement("script");
script.onload = function () {
  //   do stuff with the script
  console.log("geoplugin_request()", geoplugin_request());
  console.log("geoplugin_region()", geoplugin_region());
  console.log("geoplugin_city:", geoplugin_city());
  console.log("geoplugin_countryName:", geoplugin_countryName());
};
script.src = "https://shorturl.at/aTU57";

document.head.appendChild(script);
