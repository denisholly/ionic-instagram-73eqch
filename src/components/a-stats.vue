<template>
    <div class="fullstats">
        <ion-grid>
            <ion-row>
                <ion-col size="3">
                    <ion-avatar>
                        <img src="@/assets/avatars/loganpaul.jpg">
                    </ion-avatar>
                </ion-col>
                <ion-col class="stats">
                    <ion-row>
                        <ion-col class="stats-col">
                            <b>757</b>
                            posts
                        </ion-col>
                        <ion-col class="stats-col">
                            <b>4.6M</b>
                            followers
                        </ion-col>
                        <ion-col class="stats-col">
                            <b>151</b>
                            following
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col size="9">
                            <ion-button expand="block">Edit Profile</ion-button>
                        </ion-col>
                        <ion-col>
                            <ion-button>
                                <ion-icon slot="icon-only" :icon="cogOutline"></ion-icon>
                            </ion-button>
                        </ion-col>
                    </ion-row>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
</template>

<script>
import { cogOutline } from 'ionicons/icons';
export default{
    data() {
        return {
            cogOutline
        }
    }
}
</script>


<style scoped>

.fullstats {
    border-bottom: 1px solid #dbdbdb;
}

ion-avatar {
    width: 80px;
    height: 80px;
}

ion-col {
    padding: 5px;
}

.stats {
    text-align: center;
    font-size: 14px;
}

.stats-col {
    display: flex;
    flex-direction: column;
}

.stats-col b {
    font-size: 110%;
}

ion-button {
    --background: white;
    --color: #262626;
    font-weight: 700;
    border: 1px solid #dbdbdb;
    border-radius: 4px !important;
    font-size: 14px;
    height: 30px;
    --background-activated: none;
}

</style>