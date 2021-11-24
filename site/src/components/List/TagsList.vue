<template>
  <div class="flex">
    <div
      ref="tagList"
      class="flex flex-wrap h-7 overflow-hidden"
    >
      <div
        v-if="tags.length === 0 || tags === undefined"
        class="text-1"
      >
        N/A
      </div>
      <template
        v-for="(tag,i) in tags"
        v-else
        :key="i"
      >
        <div class="flex">
          <tag
            :ref="setTagRef"
            :name="tag.name ?? tag"
            :color="'red-500'"
          />
          <!-- TODO: Link & tooltip preview
          <p class="text-0">
            {{ i }} {{ last }} {{ overflowing.length ? "true" : "false" }} {{ i == last }}
          </p> -->
          <div
            v-if="overflowing.length && i == last"
            class="text-blue-500 flex-shrink-0"
          >
            + {{ overflowing.length }} tags
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="js">
import debounce from 'lodash/debounce'
import { onBeforeUpdate, reactive, ref } from 'vue'
import Tag from '@/components/Tag.vue'

export default {
  components: {
    Tag
  },
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    const tagList = ref(null)
    let tagRefs = reactive([])
    const setTagRef = el => {
      if (el) {
        tagRefs.push(el)
      }
    }

    onBeforeUpdate(() => {
      tagRefs = []
    })

    return { tagRefs, tagList, setTagRef }
  },
  data () {
    const overflow = debounce(() => {
      this.overflowing = []
      this.last = null
      const getTop = el => el?.getBoundingClientRect()?.top ?? 0
      const startHeight = getTop(this.tagList)
      for (var i = 0; i < this.tagRefs.length; i++) {
        if (getTop(this.tagRefs[i].$el) > startHeight) {
          this.overflowing.push(this.tagRefs[i].name)
        } else {
          this.last = i
        }
      }
    }, 30)

    const tagsList$ = new ResizeObserver(overflow)

    return {
      overflowing: [],
      last: null,
      tagsList$,
      overflow
    }
  },
  mounted () {
    this.tagsList$.observe(this.tagList)
    this.overflow()
  },
  unmounted () {
    this.tagsList$.disconnect()
  }
}
</script>
