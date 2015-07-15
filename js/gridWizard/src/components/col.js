(function(w) {
  gridWizardComponents.Collunm = Ractive.extend({
      //isolated : true,
      template : '<div id="{{node.NodeId}}" class="sortable col-md-{{Config.WidthMd}}"><div class="col-control control"></div><div class="content-wrapper">{{#node.Nodes}}{{ >node }}{{/node.Nodes}}</div></div>',
      onrender : function()
      {
        var element = document.getElementById(this.data.node.NodeId),
            selector = ".sortable-content",
            _this = this;

        /*Sortable.create(element.getElementsByClassName('content-wrapper')[0], {
          animation: 150,
          //draggable: selector,
          handle: ".content-control",
          group: 'content',
          onStart: function(evt)
          {
            console.log('start');
            console.log(evt);
          },
          onSort: function (evt){
            console.log('sort');
          },
          onEnd : function(evt)
          {
            console.log('end');
            //reorderSync(evt, _this.data.node.Nodes.slice());
            //_this.set('node', '');
          },
          onUpdate : function(evt)
          {
            console.log('update');
          }
        }); // That's all.*/
        
      }
    });
})(window);