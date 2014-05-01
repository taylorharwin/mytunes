// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    //ADDED
    this.render();
    //END
  },

  render: function() {
    //ADDED
    this.$el.children().detach();
    this.$el.html('<div>Song Queue</div>');
    //END
    //
    return this.$el;
  }

});
