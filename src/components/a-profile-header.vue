<template>
    <ion-toolbar>
        <ion-toolbar>
            <ion-buttons slot="secondary">
                <ion-button>
                    <ion-icon slot="icon-only" :icon="person" />
                </ion-button>
            </ion-buttons>
            <ion-title>
                loganpaul
            </ion-title>
            <ion-buttons slot="end">
                <ion-button color="primary">
                    <ion-icon slot="icon-only" :icon="timerOutline" />
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-toolbar>
</template>

<script>
import { IonToolbar } from '@ionic/vue';
import { person, timerOutline } from 'ionicons/icons';
export default {
    components: {
        IonToolbar,
    },
    setup() {
        return {
            person,
            timerOutline
        }
    }
}
</script>

<style scoped>
ion-buttons {
    display: flex;
    align-items: center;
}

ion-title img {
    height: 40px;
}

ion-button img {
    width: 36px;
    height: 40px;
}
</style>