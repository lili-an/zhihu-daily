<template>
<div class="loading">
  <mu-circular-progress :size="60" :strokeWidth="8" color="red"/>
</div>
</template>
<style type="text/css" scoped>
	.loading {
		position: absolute;
		top: 35%;
		left: 44%;
		z-index: 2;
	}
</style>