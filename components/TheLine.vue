<template>
    <div class="lines" @click="setOpen">
        <span class="line top"></span>
        <span class="line bot"></span>
    </div>
</template>
<script>
export default {
    name: 'TheLine',
    methods: {
        setOpen() {
            const bodyEl = document.querySelector('body')
            if(bodyEl.classList.value === ''){
                bodyEl.classList.add('open')
            } else {
                bodyEl.classList.remove('open')
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';
.lines{
    z-index: 100;
    cursor: pointer;
    pointer-events: auto;

    position: fixed;
    top: $smaller-size;
    right: $small-size;
    height: 50px;
    aspect-ratio: 1/1;
    transition: $standard-transition;

    .line{
        position: absolute;
        transform: translateY(-50%);
        width: 40px;
        height: 3px;
        border-radius: 3px;
        background-color: $color-prim-darker;
        transition: $standard-transition;
        
        &.top{
            top: 40%;
            left: 0;
        }
        &.bot{
            top: 60%;
            right: 0;
        }
    }
}

.open{
    .lines{
        .line{
            top: 50%;
            background-color: $color-seco;
            &.top{
                transform: rotate(135deg);
                left: 10%;
            }
            &.bot{
                right: 10%;
                transform: rotate(45deg);
            }
        }
    }
}

@media (min-width: $md){
    .lines{
        right: -100px;
    }
}
</style>