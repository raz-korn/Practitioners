/*global QUnit*/

sap.ui.define([
	"ns/practirioners/controller/BusinessPartners.controller"
], function (Controller) {
	"use strict";

	QUnit.module("BusinessPartners Controller");

	QUnit.test("I should test the BusinessPartners controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
