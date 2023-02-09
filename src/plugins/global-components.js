import AppAlert from '@/components/app/AppAlert.vue';
import AppCard from '@/components/app/AppCard.vue';
import AppModal from '@/components/app/AppModal.vue';
import AppPagination from '@/components/app/AppPagination.vue';
import AppGrid from '@/components/app/AppGrid.vue';

export default {
  install(app) {
    app.component('AppAlert', AppAlert);
    app.component('AppModal', AppModal);
    app.component('AppCard', AppCard);
    app.component('AppPagination', AppPagination);
    app.component('AppGrid', AppGrid);
  },
};
