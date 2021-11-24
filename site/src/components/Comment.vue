<template>
  <div class="flex">
    <div
      class="
      text-1 text-sm
      p-1
    "
    >
      <div class="flex">
        <div>
          {{ comment.content }}
          <nobr class="font-bold">
            &nbsp;- {{ comment.author }}<nobr />
          </nobr>
          <span class="pl-2">
            <!-- TODO: Actions -->
            <i class="ri-heart-line" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Comment',
  props: {
    comment: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
  }
})
</script>
