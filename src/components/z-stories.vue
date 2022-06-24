<template>
    <slot />
    <div class="wrapper">
        <div v-for="story in stories" :key="story" class="user text-gray">
            <div class="avatar">
                <img :src="story.avatar" alt="avatar">
            </div>
            {{ story.name }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stories: [
                { avatar: require('@/assets/avatars/elonmusk.jpg'), name: 'elonmusk' },
                { avatar: require('@/assets/avatars/lenkamie.jpg'), name: 'lenkamie' },
                { avatar: require('@/assets/avatars/mateklemp.jpg'), name: 'mateklemp' },
                { avatar: require('@/assets/avatars/bhadbhabie.jpg'), name: 'bhadbhabie' },
                { avatar: require('@/assets/avatars/teamklemp.jpg'), name: 'teamklemp' },
                { avatar: require('@/assets/avatars/loganpaul.jpg'), name: 'loganpaul' },
            ]
        }
    }
}
</script>

<style scoped>
.wrapper {
    height: 100px;
    overflow-x: auto;
    padding-right: 30px;
    white-space: nowrap;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border-bottom: rgb(218, 218, 218) solid 1px;
}

.user {
    height: 90px;
    display: inline-block;
    margin-left: 15px;
    text-align: center;
}

.avatar {
    border-radius: 999px;
    border: 1px solid #c6c6c6;
    margin: 0 auto 5px auto;
    padding: 3px;
    width: 68px;
    height: 68px;
}

.avatar img {
    width: 60px;
    height: 60px;
    border-radius: 999px;
    border: 0.8px solid #c6c6c6;
}

.wrapper::-webkit-scrollbar { 
    display: none;
}
</style>