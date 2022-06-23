<template>
  <ion-page>
    <ion-header>
        <a-home-header />
    </ion-header>
    <ion-content :fullscreen="true">
      <z-stories>
        <div class="stories-header">
          <b>Stories</b>
          <span class="text-gray">
            <ion-icon :icon="playSharp" />
            Watch All
          </span>
        </div>
      </z-stories>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonContent, IonIcon } from '@ionic/vue';
import playSharp from 'ionicons/icons';
import AHomeHeader from '@/components/a-home-header.vue';
import ZStories from '@/components/z-stories.vue';

export default defineComponent({
  name: 'home-page',
  components: { AHomeHeader, ZStories, IonHeader, IonContent, IonPage, IonIcon },
  setup() {
    return {
      playSharp
    }
  }
});
</script>

<style scoped>
  * {
    font-size: 14px;
  }

  .stories-header {
    width: 100%;
    padding: 16px;
  }

  .stories-header span {
    float: right;
  }
  
</style>
