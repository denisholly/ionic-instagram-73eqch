<template>
    <div class="activity">
        <ion-item v-for="action in actions" :key="action">
            <ion-avatar slot="start">
                <img :src="action.avatar">
            </ion-avatar>
            <ion-label>
                <b>{{ action.user }}</b>
                {{ action.action }}
                <b>{{ action.target }}</b>
                and
                <b>2 others</b>
                <ion-note> 46m</ion-note>
            </ion-label>
        </ion-item>   
    </div>
</template>

<script>
export default {
    data() {
        return {
            actions: [
                { avatar: require('@/assets/avatars/mateklemp.jpg'), user: 'mateklemp', action: 'liked', target: 'lenkamie' },
                { avatar: require('@/assets/avatars/elonmusk.jpg'), user: 'elonmusk', action: 'liked', target: 'loganpaul' },
                { avatar: require('@/assets/avatars/teamklemp.jpg'), user: 'teamklemp', action: 'started following', target: 'mateklemp' },
                { avatar: require('@/assets/avatars/lenkamie.jpg'), user: 'lenkamie', action: 'commented on', target: 'mateklemp' },
                { avatar: require('@/assets/avatars/teamklemp.jpg'), user: 'teamklemp', action: 'liked', target: 'teamklemp' },
                { avatar: require('@/assets/avatars/lenkamie.jpg'), user: 'lenkamie', action: 'commented on', target: 'bhadhbabie' },
                { avatar: require('@/assets/avatars/bhadbhabie.jpg'), user: 'bhadbhabie', action: 'liked', target: 'elonmusk' },
                { avatar: require('@/assets/avatars/loganpaul.jpg'), user: 'loganpaul', action: 'started following', target: 'elonmusk' },
                { avatar: require('@/assets/avatars/bhadbhabie.jpg'), user: 'bhadbhabie', action: 'liked', target: 'elonmusk' },
                { avatar: require('@/assets/avatars/lenkamie.jpg'), user: 'lenkamie', action: 'commented on', target: 'mateklemp' },
                { avatar: require('@/assets/avatars/mateklemp.jpg'), user: 'mateklemp', action: 'liked', target: 'lenkamie' },
                { avatar: require('@/assets/avatars/teamklemp.jpg'), user: 'teamklemp', action: 'liked', target: 'teamklemp' },
                { avatar: require('@/assets/avatars/teamklemp.jpg'), user: 'teamklemp', action: 'started following', target: 'mateklemp' },
                { avatar: require('@/assets/avatars/loganpaul.jpg'), user: 'loganpaul', action: 'started following', target: 'elonmusk' },
                { avatar: require('@/assets/avatars/bhadbhabie.jpg'), user: 'bhadbhabie', action: 'liked', target: 'lenkamie' },
                { avatar: require('@/assets/avatars/elonmusk.jpg'), user: 'elonmusk', action: 'liked', target: 'loganpaul' },
                { avatar: require('@/assets/avatars/mateklemp.jpg'), user: 'mateklemp', action: 'liked', target: 'loganpaul' },
                { avatar: require('@/assets/avatars/loganpaul.jpg'), user: 'loganpaul', action: 'commented on', target: 'bhadbhabie' },
                
            ]
        }
    }
}
</script>

<style scoped>
  * {
    font-size: 14px;
  }

  ion-item {
    min-height: 52px;
  }

  ion-label {
    white-space: normal !important;
  }
</style>