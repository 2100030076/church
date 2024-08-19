<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
	<header class=" bg-blue-700 text-white p-3 z-20 absolute w-full">
		<div class="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
			<ul class="items-stretch hidden space-x-3 md:flex">
				<li class="flex">
					<a rel="noopener noreferrer" href="#" class="flex items-center mr-9 text-xl px-4 font-serif">Home</a>
				</li>
				<li class="flex">
					<router-link to="/page" rel="noopener noreferrer" class="flex items-center mr-9 text-xl font-serif  px-4 ">Sermons</router-link>
				</li>
				<li class="flex">
					<a rel="noopener noreferrer" href="#" class="flex items-center mr-9 text-xl  font-serif px-4  dark:text-default-600 dark:border-default-600">Calender</a>
				</li>
			</ul>
			<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" class="flex items-center p-2">
				<img src="../assets/logo.png">
			</a>
			<ul class="items-stretch hidden space-x-3 md:flex">
				<li class="flex">
					<a rel="noopener noreferrer" href="#" class="flex items-center  px-4 mr-9 text-xl font-serif ">Contact</a>
				</li>
				<li class="flex">
					<a rel="noopener noreferrer" href="#" class="flex items-center  px-4 mr-9 text-xl font-serif ">Give</a>
				</li>
				<li class="flex">
					<a rel="noopener noreferrer" href="#" class="flex items-center  px-4 mr-9 text-xl font-serif ">Login</a>
				</li>
			</ul>
			<button title="Button" type="button" class="p-4 md:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 dark:text-gray-800">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
		</div>
	</header>
	<main>
    <RouterView/>
  </main>
</template>