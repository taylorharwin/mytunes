// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // ADDED
    this.on('add', function(){console.log('something was added from the Song Queue');}),
    this.on('remove', function(){console.log('something was removed from the Song Queue collection');});
    // ENDOFADD
  }

});
