<template lang="">
    <div class="mx-6 mt-8 mb-12 flex flex-col space-y-2">
        <div class="card">
            <div class="flex flex-col lg:flex-row lg:space-x-2 lg:items-center">
                <strong class="mr-2">Nouvel Article</strong>
                <input
                    id="title"
                    type="text"
                    class="input w-full h-10 mt-1 lg:m-0"
                    name="title"
                    value=""
                    placeholder="Titre de l'article"
                    required
                >
                <div class="flex min-w-fit mt-3 lg:m-0">
                    <div class="lg:ml-3 flex min-w-fit pr-4">
                        <img
                            class="object-cover h-10 w-10 rounded-full"
                            :src="user.avatar ?? default_avatar"
                            :alt="user.username"
                            loading="lazy"
                        >
                        <div class="ml-3 text-sm text-0 flex flex-col">
                            <p class="whitespace-nowrap">
                                Poster en tant que
                            </p>
                            <strong
                                class="
                                    whitespace-nowrap
                                    text-base"
                            >{{ user.username }}</strong>
                        </div>
                    </div>
                    <div class="flex space-x-2 items-center">
                        <button class="button">
                            <p class="text-sm">
                                Publier
                            </p>
                        </button>
                        <button class="button">
                            <p class="text-sm">
                                Sauvegarder
                            </p>
                        </button>
                        <button class="button">
                            <p class="text-sm">
                                Aperçu
                            </p>
                        </button>
                        <button class="button">
                            <p class="text-sm">
                                Fermer
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col-reverse lg:flex-row lg:space-x-2 lg:space-y-0">
            <div class="card blog-editor lg:w-2/3">
                <strong>
                    Éditeur d'article
                </strong>
                <tip-tap-editor
                    :char-count="true"
                    :buttons="editorButtons"
                    :char-count-limit="100000"
                />
            </div>
            <!-- Sidebar -->
            <div class="card lg:w-1/3 mb-2 space-y-2">
                <div>
                    <strong>
                        Miniature
                    </strong>
                    <div class="flex">
                        <!-- TODO: File input -->
                        <label class="text-0 rounded-md bg-primary-3 px-4 py-2">
                            <span class="block">Changer l'image</span>
                            <input
                                type="file"
                                class="hidden"
                            >
                        </label>
                    </div>
                </div>

                <div>
                    <strong>Table des matières</strong>
                    <textarea
                        name="table-of-contents"
                        class="input w-full"
                        placeholder="(Optionnel)"
                    />
                </div>

                <div>
                    <strong>
                        Paramètres de l'article
                    </strong>
                    <div class="text text-gray-600 m-2">
                        Description
                    </div>
                    <textarea
                        name="description"
                        class="input w-full"
                        placeholder="(Optionnel)"
                    />
                    <!-- <input
                        id="description"
                        type="text"
                        name="description"
                        placeholder="(Optionnel)"
                    > -->
                    <div class="text text-gray-600 m-2">
                        Tags
                    </div>
                    <tags-input />
                    <!-- <div class="text-md text-gray-600 mb-2 text-c2 mt-6">
                            Location
                        </div>
                        <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest rounded-md">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 2048 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1024 672q119 0 203.5 84.5t84.5 203.5-84.5 203.5-203.5 84.5-203.5-84.5-84.5-203.5 84.5-203.5 203.5-84.5zm704-416q106 0 181 75t75 181v896q0 106-75 181t-181 75h-1408q-106 0-181-75t-75-181v-896q0-106 75-181t181-75h224l51-136q19-49 69.5-84.5t103.5-35.5h512q53 0 103.5 35.5t69.5 84.5l51 136h224zm-704 1152q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z"
                                />
                            </svg>
                            <div class="pl-2">
                                --
                            </div>
                        </div>
                        <div class="text-md text-gray-600 mb-2 text-c2 mt-6">
                            Options
                        </div>
                        <div class="flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest rounded-md">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 2048 1792"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1024 672q119 0 203.5 84.5t84.5 203.5-84.5 203.5-203.5 84.5-203.5-84.5-84.5-203.5 84.5-203.5 203.5-84.5zm704-416q106 0 181 75t75 181v896q0 106-75 181t-181 75h-1408q-106 0-181-75t-75-181v-896q0-106 75-181t181-75h224l51-136q19-49 69.5-84.5t103.5-35.5h512q53 0 103.5 35.5t69.5 84.5l51 136h224zm-704 1152q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z"
                                />
                            </svg>
                            <div class="pl-2">
                                --
                            </div>
                        </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { users } from '@/fake/users'

import default_avatar from '@/assets/img/default_avatars/user.png'
import TagsInput from '@/components/Input/TagsInput.vue'
import TipTapEditor from '@/components/TipTap/TipTapEditor.vue'
export default {
    name: 'BlogPostForm',
    components: { TipTapEditor, TagsInput },
    data () {
        return {
            user: users[0],
            default_avatar,
            editorButtons: [
                { action: 'paragraph', icon: 'ri-paragraph ri-lg', content: 'Paragraphe (Ctrl+Alt+0)' },
                { action: 'bold', icon: 'ri-bold ri-lg', content: 'Gras (Ctrl+B)' },
                { action: 'italic', icon: 'ri-italic ri-lg', content: 'Italique (Ctrl+I)' },
                { action: 'strike', icon: 'ri-strikethrough ri-lg', content: 'Barré (Ctrl+Shift+X)' },
                { action: 'underline', icon: 'ri-underline ri-lg', content: 'Souligné (Ctrl+U)' },
                { action: 'highlight', icon: 'ri-mark-pen-line ri-lg', content: 'Surligné (Ctrl+Shift+H)' },
                { action: 'clearMarks', icon: 'ri-format-clear ri-lg', content: 'Enlever les styles' }
            ]
        }
    }
}
</script>

<style lang="scss">
.blog-editor .ProseMirror {
  min-height:40rem;
  max-height:40rem;
  overflow-y:scroll;
}
</style>
