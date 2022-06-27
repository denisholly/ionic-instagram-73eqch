<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button>
            Cancel
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="primary">
          <ion-button color="secondary">
            Next
          </ion-button>
        </ion-buttons>
        <ion-title>Camera Roll</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'Tab3Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonButton }
});
</script>

<style scoped>
ion-title {
  color: black;
}
</style>
