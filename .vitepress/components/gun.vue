<script setup async>
import '@gun-vue/components/dist/style.css'
const { UserHome } = await import('@gun-vue/components')
</script>

<template>
	<div class="fixed right-2 bottom-2 z-100">
		<UserHome></UserHome>
	</div>
</template>