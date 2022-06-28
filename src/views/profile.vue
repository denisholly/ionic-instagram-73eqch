<template>
  <ion-page>
    <ion-header>
      <a-profile-header />
    </ion-header>
    <ion-content :fullscreen="true">
      <a-stats />

      <ion-segment value="apps" mode="md" color="secondary">
        <ion-segment-button value="apps">
          <ion-icon :icon="appsOutline"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="list">
          <ion-icon :icon="listOutline"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="person">
          <ion-icon :icon="personOutline"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="bookmark">
          <ion-icon :icon="bookmarkOutline"></ion-icon>
        </ion-segment-button>
      </ion-segment>

      <a-profile-posts />

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonContent, IonSegment, IonSegmentButton, IonIcon } from '@ionic/vue';
import { appsOutline, listOutline, personOutline, bookmarkOutline } from 'ionicons/icons';
import AProfileHeader from '@/components/a-profile-header.vue';
import AStats from '@/components/a-stats.vue';
import AProfilePosts from '@/components/a-profile-posts.vue';

export default defineComponent({
  name: 'Tab3Page',
  components: { AProfileHeader, AStats, AProfilePosts, IonHeader, IonContent, IonPage, IonSegment, IonSegmentButton, IonIcon },
  data() {
    return {
        appsOutline, listOutline, personOutline, bookmarkOutline
    }
  },
});
</script>

<style scoped>

ion-segment-button {
  --indicator-height: none;
}

</style>
