// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  //ADDED
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %><button class="Dequeue">Remove from Queue</button></td>'),

  events: {
    'click .Dequeue': function() {
      console.log("SongQueueViewEntry - events");
      this.model.dequeue();
    }
  },


  render: function(){
    console.log("SongQueueViewEntry - Render");
    return this.$el.html(this.template(this.model.attributes));
  }
  //END
});
