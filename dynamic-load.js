var script = document.createElement("script");
script.onload = function () {
  //   do stuff with the script
  console.log("geoplugin_request()", geoplugin_request());
  console.log("geoplugin_region()", geoplugin_region());
};
script.src = "http://www.geoplugin.net/javascript.gp";

document.head.appendChild(script);
