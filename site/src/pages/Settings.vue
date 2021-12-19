<template>
  <div class="m-0 text-2">
    <div class="m-0 absolute py-12 hero h-52 w-full top-0 left-0" />
    <div class="height relative mt-10 mb-10 card p-0 bg-1 w-11/12 mx-auto flex">
      <div class="mt-2 flex-shrink-0">
        <ul class="py-2">
          <template
            v-for="link of links"
            :key="link"
          >
            <li
              class="
                h-12
                py-2
                pl-8
                pr-20
                flex
                w-full
                space-x-2
                items-center
                bg-mouse-brand
                cursor-pointer
              "
              :class="{ active: currentComponent === link.component }"
              @click="currentComponent = link.component"
            >
              <i
                class="ri-xl"
                :class="link.icon"
              />
              <span>{{ link.text }}</span>
            </li>
          </template>
        </ul>
      </div>

      <div class="border-l-2 border-footer w-full">
        <component :is="currentComponent" />
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Badge from '../components/Badge.vue'
import ExternalAccount from '../components/ExternalAccount.vue'
import Association from '../components/Association.vue'
export default {
  components: {
    Badge,
    ExternalAccount,
    Association
  },
  inheritAttrs: false,
  data () {
    return {
      currentComponent: Badge,
      links: [
        { text: 'Badges', icon: 'ri-profile-line', component: Badge },
        { text: 'Compte lié', icon: 'ri-links-line', component: ExternalAccount },
        { text: 'Assos', icon: 'ri-discord-fill', component: Association }
        // TODO: { text: "Rôles Ef'Réussite", icon: 'ri-book-mark-line', component: 'Roles' }
      ]
    }
  }

}
</script>

<style lang="scss">
.height {
  min-height: 24rem;
}
</style>
