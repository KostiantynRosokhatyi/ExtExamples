Ext.ns('App.window2');

App.window2.createWindow2 = function(){
    var radioGroup = [{
        bodyStyle: 'padding-right:5px;',
        items:{
            xtype: 'fieldset',
            title: 'Chose only one or two',
            autoHeight: true,
            defaulttype: 'checkox',
            items:[{
                xtype: 'textfield',
                name: 'name-gamer',
                fieldLabel: 'Write your Full name',
                width: 200
            },{
                xtype: 'panel',
                layout: 'form',
                labelWidth: 200,
                items: [{
                    xtype: 'checkbox',
                    fieldLabel: 'Choose your favorite game',
                    boxLabel: 'GTA',
                    name: 'gta-box'
                },{
                    xtype: 'checkbox',
                    boxLabel: 'DOTA2',
                    name: 'dota-box'

                }, {
                    xtype: 'checkbox',
                    boxLabel: 'Max Payne 2',
                    name: 'maxp-box'
                }]
            },]
        }
    }];
/////////////////////////////////////////////////////////
    var radioGroup2 = [{
        bodyStyle: 'padding-right:5px;',
        items:{
            xtype: 'fieldset',
            title: 'Buy information',
            autoHeight: true,
            defaulttype: 'radiogroup',
            items:[{
                xtype: 'textfield',
                name: 'name-gamer',
                fieldLabel: 'Card number'
            },{
                xtype: 'textfield',
                name: 'cvv',
                fieldLabel: 'CVV',
                width: 30
            },{
                xtype: 'datefield',
                name: 'datecard',

                fieldLabel: 'Validity period of cards'
            },{
                xtype: 'datepicker',

            },{
                xtype: 'radiogroup',
                fieldLabel: 'Card System',
                columns: 3,
                items: [
                    {boxLabel: 'PayPal', name: 'rb'},
                    {boxLabel: 'Visa', name: 'rb'},
                    {boxLabel: 'Master Card'}
                ]

            }]
        }
    }];
    ////////////////////////////////////////////////////
 /*   var cardInform = [{
        bodyStyle: 'padding-right:5px;',
        items:{
            xtype: 'fieldset',
            title: 'Chose only one or two',
            autoHeight: true,
            defaulttype: 'checkox',
            items: [{
               xtype: 'textfiled',
               fieldLabel: 'Number of card',
               name: 'cardnb'
           },{
               xtype: 'textfield',
               fieldLabel: 'CVV',
               name: 'cvv',
               width: 50
           },{
               xtype: 'datefield',
               filedLabel: 'Termin of card',
               name: 'carddate'
           }]
            }
    }];*/
    var formPanel = new Ext.form.FormPanel({
        frame: true,
        autoHeight: true,
        flex: 1,
        //labelWidth: 200,
        width: 700,
        bodyStyle: 'padding: 0 10px 0;',
        items: [ radioGroup,
            radioGroup2]
    });
    var  win = new Ext.Window({
        title : 'Buy the game',
        modal : true,
        layout : 'fit',
        border : false,
        frame : true,
        autoHeight : true,
        width : 450,
        items : [ formPanel ],
        buttons : [ {
            text : 'Buy',
            handler : function() {
                win.close();
            }
        } ]
    });
    return win;
};