<template>
    <ion-grid>
        <ion-row>
            <ion-col size="4" v-for="post in posts" :key="post" >
                <img :src="post" alt="post">
            </ion-col>
            <ion-col size="4" v-for="post in posts" :key="post" >
                <img :src="post" alt="post">
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                require('@/assets/logan-posts/0.jpg'),
                require('@/assets/logan-posts/1.jpg'),
                require('@/assets/logan-posts/2.jpg'),
                require('@/assets/logan-posts/3.jpg'),
                require('@/assets/logan-posts/4.jpg'),
                require('@/assets/logan-posts/5.jpg'),
                require('@/assets/logan-posts/6.jpg'),
                require('@/assets/logan-posts/7.jpg'),
                require('@/assets/logan-posts/8.jpg'),
                require('@/assets/logan-posts/9.jpg'),
                require('@/assets/logan-posts/10.jpg'),
                require('@/assets/logan-posts/11.jpg'),
            ]
        }
    }
}
</script>

<style scoped>
ion-grid {
    padding: 0;
}

ion-col {
    padding: 0.5px!important;
    margin-bottom: -4px;
}
</style>
