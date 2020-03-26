Ext.ns('App.window3');

App.window3.createWindow3FitLayout = function(){
    var fitLayout = new Ext.Panel ({
        title: 'Fit Layout',
        layout: 'fit',
        height: 200,
        width: 300,
    });

    var win = new Ext.Window({
        title: 'Fit Layout',
        closable: true,
        width: 800,
        height: 400,
        items: [fitLayout]
    });
    return win;
};
