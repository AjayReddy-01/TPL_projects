sap.ui.define(
    [
        'sap/fe/core/PageController'
    ],
    function(PageController) {
        'use strict';

        return PageController.extend('slpnamespace.slpapp.ext.main.Main', {
            /**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf slpnamespace.slpapp.ext.main.Main
             */
             onInit: function () {
                // debugger

                // this.getView().getContent()[0].getContent()[1].getColumns()[0].getTemplate().getItems()[1].setVisible(false);
            
             },

            /**
             * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
             * (NOT before the first rendering! onInit() is used for that one!).
             * @memberOf slpnamespace.slpapp.ext.main.Main
             */
            //  onBeforeRendering: function() {
            //
            //  },

            /**
             * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
             * This hook is the same one that SAPUI5 controls get after being rendered.
             * @memberOf slpnamespace.slpapp.ext.main.Main
             */
            //  onAfterRendering: function() {
            //
            //  },

            /**
             * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
             * @memberOf slpnamespace.slpapp.ext.main.Main
             */
            //  onExit: function() {
            //
            //  }
            // collapse: function (oEvent) {
            //     debugger
            //     var tablehide = oEvent.getSource().getParent().getParent().getParent().getParent().getColumns()[0].getTemplate().getItems()[1];
            //     if (tablehide.getVisible()==true) {
            //         tablehide.setVisible(false);
                    
            //     }
            //     else
            //     {
            //         tablehide.setVisible(true);
            //     }

            
            // }
            onTableRowSelect: function (oEvent) {
                console.log("ola");
                var selectedRow = oEvent.getParameter("tasks");
            },
            onRowShiftAction: function (oEvent) {
                var oSource = oEvent.getSource(),
                    oRow = oSource.getParent();
                if (oSource.getSrc() === "sap-icon://expand") {
                    oSource.setSrc("sap-icon://collapse");
                    oRow.getCells()[5].setVisible(true);
                } else {
                    oSource.setSrc("sap-icon://expand");
                    oRow.getCells()[5].setVisible(false);
                }
            }
        });
    }
);
