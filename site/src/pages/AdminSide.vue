<template>
  <div class="m-4 flex flex-col border-t card">
    <div class="flex space-x-4 justify-between">
      <div class="flex text-4 space-x-3 justify-center">
        <p>{{ bookmarks }} bookmarks</p>
        <p>{{ votes }} votes</p>
        <p>{{ answers }} answers</p>
      </div>
      <!-- <div class="flex flex-col bg-green-600 text-white py-5 px-2 items-center justify-center rounded-md" /> -->
    </div>

    <div class="flex flex-grow items-end flex-wrap">
      <div>
        <p class="text-blue-600 font-bold text-xl">
          Indentation Problem
        </p>
        <p class="line-clamp-2 mb-3">
          {{ description }}
        </p>
        <div class="flex flex-wrap">
          <TagsList :tags="tags" />
          <div class="flex space-x-2 self-end ml-auto">
            <p class="text-gray-300">
              Oct 1 at 14:19
            </p>
            <p class="text-blue-400">
              questionto42
            </p>
            <p class="text-gray-700">
              2,236
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import TagsList from '../components/List/TagsList.vue'
export default {
  components: { TagsList },
  props: {
    votes: {
      type: Number,
      default: 321
    },
    bookmarks: {
      type: Number,
      default: 23
    },
    answers: {
      type: Number,
      default: 19
    },
    description: {
      type: String,
      default: 'Lorem ipsum dolorem sum ipshat lius deus promptus ipsum deus promptus ipsum dolorem sum ipshat lius deus promptus deus promptus ipsum dolorem sum ipshat lius deus promptus deus promptus ipsum dolorem sum ipshat lius deus promptus dolorem sum ipshat lius deus promptus ipsum dolorem sum ipshat lius deus promptus'
    },
    tags: {
      type: Array,
      default: () => [{ name: 'python' }, { name: 'indentation' }]
    }
  }
}
</script>
