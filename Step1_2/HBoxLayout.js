Ext.ns('App.HBoxLayoutWindow');

App.HBoxLayoutWindow.createHBoxLayoutWindow = function () {

    var formPanel = new Ext.form.FormPanel({
        layout: 'form',
        frame: true,
        autoHeight: true,
        height: 100,
        autoScroll: true,
        items: new Ext.Container({
            height: 40,
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'end',
            },
            items: [{
                xtype: 'textfield',
                value: 'Trash',
                width: 150,
                fieldLabel: 'Fignia',
            },{
                xtype: 'button',
                text: 'Search',
                width: 50,
            }]
        })

    });


    var win = new Ext.Window({
        title: 'HBox form',
        layout: 'fit',
        modal: false,
        frame: true,
        width: 500,
        height: 300,
        autoHeight: false,
        autoScroll: true,
        items: [formPanel
        , {
            xtype: 'panel',
            title: "News",
            layout: 'accordion',
            defaults: {
                bodyStyle: 'padding:15px'
            },
            layoutConfig: {
                titleCollapse: false,
                animate: true,
            },
            items: [{
                title: "News of 30/03/2020",
                html: 'America has 145 000 people with coronavirus'
            }, {
                title: "News of 31/03/2020",
                html: 'America has 185 000 people with coronavirus'
            }],
        }],

    });
    return win;
};