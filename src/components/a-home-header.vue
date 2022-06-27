<template>
    <ion-toolbar>
        <ion-toolbar class="toolbar-border-none">
            <ion-buttons slot="secondary">
                <ion-button>
                    <ion-icon slot="icon-only" :icon="cameraOutline"></ion-icon>
                </ion-button>
            </ion-buttons>
            <ion-title>
                <img src="@/assets/instagram-logo.png" alt="ig-logo">
            </ion-title>
            <ion-buttons slot="end">
                <ion-button color="primary">
                    <img src="@/assets/send.svg" alt="send">
                </ion-button>
            </ion-buttons>
        </ion-toolbar>
    </ion-toolbar>
</template>

<script>
import { IonToolbar } from '@ionic/vue';
import { cameraOutline, square, home, searchOutline } from 'ionicons/icons';
export default {
    components: {
        IonToolbar,
    },
    setup() {
        return {
            cameraOutline, 
            square,
            home,
            searchOutline,
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

ion-icon {
    width: 36px;
    height: 40px;
}

.toolbar-border-none {
  --border-style: none;
}

</style>