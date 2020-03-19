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
            },
            {
                xtype: 'button',
                text: 'Open Window1',
                handler: function () {
                    var handlerButton1 = App.window1.createWindow1();
                    handlerButton1.show();
                    }
            }
        ]
    });
    newApp.show();
});