# vue-image-layer

# Install
yarn add vue-image-layer

# Usage
```js
import VueImageLayer from 'vue-image-layer'
import Vue from 'vue'
Vue.use(VueImageLayer)

<vue-image-layer :layers=['image1','image2'] ></vue-image-layer>
//注意图层顺序，是由数组的顺序决定。下标越小，越靠近图层的顶层
```