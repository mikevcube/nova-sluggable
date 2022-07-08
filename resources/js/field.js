import IndexField from './components/Slug/IndexField.vue';
import DetailField from './components/Slug/DetailField.vue';
import FormField from './components/Slug/FormField.vue';

import SluggableTextIndexField from './components/SluggableText/IndexField.vue';
import SluggableTextDetailField from './components/SluggableText/DetailField.vue';
import SluggableTextFormField from './components/SluggableText/FormField.vue';

Nova.booting((app, store) => {
    app.component('index-nova-sluggable-slug-field', IndexField)
    app.component('detail-nova-sluggable-slug-field', DetailField)
    app.component('form-nova-sluggable-slug-field', FormField)

    app.component('index-nova-sluggable-sluggabletext-field', SluggableTextIndexField)
    app.component('detail-nova-sluggable-sluggabletext-field', SluggableTextDetailField)
    app.component('form-nova-sluggable-sluggabletext-field', SluggableTextFormField)
});
