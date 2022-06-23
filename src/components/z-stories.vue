<template>
    <slot />
    <div class="wrapper">
        <div class="user text-gray">
            <div class="avatar">
                <img src="@/assets/elonmusk.jpg" alt="avatar">
            </div>
            elonmusk
        </div>
        <div class="user text-gray">
            <div class="avatar">
                <img src="@/assets/elonmusk.jpg" alt="avatar">
            </div>
            elonmusk
        </div>
        <div class="user text-gray">
            <div class="avatar">
                <img src="@/assets/elonmusk.jpg" alt="avatar">
            </div>
            elonmusk
        </div>
        <div class="user text-gray">
            <div class="avatar">
                <img src="@/assets/elonmusk.jpg" alt="avatar">
            </div>
            elonmusk
        </div>
        <div class="user text-gray">
            <div class="avatar">
                <img src="@/assets/elonmusk.jpg" alt="avatar">
            </div>
            elonmusk
        </div>
        <div class="user text-gray">
            <div class="avatar">
                <img src="@/assets/elonmusk.jpg" alt="avatar">
            </div>
            elonmusk
        </div>
        <div class="user text-gray">
            <div class="avatar">
                <img src="@/assets/elonmusk.jpg" alt="avatar">
            </div>
            elonmusk
        </div>
    </div>
</template>

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
    margin-bottom: 5px;
    padding: 3px;
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