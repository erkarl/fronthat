/*jshint node:true*/
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    name: "FrontHAT",
    short_name: "FrontHAT",
    description: "100% Remote Development & Design Jobs",
    start_url: "/",
    display: "standalone",
    background_color: "#EEE",
    theme_color: "#EEE",
    icons: [
      {
        src: "/assets/images/icons/touch-icon-128x128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/assets/images/icons/touch-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/assets/images/icons/touch-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        src: "/assets/images/icons/touch-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
        targets: ['apple']
      },
      {
        src: "/assets/images/icons/touch-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/images/icons/touch-icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/assets/images/icons/touch-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ]
  };
}
