var tilestrata = require('tilestrata');
var disk = require('tilestrata-disk');
var mapnik = require('tilestrata-mapnik');
var express = require('express');

var strata = tilestrata();
var router = express.Router();

//layer名称不能为空
strata.layer('map')
  .route('tile.png')    //route方法中不能使用正则表达式
  .use(disk.cache({dir: '/home/osm/osmproject/nodemapnik/tileserver/tilecache/style_dark/'}))    //设置瓦片缓存在当前目录的tilecache之目录中
  .use(mapnik({
    pathname: '/home/osm/osmproject/osm-carto/style_dark.xml'
  }));

router.use(tilestrata.middleware({
  server: strata
}));

module.exports = router;
