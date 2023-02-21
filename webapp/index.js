/*
// Now instead of the view, we create a component container,
// which instatiates the view
sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
  "use strict";

  XMLView.create({
    viewName: "sap.ui.demo.walkthrough.view.App",
  }).then(function (oView) {
    oView.placeAt("content");
  });
});
*/

sap.ui.define(
  ["sap/ui/core/ComponentContainer"],
  function (ComponentContainer) {
    "user strict";

    new ComponentContainer({
      name: "sap.ui.demo.walkthrough",
      settings: {
        id: "walkthrough",
      },
      async: true,
    }).placeAt("content");
  }
);
