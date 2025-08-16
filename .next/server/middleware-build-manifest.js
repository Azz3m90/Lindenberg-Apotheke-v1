self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "pages": {
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/interessantes": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/interessantes.js"
    ],
    "/interessantes/apothekenzeitungen": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/interessantes/apothekenzeitungen.js"
    ],
    "/interessantes/e-nummern": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/interessantes/e-nummern.js"
    ],
    "/interessantes/ilmenau": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/interessantes/ilmenau.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];