<template>
  <ion-page>
    <ion-header>
        <a-home-header />
    </ion-header>
    <ion-content :fullscreen="true">

      <ion-refresher slot="fixed" @ionRefresh="refresh">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <z-stories>
        <div class="stories-header">
          <b>Stories</b>
          <span class="text-gray">
            <ion-icon :icon="playSharp" />
            Watch All
          </span>
        </div>
      </z-stories>
      <z-post :posts="posts" />

    </ion-content>
  </ion-page>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonContent, IonIcon, IonRefresher, IonRefresherContent } from '@ionic/vue';
import { playSharp } from 'ionicons/icons';
import AHomeHeader from '@/components/a-home-header.vue';
import ZStories from '@/components/z-stories.vue';
import ZPost from '@/components/z-post.vue';

export default defineComponent({
  name: 'home-page',
  components: { AHomeHeader, ZStories, ZPost, IonHeader, IonContent, IonPage, IonIcon, IonRefresher, IonRefresherContent },
  methods: {
		refresh(e) {
			setTimeout(() => {
				for (let i = this.posts.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					const x = this.posts[i];
					this.posts[i] = this.posts[j];
					this.posts[j] = x;
				}
				if (e && e.target)
					e.target.complete();
			}, 500);
		}
	},
  data() {
    return {
      posts: [
        {
            avatar: require('@/assets/avatars/loganpaul.jpg'),
            name: 'loganpaul',
            location: 'Dubai, United Arab Emirates',
            image: require('@/assets/posts/loganpaul.jpg'),
            desc: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.'
        },
        {
            avatar: require('@/assets/avatars/elonmusk.jpg'),
            name: 'elonmusk',
            location: '',
            image: require('@/assets/posts/elonmusk.jpg'),
            desc: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.'
        },
        {
            avatar: require('@/assets/avatars/teamklemp.jpg'),
            name: 'teamklemp',
            location: '',
            image: require('@/assets/posts/teamklemp.jpg'),
            desc: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.'
        },
        {
            avatar: require('@/assets/avatars/mateklemp.jpg'),
            name: 'mateklemp',
            location: 'Homolka',
            image: require('@/assets/posts/mateklemp.jpg'),
            desc: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.'
        },
        {
            avatar: require('@/assets/avatars/bhadbhabie.jpg'),
            name: 'bhadbhabie',
            location: 'Melrose Avenue',
            image: require('@/assets/posts/bhadbhabie.jpg'),
            desc: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.'
        },
        {
            avatar: require('@/assets/avatars/expl0ited_.jpg'),
            name: 'expl0ited_',
            location: 'Bratislava',
            image: require('@/assets/posts/expl0ited_.jpg'),
            desc: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.'
        },
      ],
      playSharp
    }
  }

});
</script>

<style scoped>
  * {
    font-size: 14px !important;
  }

  .stories-header {
    width: 100%;
    padding: 16px;
  }

  .stories-header span {
    float: right;
  }
  
  ion-refresher {
    background: white;
  }

  ion-refresher-content {
    background: white !important;
  }

</style>
