// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    console.log("SongModel - play");
  },

  ///ADDED STUFF
  enqueue: function(){
    this.trigger('enqueue', this);
    console.log("SongModel - enqueue");
  },

  dequeue: function(){
    this.trigger('dequeue', this);
    console.log("SongModel - dequeue");
  }
  ///END OF ADD

});
