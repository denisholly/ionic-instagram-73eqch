<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <z-stories></z-stories>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonContent, IonToolbar, IonSearchbar } from '@ionic/vue';
import ZStories from '@/components/z-stories.vue';

export default defineComponent({
  name: 'search-page',
  components: { IonHeader, IonContent, IonPage, ZStories, IonToolbar, IonSearchbar }
});
</script>

<style scoped>
ion-toolbar {
  padding: 4px;
}

ion-searchbar {
  padding: 8px;
}

</style>
