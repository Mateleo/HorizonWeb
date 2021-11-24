<template>
  <div>
    <div
      v-if="post"
      class="text-1 bg-1 rounded-lg rounded-l-xl"
    >
      <div class="flex">
        <div class="text-1 text-center flex flex-col flex-shrink-0 w-20 pt-4 pb-2 rounded-l-lg">
          <i class="ri-arrow-up-s-fill text-3xl md:text-4xl -mb-2 -mt-1 mouse-icon text-5 cursor-pointer" />
          <div class="font-bold text-lg">
            {{ abbrNumbers(post.upvotes - post.downvotes) }}
          </div>
          <i class="ri-arrow-down-s-fill text-3xl md:text-4xl -mt-2 mouse-icon text-5 cursor-pointer" />
          <i class="ri-star-line text-lg md:text-xl mouse-icon mt-2 text-5 cursor-pointer" />
          <div class="font-bold text-md">
            {{ abbrNumbers(post.favorites) }}
          </div>
        </div>

        <div class="pr-4 my-4 mr-2">
          <div class="flex space-x-3">
            <div class="flex-shrink-0 font-light text-3 flex flex-wrap space-x-1 items-center h-6 whitespace-nowrap overflow-hidden">
              <div class="flex space-x-1 pl-1">
                <i
                  :class="headerTypes[post.type]?.icon"
                  class="text-1"
                />
                <div class="text-1 font-bold">
                  {{ headerTypes[post.type]?.type }}
                </div>
              </div>
              <div class="flex space-x-1 pl-1">
                <div
                  :class="[post.solved ? 'text-red-500' : 'text-green-500']"
                >
                  {{ post.solved ? 'Non-Résolu' : '✓ Résolu' }}
                </div>
              </div>
            </div>
            <tags-list :tags="post.tags" />
          </div>

          <div class="mt-3">
            <router-link
              :to="`/post/${post.postId}`"
              class="text-2xl text-0 font-semibold hover:underline line-clamp-1"
            >
              {{ post.title }}
            </router-link>

            <p class="mt-1 text-2 text-justify line-clamp-2">
              {{ postPreview(JSON.parse(post.body) || '') }}
            </p>
          </div>

          <div class="relative">
            <div class="flex items-start space-x-2 h-12 mt-4 space-y-2 mr-4">
              <!-- TODO: User popup -->
              <a
                href="#"
                class="flex flex-shrink-0 items-center"
              >
                <img
                  :src="post.author?.avatar || require('@/assets/img/default_avatars/user.png')"
                  alt="avatar"
                  class="mr-2 w-10 h-10 rounded-full"
                >

                <div class="flex flex-col">
                  <div class="text-1 font-bold text hover:underline">
                    {{ post.author?.username }}
                  </div>
                  <div class="text-sm text-2">{{ abbrNumbers(post.author?.reputation) }}</div>
                </div>
              </a>

              <span class="pl-4 font-light text-5 flex flex-wrap space-x-4 items-center h-6 whitespace-nowrap overflow-hidden">
                <div>Posté {{ timeAgo(post.createdAt) }}</div>
                <div class="flex space-x-1 pl-1">
                  <i class="ri-history-line" />
                  <div>{{ timeAgo(post.updatedAt) }}</div>
                </div>
                <div>{{ abbrNumbers(post.views) }} Réponses</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="bg-0 rounded-lg flex space-x-2 py-3 px-5 font-semibold"
    >
      <p class="text-lg text-0">
        Erreur: Ce post est vide.
      </p>

      <!-- TODO: Bug report pages -->
      <router-link
        :to="`/report-bug/posts`"
        class="text-lg font-semibold link-blue line-clamp-1"
      >
        Signalez ce bug !
      </router-link>
    </div>
  </div>
</template>

<script lang="js">
import { generateHTML } from '@tiptap/html'
import TagsList from '@/components/List/TagsList.vue'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import CharacterCount from '@tiptap/extension-character-count'

import { abbrNumbers } from '../../utils/abbrNumbers'
import { timeAgo } from '../../utils/timeAgo'

export default {
  components: {
    TagsList
  },
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      headerTypes: {
        1: { type: 'Question', icon: 'ri-questionnaire-line' },
        2: { type: 'Suggestion', icon: 'ri-lightbulb-line' },
        3: { type: 'Problème', icon: 'ri-error-warning-line' },
        4: { type: 'Discussion', icon: 'ri-discuss-line' }
      },
      solvedState: {
        0: { state: 'Non-Résolu', class: 'text-red-500' },
        1: { state: '✓ Résolu', class: 'text-green-500' }
      }
    }
  },
  methods: {
    abbrNumbers,
    timeAgo,
    extractContent (s, space) {
      var span = document.createElement('span')
      span.innerHTML = s
      if (space) {
        var children = span.querySelectorAll('*')
        for (var i = 0; i < children.length; i++) {
          if (children[i].textContent) { children[i].textContent += ' ' } else { children[i].innerText += ' ' }
        }
      }
      return [span.textContent || span.innerText].toString().replace(/ +/g, ' ')
    },

    postPreview (postJson) {
      return this.extractContent(generateHTML(postJson,
        [
          StarterKit.configure({
            heading: {
              levels: [1, 2, 3]
            }
          }),
          Highlight,
          Typography,
          Placeholder,
          Underline,
          CharacterCount
        ]
      ), true)
    }
  }
}
</script>
