define(['require', 'lodash', 'crafty', './player', './block'],
 function(require, _, Crafty, player, block) {
  return {
    width: 41,
    height: 79,
    createWorld: function(worldData) {
      Crafty.init(worldData.width, worldData.height);
      Crafty.background('black');
      player.createPlayer(_.extend({ w: this.width, h: this.height }, worldData.start));
      _(worldData.platforms).each(function(platform) {
        block.createBlock(platform);
      });

      return worldData;
    }
  };
});
