<template>
    <div>
        <svg :style="{ width, height }">
            <use :xlink:href="prefix + name" :fill="color"></use>
        </svg>
    </div>
</template>

<script setup lang='ts'>
// 接收父组件传递过来的参数
defineProps({
    // 传递xlink的前缀
    prefix: {
        type: String,
        default: "#icon-"
    },
    // 后缀
    name: {
        type: String,
    },
    color: {
        type: String,
        default: ''
    },
    width: {
        type: String,
        default: '16px'
    },
    height: {
        type: String,
        default: '16px'
    }
})
</script>

<style scoped lang='scss'></style>