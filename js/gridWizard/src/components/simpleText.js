(function(w) {
  gridWizardComponents.SimpleText = Ractive.extend({
      //isolated : true,
      template : '<div id="{{node.NodeId}}"><div class="content-control control"></div>{{node.Content}}</div>'
    });
})(window);