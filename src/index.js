import Picker from './picker.vue';

var AdPicker = {
  install: function (Vue) {
    Vue.component(Picker.name, Picker);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(AdPicker);
}

export default AdPicker;
