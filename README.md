# @zacharyjia/tdt-cesium-plugin
> Cesium 天地图地形插件，提取自天地图官方插件

## 安装

```bash
npm install @zacharyjia/tdt-cesium-plugin
```

## 使用

### 地形
```javascript
const viewer = new Cesium.Viewer('container');

viewer.terrainProvider = new TdtPlug.GeoTerrainProvider({
    url: 'https://t{s}.tianditu.gov.cn/mapservice/swdx?T=elv_c&x={x}&y={y}&l={z}&tk=你的token',
    subdomains: ['0','1','2','3','4','5','6','7'],
});
```
