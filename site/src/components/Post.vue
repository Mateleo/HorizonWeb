<template>
  <div>
    <div class="text-1">
      <div class="flex mt-1">
        <div>
          <div class="flex items-start">
            <div class="flex flex-col flex-shrink-0 w-16 mr-4 items-center justify-center text-lg">
              <i class="ri-arrow-up-s-fill ri-2x -mb-1 text-5" />
              <div class="text-center text-xl">
                {{ post.upvotes }}
              </div>
              <i class="ri-arrow-down-s-fill ri-2x -mt-1 text-5" />
            </div>

            <div class="flex items-center">
              <img
                :src="post.creator.img"
                alt="Profile Picture"
                class="w-14 h-14 rounded"
              >

              <div class="mx-4 flex">
                <div class="flex flex-col">
                  <div class="text-lg font-medium">
                    {{ post.creator.pseudo }}
                  </div>
                  <div class="text-sm">
                    {{ post.creator.role }}
                  </div>
                </div>
              </div>

              <div>
                <span class="pl-4 font-light text-5 flex flex-wrap space-x-4 items-center h-6 whitespace-nowrap overflow-hidden">
                  <div>Posté {{ timeAgo(post.createdAt, "long") }}</div>
                  <div class="flex space-x-1 pl-1">
                    <i class="ri-history-line" />
                    <div>{{ timeAgo(post.updatedAt, "long") }}</div>
                  </div>
                </span>
              </div>
            </div>
          </div>

          <div class="p-1 text-2 text-lg ml-20 text-justify">
            {{ post.content }}
          </div>
          <div class="my-3 ml-2">
            <div class="ml-20 flex items-center ri-lg space-x-4">
              <div
                v-for="(action,i) in actions"
                :key="i"
                class="flex items-center text-5"
                @click="actionsMap[action].action"
              >
                <i
                  :class="actionsMap[action].icon"
                  class="ri-md"
                />
                <p class="text-sm tracking-tighter pl-1 hidden md:block">
                  {{ actionsMap[action].name() }}
                </p>
              </div>
            </div>
          </div>

          <div class="ml-20">
            <div
              v-for="comment in post.comments"
              :key="comment"
            >
              <Comment :comment="comment" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Comment from './Comment.vue'
import { defineComponent } from 'vue'
import { timeAgo } from '../utils/timeAgo'
import { abbrNumbers } from '../utils/abbrNumbers'

export default defineComponent({
  components: {
    Comment
  },
  props: {
    post: {
      type: Object,
      default: () => {}
    },
    actions: {
      type: Array,
      default: function () {
        return [
          'viewComments',
          'favorite',
          'edit',
          'flag'
        ]
      }
    }
  },
  computed: {
    actionsMap () {
      // TODO: Actions
      return {
        viewComments: { name: () => { return `${this.post.comments.length} Commentaires` }, icon: 'ri-chat-2-line', action: function () { console.log('Commentaire') } },
        favorite: { name: () => { return 'Favori' }, icon: 'ri-star-line', action: function () { console.log('Favori') } },
        edit: { name: () => { return 'Éditer' }, icon: 'ri-edit-line', action: function () { console.log('Éditer') } },
        flag: { name: () => { return 'Signaler' }, icon: 'ri-flag-line', action: function () { console.log('Signaler') } }
      }
    }
  },
  methods: {
    timeAgo,
    abbrNumbers
  }
})
</script>
