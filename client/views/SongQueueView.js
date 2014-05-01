// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    //ADDED
    this.render();
    console.log("SongQueueView - ini");
    //END
  },

  render: function() {
    //ADDED
    this.$el.html('<th>Song Queue</th>');

    this.collection.each(function(song){
      this.$el.append(new SongQueueEntryView({model: song}).render());
    }, this);

    // this.$el.append('SongQueueView').each();
    console.log("SongQueueView - Render");
    //END
    //
    return this.$el;
  }

});
