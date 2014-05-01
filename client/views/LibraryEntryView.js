// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %><button class="AddtoQueue">Add to queue</button></td>'),

  events: {
    'click': function() {
      this.model.play();
      // this.model.render();

      //ADDED
      this.model.enqueue();
      console.log("LibraryEntryView - Events");
      //END

    },

    // 'click .AddtoQueue': function(){
    //   this.model.enqueue();
    // }
  },

  render: function(){
    console.log("LibraryEntryView - Render");
    return this.$el.html(this.template(this.model.attributes));
  }

});
