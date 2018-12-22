var tilestrata = require('tilestrata');
var disk = require('tilestrata-disk');
var mapnik = require('tilestrata-mapnik');
var express = require('express');

var strata = tilestrata();
var router = express.Router();

//layer名称不能为空
strata.layer('map')
  .route('tile.png')    //route方法中不能使用正则表达式
  .use(disk.cache({dir: '/home/tilecache/style_dark_transparent/'}))    //设置瓦片缓存在当前目录的tilecache之目录中
  .use(mapnik({
    pathname: '/home/openstreetmap-carto/style_dark_transparent.xml'
  }));

router.use(tilestrata.middleware({
  server: strata
}));

module.exports = router;
