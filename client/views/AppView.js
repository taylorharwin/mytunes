// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});

    //ADDED
    console.log("AppView - Ini");
    this.songQueueView = new SongQueueView({collection:this.model.get('songQueue')})
    //END

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.get('songQueue').on('add', function(model){
      this.songQueueView.render();
    }, this),

    this.model.get('songQueue').on('remove', function(model){
      this.songQueueView.render();
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,

      //ADDED
      this.songQueueView.$el,
      console.log("AppView - Render")
      //END

    ]);
  }

});
