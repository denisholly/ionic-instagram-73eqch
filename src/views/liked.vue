<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-segment value="camera" mode="md" @ionChange="segmentChanged($event)">
          <ion-segment-button value="camera">
            <ion-label>Following</ion-label>
          </ion-segment-button>
          <ion-segment-button value="bookmark">
            <ion-label>You</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <z-activity />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/vue';
import ZActivity from '@/components/z-activity.vue';

export default defineComponent({
  name: 'Tab3Page',
  components: { ZActivity, IonHeader, IonToolbar, IonContent, IonPage }
});
</script>
