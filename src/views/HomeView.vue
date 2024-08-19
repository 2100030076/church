<script setup>
import lootie from '../assets/lootie.json'
</script>
<template>
 <section class=" rounded-lg dark:text-gray-800">
	<div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg xl:max-w-xl lg:text-left">
			<h1 class="text-5xl font-bold leading-none sm:text-5xl"> Los Angeles Chinese Seventh-day Adventist Church
			</h1>
			<p class="mt-6 mb-8 text-lg sm:mb-12">Every item you buy supports a greater cause. With each purchase, you contribute to saving lives and providing essential care to those in need. Make a difference today.
				
			</p>
			<div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				
				<a rel="noopener noreferrer" href="#" class="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 text-white ">Know More</a>
			</div>
		</div>
		<div class=" flex items-center justify-center p-6 mt-8 lg:mt-0sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<Vue3Lottie :animationData="lootie"   />
		</div>
	</div>
</section>
</template>