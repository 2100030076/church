<template>
    <div class="bg-black w-screen h-20">
      </div>
    <div class="relative ">
        <!-- Background image -->
        
        <!-- Form content -->
        <img src="../assets/contact.png" alt="Background Image" class="absolute  w-screen h-full object-cover opacity-20">
        <div class="md:flex justify-center w-screen min-h-screen container md:mx-auto relative z-10">
           

            <div class=" p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 m-auto rounded-2xl shadow  bg-opacity-90 ">
                <div v-show="isSent">
                    <p class="text-center text-black mt-44 font-bold text-4xl">Thank you {{ name }} for reaching out to us. We will get back to you soon.</p>
                </div>

                <form v-show="!isSent" @submit.prevent="submitForm" class="mt-8">
                    <div>
                        <h1 class="font-bold  uppercase text-3xl text-center mb-4">Contact Us</h1>
                    </div>
                    <div class="grid grid-cols-1 px-16 gap-5 md:grid-cols-2">
                        <label class="input input-bordered flex items-center text-md gap-2">
                            Name
                            <input type="text" class="grow text-sm" placeholder="Enter Your Name here" v-model="name" />
                        </label>
                        <label class="input input-bordered flex items-center text-md gap-2">
                            Email
                            <input type="email" class="grow text-sm" placeholder="Enter Your Email here" v-model="email" />
                        </label>
                        <label class="input input-bordered flex items-center text-md gap-2">
                            Phone
                            <input type="email" class="grow text-sm" placeholder="+91" v-model="email" />
                        </label>
                        <label class="input input-bordered flex items-center text-md gap-2">
                            Name of Sports Centre:
                            <input type="email" class="grow text-sm" placeholder="Enter Your Sport" v-model="email" />
                        </label>
                        <label class="input input-bordered flex items-center text-md gap-2">
                            Sports you offer:
                            <input type="email" class="grow text-sm" placeholder="Enter " v-model="email" />
                        </label>
                        <label class="input input-bordered flex items-center text-md gap-2">
                            Number of sportgrounds:
                            <input type="email" class="grow text-sm" placeholder="Enter " v-model="email" />
                        </label>
                        <label class="input input-bordered flex items-center text-md gap-2">
                            Website:
                            <input type="tel" class="grow text-sm" placeholder="Enter" v-model="phno" />
                        </label>
                    </div>
                    <div class="my-4 px-16">
                        <textarea class="textarea textarea-accent w-full h-32" placeholder="Enter your optional Message here" v-model="message"></textarea>
                    </div>
                    <div class="my-2 w-full md:w-1/2 lg:w-1/4 mx-auto">
                        <button type="submit" class="border border-spacing-1 border-blue-600 px-5 py-2 rounded-xl text-white font-bold text-md w-full bg-blue-600">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    </div>


    <footer class="px-4 divide-y bg-blue-50 dark:text-gray-800 ">
	<div class="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div class="lg:w-1/3">
			<a rel="noopener noreferrer" href="#" class="flex justify-center space-x-3 lg:justify-start">
				<div class="flex items-center justify-center w-12 h-12 rounded-full dark:bg-default-600">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-50">
						<path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
					</svg>
				</div>
				<span class="self-center text-2xl font-semibold">Seventh-day <br>Adventist Church</span>
			</a>
		</div>
		<div class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div class="space-y-3">
				<h3 class="tracking-wide uppercase dark:text-gray-900">Product</h3>
				<ul class="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Features</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Integrations</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Pricing</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">FAQ</a>
					</li>
				</ul>
			</div>
			<div class="space-y-3">
				<h3 class="tracking-wide uppercase dark:text-gray-900">Company</h3>
				<ul class="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Privacy</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms of Service</a>
					</li>
				</ul>
			</div>
			<div class="space-y-3">
				<h3 class="uppercase dark:text-gray-900">Developers</h3>
				<ul class="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Public API</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Documentation</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Guides</a>
					</li>
				</ul>
			</div>
			<div class="space-y-3">
				<div class="uppercase dark:text-gray-900">Social media</div>
				<div class="flex justify-start space-x-3">
					<a rel="noopener noreferrer" href="#" title="Facebook" class="flex items-center p-1">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5 fill-current">
							<path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="Twitter" class="flex items-center p-1">
						<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current">
							<path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.h-802C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.5h-80l-.047-.02z"></path>
						</svg>
					</a>
					<a rel="noopener noreferrer" href="#" title="Instagram" class="flex items-center p-1">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="w-5 h-5 fill-current">
							<path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.9h-80 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.9h-80 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.9h-80-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.9h-80-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.h-80 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.h-80-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.h-80-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.h-80-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.9h-80 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.9h-80 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="py-6 text-sm text-center dark:text-gray-600">© 1968 Company Co. All rights reserved.</div>
</footer>


    </template>
    
<script setup>
import { ref } from 'vue';

const isSent = ref(false);
const name = ref('');
const email = ref('');
const phno = ref('');
const message = ref('');

const submitForm = () => {
    // Your form submission logic here
    // For demonstration, just toggle isSent
    isSent.value = true;
};
</script>
    <style scoped>
    /* Scoped styles for adjustments */
    /* Adjustments for better readability on the form */
    .input {
        width: 100%;
    }
    .textarea {
        min-height: 10rem; /* Ensure textarea has a minimum height */
    }
    .btn {
        padding: 1rem; /* Ensure button has adequate padding */
    }
    </style>