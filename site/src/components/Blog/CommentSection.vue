<template lang="">
    <div>
        <div class="antialiased mx-auto max-w-screen-md m-4">
            <h1 class="mb-4 text-lg font-semibold text-gray-900 uppercase text-1">
                Comments
            </h1>

            <div class="space-y-4 py-4">
                <div class="flex">
                    <div class="flex-shrink-0 mr-3">
                        <img
                            class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                            src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                            alt=""
                        >
                    </div>
                    <div class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed ">
                        <strong>Nolwen</strong> <span class="text-xs text-gray-400">10:45 AM</span>
                        <p class="text-sm">
                            Cette page ressemble de plus en plus à quelque chose! J'adore. Qui a fait ça? Je l'embauche de suite!
                        </p>
                        <div class="mt-4 flex items-center">
                            <Disclosure>
                                <DisclosureButton>
                                    <div class="mt-4 flex items-center">
                                        <div class="flex -space-x-2 mr-2">
                                            <img
                                                class="rounded-full w-6 h-6 border border-white"
                                                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                                                alt=""
                                            >
                                            <img
                                                class="rounded-full w-6 h-6 border border-white"
                                                src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                                                alt=""
                                            >
                                        </div>
                                        <div class="text-sm text-gray-500 font-semibold">
                                            4 Replies
                                        </div>
                                    </div>

                                    <DisclosurePanel>
                                        <div class="space-y-4">
                                            <div class="flex">
                                                <div class="flex-shrink-0 mr-3">
                                                    <img
                                                        class="mt-3 rounded-full w-max h-6 sm:w-8 sm:h-8"
                                                        src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                                        alt=""
                                                    >
                                                </div>
                                                <div class="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                                    <strong>Clemence</strong> <span class="text-xs text-gray-400">3:34 PM</span>
                                                    <p class="text-xs sm:text-sm">
                                                        So cool !
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="flex">
                                                <div class="flex-shrink-0 mr-3">
                                                    <img
                                                        class="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                                                        src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                                        alt=""
                                                    >
                                                </div>
                                                <div class="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                                    <strong>Elliot</strong> <span class="text-xs text-gray-400">3:34 PM</span>
                                                    <p class="text-xs sm:text-sm">
                                                        I really like this page.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </DisclosurePanel>
                                </DisclosureButton>
                            </Disclosure>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex">
                <div class="flex-shrink-0 mr-3">
                    <img
                        class="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                        src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=8"
                        alt=""
                    >
                </div>
                <div class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed mb-5">
                    <strong>Lionel</strong> <span class="text-xs text-gray-400">11:43 AM</span>
                    <p class="text-sm">
                        Beaucoup de boulot, beaucoup d'infestissement. La dream Team. Continuons ainsi.
                    </p>
                    <div class="mt-4 flex items-center" />
                    <Disclosure>
                        <DisclosureButton>
                            <div class="text-sm text-gray-500 font-semibold py-2">
                                2 More Replies
                            </div>
                        </DisclosureButton>
                        <DisclosurePanel>
                            <div class="space-y-4">
                                <div class="flex">
                                    <div class="flex-shrink-0 mr-3">
                                        <img
                                            class="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                                            src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                                            alt=""
                                        >
                                    </div>
                                    <div class="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed bg-3">
                                        <strong>Clemence</strong> <span class="text-xs text-gray-400">3:15 PM</span>
                                        <p class="text-xs sm:text-sm">
                                            Horizon the best.
                                        </p>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="flex-shrink-0 mr-3">
                                        <img
                                            class="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                                            src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                                            alt=""
                                        >
                                    </div>
                                    <div class="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed bg-3">
                                        <strong>Nolwen</strong> <span class="text-xs text-gray-400">5:57 PM</span>
                                        <p class="text-xs sm:text-sm">
                                            Indeed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </DisclosurePanel>
                    </Disclosure>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="js">
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel
} from '@headlessui/vue'

export default {
    components: { Disclosure, DisclosureButton, DisclosurePanel },
}
</script>
