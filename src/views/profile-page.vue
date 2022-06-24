<template>
  <ion-page>
    <ion-header>
      <a-profile-header />
    </ion-header>
    <ion-content :fullscreen="true">
      <a-stats />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonContent } from '@ionic/vue';
import AProfileHeader from '@/components/a-profile-header.vue';
import AStats from '@/components/a-stats.vue';

export default defineComponent({
  name: 'Tab3Page',
  components: { AProfileHeader, AStats, IonHeader, IonContent, IonPage }
});
</script>
