<script setup async>
const { useAccount } = await import('@gun-vue/composables')

const { account } = useAccount()
</script>

<template lang="pug">
.fixed.top-2.right-2 {{ account.profile?.name }}!!!
</template>