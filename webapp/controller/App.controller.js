sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      /*
// onInit function removed from the controller. Now it's done at component level      
      onInit: function () {
        // set data model on the view
        let oData = {
          recipient: {
            name: "World",
          },
        };
        let oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
        // set i18n model on view
        let i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        });
        this.getView().setModel(i18nModel, "i18n");
      },
*/
      onShowHello: function () {
        // read msg from i18n model
        let oBundle = this.getView().getModel("i18n").getResourceBundle();
        let sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        let sMsg = oBundle.getText("helloMsg", [sRecipient]);
        // show message
        MessageToast.show(sMsg);
        //MessageToast.show("Hello World");
      },
    });
  }
);
