Ext.ns('App');
Ext.onReady(function() {
    var newApp = Ext.create({
        xtype: 'window',
        items: [
            {
                xtype: 'button',
                text: 'Open Window0',
                handler: function () {
                    var handlerButton = App.window.createWindow0();
                    handlerButton.show();
                }
            }, {
                xtype: 'button',
                text: 'Open Window1',
                handler: function () {
                    var handlerButton1 = App.window1.createWindow1();
                    handlerButton1.show();
                    }
            },{
                xtype: 'button',
                text: 'RadioandCheckBoxBuyTheGameForm',
                handler: function () {
                    var handlerButton1 = App.window2.createWindow2();
                    handlerButton1.show();
                }
            }, {
                xtype: 'button',
                text: 'CreateFitLayout',
                handler: function(){
                    var handlerButtonFitLayout = App.window3.createWindow3FitLayout();
                    handlerButtonFitLayout.show();
                }
            }, {
                xtype: 'button',
                text: 'TabPanel',
                handler: function (){
                    var createTabPanelButton = App.window4.createTabPanel();
                    createTabPanelButton.show();
                }
            }, {
                xtype: 'button',
                text: 'CreateAccordingLayout',
                handler: function(){
                    var createAccordingLayoutButton = App.window5.createAccordingLayout();
                    createAccordingLayoutButton.show();
                }

            }
        ]
    });
    newApp.show();
});