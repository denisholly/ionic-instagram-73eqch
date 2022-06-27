<template>
    <div class="stories">
        <div class="post-wrapper" v-for="post in posts" :key="post">
            <ion-item class="header">
                <ion-avatar slot="start">
                    <img :src="post.avatar">
                </ion-avatar>
                <ion-label>
                    <h3 class="post-header">
                        <b>{{ post.name }}</b>
                        <div class="location">
                            {{ post.location }}
                            <ion-icon :icon="chevronForwardOutline" v-if="post.location" />  
                        </div>
                    </h3>
                    <ion-icon :icon="ellipsisHorizontal" />    
                </ion-label>
            </ion-item>
            <div class="image">
                <img :src="post.image" alt="post">
            </div>
            <div class="bottom">
                <p class="actions">
                    <ion-icon :icon="heartOutline" />  
                    <ion-icon :icon="chatbubbleOutline" />  
                    <img src="@/assets/send.svg" alt="send">  
                    <ion-icon :icon="bookmarkOutline" class="save-post" />  
                </p>
                <p class="likes">
                    Liked by
                    <b>{{ post.name }}</b>
                    and
                    <b>22 others</b>
                </p>
                <p class="desc">
                    <b>loganpaul</b>
                    {{ post.desc }}
                    <a href="#">#homolka</a>   
                    <a href="#"> @chatahomolka</a>   
                </p>
                <p class="note">
                    <ion-note>1 DAY AGO ·</ion-note>
                    SEE TRANSLATION
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { IonAvatar, IonItem, IonIcon } from '@ionic/vue'
import { ellipsisHorizontal, heartOutline, bookmarkOutline, chatbubbleOutline, chevronForwardOutline } from 'ionicons/icons';
export default {
    components: { IonAvatar, IonItem, IonIcon },
    setup() {
        return {
            ellipsisHorizontal,
            heartOutline,
            bookmarkOutline,
            chatbubbleOutline,
            chevronForwardOutline
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
            ]
        }
    }
}
</script>

<style scoped>

.header ion-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px !important;
}

.post-header {
    font-size: 14px !important;
}

.header h3 {
    font-size: 14px !important;
    font-weight: 700;
}

.location {
    display: flex;
    align-items: center;
    font-weight: 400;
}

.bottom {
    padding: 0 16px;
}

.bottom p {
    margin: 14px 0;
}

.actions ion-icon {
    font-size: 30px;
    margin-right: 0.5em;
}

.actions img {
    width: 30px;
}

.save-post {
    float: right;
    margin-right: 0 !important;
}

.desc a {
    color: #3897f0;
}

.note {
    font-size: 80%;
}

</style>