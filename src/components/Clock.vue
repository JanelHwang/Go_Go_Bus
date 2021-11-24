<template>
    <div id="clock">
        <div class="title">您還沒輸入路線資訊喔！</div>
        <div class="time">{{ hours }} : {{minutes}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: '',
            time: null,
            hours: null,
            minutes: null,
        };
    },
    methods: {
        updateTime(){
            const date = new Date();
            this.time = date;
            this.hours = date.getHours().toString().padStart(2,0);
            this.minutes = date.getMinutes().toString().padStart(2,0);
            
        }
    }, 
    mounted() {
        setInterval(this.updateTime,1000);
    },
}


</script>