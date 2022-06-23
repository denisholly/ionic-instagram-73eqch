<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <a-home-header />
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/vue';
import AHomeHeader from '@/components/a-home-header.vue';

export default  defineComponent({
  name: 'home-page',
  components: { AHomeHeader, IonHeader, IonToolbar, IonContent, IonPage }
});
</script>
