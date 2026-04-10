# @zacharyjia/tdt-cesium-plugin
> Cesium 天地图地形和地名插件，提取自天地图官方插件

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
### 地名
```javascript
const viewer = new Cesium.Viewer('container');
new TdtPlug.GeoWTFS(viewer, {
        subdomains: ['0','1','2','3','4','5','6','7'],
        url: 'https://t{s}.tianditu.gov.cn/mapservice/GetTiles?lxys={z},{x},{y}&tk=你的token',
        icoUrl: 'https://t{s}.tianditu.gov.cn/mapservice/GetIcon?id={id}&tk=你的token',
        metadata:{
            boundBox: {
                minX: -180,
                minY: -90,
                maxX: 180,
                maxY: 90
            },
            minLevel: 1,
            maxLevel: 20
        },
        autoCollide: true, //是否开启避让
        collisionPadding: [5, 10, 8, 5], //开启避让时，标注碰撞增加内边距，上、右、下、左
        serverFirstStyle: true, //服务端样式优先
    })
```

## 发布

仓库已配置 GitHub Actions，在推送 tag 时自动构建并发布到 NPM。tag 需要和 `package.json` 里的版本一致，例如 `v1.0.1` 或 `1.0.1`。

发布方式使用 NPM Trusted Publishing，不再依赖 `NPM_TOKEN`。需要先在 npm 包设置里配置 trusted publisher：

1. `Organization or user`: `ZacharyJia`
2. `Repository`: `tdt-cesium-plugin`
3. `Workflow filename`: `publish.yml`

```bash
npm version patch
git push origin main --follow-tags
```

配置完成后，GitHub Actions 会通过 OIDC 直接执行 `npm publish`。如果仓库和包都是公开的，npm 会自动生成 provenance，不需要额外传 `--provenance`。
