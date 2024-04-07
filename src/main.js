import { createApp } from 'vue'
import App from './App.vue'

/* PrimeVue */
import Primevue from 'primevue/config'
import Card from 'primevue/card'
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

import 'primevue/resources/themes/lara-light-green/theme.css'

createApp(App)
    .use(Primevue)
    .component('Card', Card)
    .component('InputText', InputText)
    .component('FloatLabel', FloatLabel)
    .component('Button', Button)
    .mount('#app')