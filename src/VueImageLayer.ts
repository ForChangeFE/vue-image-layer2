export default {
  name: 'vue-image-layer',
  props: {
    layers: {
      type: Array,
      require: true
    }
  },
  render(this: any, h: Function) {
    const layers = <string[]>this.$props.layers;
    if (layers.length <= 0) {
      throw new Error('图层数必须大于 0 ');
    }
    let backgroundStyle = '';
    for (const item of layers) {
      backgroundStyle += `url(${item}),`;
    }
    backgroundStyle = backgroundStyle.substring(0, backgroundStyle.length - 1);
    console.log(backgroundStyle);
    return h(
      'div',
      {
        style: {
          background: backgroundStyle,
          'background-position': 'center top',
          'background-size': '100% auto',
          'background-repeat': 'no-repeat'
        }
      },
      [
        h('img', {
          attrs: {
            src: layers[0]
          },
          style: {
            width: '100%',
            visibility: 'hidden'
          }
        })
      ]
    );
  },
  install(Vue: any) {
    Vue.component(this.name, this);
  }
};
