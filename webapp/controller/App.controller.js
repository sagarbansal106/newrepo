sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("vp.UploadImages.controller.App", {
		onInit: function () {

		},
		handleUploadPress: function(oEvent) {
			var oFileUploader = this.getView().byId("fileUploader");
			console.log("hello");
			// Combine the URL with the filename....
			oFileUploader.setUploadUrl("SaveImage.xsjs?filename=" + oFileUploader.getValue());
			console.log(filename);
			oFileUploader.upload();
		}
	});
});