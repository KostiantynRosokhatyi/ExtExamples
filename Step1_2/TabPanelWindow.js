Ext.ns('App.window4');

App.window4.createTabPanel = function() {

    var tabPanel = new Ext.TabPanel({
        region: 'center',
        margins: '5 5 5 0',
        activeTab: 1,
        defaults: { autoScroll: true},

        items: [{
            title: 'Base information',
        },{
            title: 'Listener',
        }, {
            title: 'Transports',
        }, {
            title: 'Books'
        }]
    });

    var nav = new Ext.Panel({
       title: 'Information bar',
       region: 'west',
       split: true,
       width: 150,
       collapsible: true,
       margins: '5 0 5 5',
       cmargins: '5 5 5 5'
    });

    var win = new Ext.Window({
        title: 'TabPanel and Ext.Panel',
        closable: true,
        width: 800,
        height: 400,
        border: true,
        plain: true,
        layout: 'border',
        items: [tabPanel, nav]
    });
    return win;
};