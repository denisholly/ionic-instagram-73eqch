<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="homeOutline" />
        </ion-tab-button>
          
        <ion-tab-button tab="search" href="/search">
          <ion-icon :icon="searchOutline" />
        </ion-tab-button>
        
        <ion-tab-button tab="camera" href="/camera">
          <ion-icon :icon="addCircleOutline" />
        </ion-tab-button>

        <ion-tab-button tab="liked" href="/liked">
          <ion-icon :icon="heartOutline" />
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/profile">
          <ion-icon :icon="personOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { homeOutline, searchOutline, addCircleOutline, heartOutline, personOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'tabs-page',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  data() {
    return {
      homeOutline,
      searchOutline,
      addCircleOutline,
      heartOutline,
      personOutline
    }
  }
});
</script>
