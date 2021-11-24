<template>
  <div class="mx-auto pb-6 text-1">
    <div class="relative h-52 w-full">
      <div class="banner w-full h-full rounded-b" />
      <!-- <div class="flex absolute top-0 bg-gray-500 opacity-50 rounded items-center justify-center w-full h-full">
        Changer votre banniere
      </div> -->
      <img
        src="../assets/img/landing/guy_1.jpg"
        alt=""
        class="absolute right-10 -bottom-1/4 h-28 w-28 rounded-full"
      >
    </div>
    <div class="flex mt-10 px-4 w-full">
      <div class="flex flex-col min-h-screen pr-8 border-r-2 space-y-4 w-3/6">
        <div>
          <div class="text-2xl">
            Name
          </div>
          <div class="text-gray-500">
            Class
          </div>
        </div>

        <hr>
        <div>
          Badges
          <div class="flex mt-2 space-x-1">
            <i class="ri-medal-line ri-xl" />
            <i class="ri-medal-line ri-xl" />
            <i class="ri-medal-line ri-xl" />
            <i class="ri-medal-line ri-xl" />
          </div>
        </div>
        <hr>
        <div>
          Assos
          <div class="flex mt-2">
            Assos icon...
          </div>
        </div>
        <hr>
        <div>
          Compte
          <div class="flex mt-2 space-x-2">
            <img
              class="w-6 h-6"
              src="../assets/img/logos/discord.png"
              alt=""
            >
            <img
              class="w-6 h-6"
              src="../assets/img/logos/linkedin.png"
              alt=""
            >
          </div>
        </div>
      </div>
      <div class="flex-col mx-8 flex-grow space-y-4">
        <post-card-vue
          v-for="activitie in activities"
          :key="activitie.index"
          :post="activitie"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PostCardVue from '../components/Card/PostCard.vue'
export default {
  components: {
    PostCardVue
  },
  data () {
    return {
      activities: [
        { postId: 101, type: 3, locked: false, opened: false, solved: false, tags: [{ name: 'émargement' }, { name: 'présence' }, { name: 'promo:l2' }, { name: 'cours' }, { name: 'importance:moyenne' }, { name: 'fréquence:régulier' }], body: '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Problème observé: les étudiants sont parfois notés absents à des cours auxquels ils sont présents (particulièrement en ligne)"}]},{"type":"paragraph","content":[{"type":"text","text":"Solution potentielle: mettre en place un système d’émargement électronique officiel"}]}]}', title: 'Problème avec le système d\'émargement en L2', author: { username: 'Sophie H.', avatar: require('@/assets/img/landing/girl_1.jpg'), reputation: 50200 }, favorites: 33, upvotes: 243, views: 44653, downvotes: 3, createdAt: '2021-10-18T13:51:36.631Z', updatedAt: '2021-10-18T13:51:36.631Z' },
        { postId: 2201, type: 2, locked: false, opened: true, solved: true, tags: [{ name: 'terrasse' }, { name: 'promo:toutes' }, { name: 'matériel' }, { name: 'importance:moyenne' }, { name: 'difficulté:facile' }], body: '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Les poufs sur la terrasse au dessus du fab lab sont laissés en extérieur la nuit ce qui les salit quand il pleut."}]},{"type":"paragraph","content":[{"type":"text","text":"Peut-être que les étudiants pourraient être autorisés et encourager à les ranger dans le hall du Bât. C ou dans le Bât. A les soirs de pluie ?"}]}]}', title: 'Rangement des poufs sur la terrasse du Bât. I', author: { username: 'Jean R.', avatar: require('@/assets/img/landing/guy_1.jpg'), reputation: 2021 }, favorites: 104, upvotes: 1255, views: 27553, downvotes: 3, createdAt: '2021-10-15T13:51:36.631Z', updatedAt: '2021-10-17T13:51:36.631Z' },
        { postId: 3032, type: 1, locked: true, opened: false, solved: true, tags: [{ name: 'pave' }, { name: 'déclaration pave' }, { name: 'promo:toutes' }, { name: 'urgence:haute' }], body: '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"J\'ai entendu dire qu\'il y\'avait besoin de remplir une déclaration de PAVE pour avoir ses points pour un semestre donné, mais je ne la connais pas."}]},{"type":"paragraph","content":[{"type":"text","text":"Est-ce quelqu\'un pourrait me montrer comment faire, étape par étape ?"}]}]}', title: 'Comment déclarer sa PAVE ?', author: { username: 'Emma L.', avatar: require('@/assets/img/landing/girl_2.jpg'), reputation: 1234 }, favorites: 95, upvotes: 1004, views: 16993, downvotes: 3, createdAt: '2021-10-01T13:51:36.631Z', updatedAt: '2021-10-08T13:51:36.631Z' },
        { postId: 11093, type: 4, locked: false, opened: true, solved: false, tags: [{ name: 'stage' }, { name: 'sopra steria' }, { name: 'promo:m1' }, { name: 'expérience' }], body: '{"type":"doc","content":[{"type":"paragraph","content":[{"type":"text","text":"Bonjour à tous ! J\'ai reçu une proposition de stage chez Sopra, mais j\'hésite encore à l\'accepter"}]},{"type":"paragraph","content":[{"type":"text","text":"Pour ceux qui ont déjà fait un stage chez eux, comment fut votre expérience là-bas ? Avez-vous des conseils ?"}]}]}', title: 'Retour d\'expérience Sopra Steria', author: { username: 'Stéphane M.', avatar: require('@/assets/img/landing/guy_2.jpg'), reputation: 234 }, favorites: 12, upvotes: 430, views: 4683, downvotes: 3, createdAt: '2021-02-04T13:51:36.631Z', updatedAt: '2021-03-04T13:51:36.631Z' }
      ]
    }
  }
}
</script>

<style lang="scss">
.banner{
  background-color: #386376;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='96' viewBox='0 0 60 96'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2335313c' fill-opacity='0.44'%3E%3Cpath d='M36 10a6 6 0 0 1 12 0v12a6 6 0 0 1-6 6 6 6 0 0 0-6 6 6 6 0 0 1-12 0 6 6 0 0 0-6-6 6 6 0 0 1-6-6V10a6 6 0 1 1 12 0 6 6 0 0 0 12 0zm24 78a6 6 0 0 1-6-6 6 6 0 0 0-6-6 6 6 0 0 1-6-6V58a6 6 0 1 1 12 0 6 6 0 0 0 6 6v24zM0 88V64a6 6 0 0 0 6-6 6 6 0 0 1 12 0v12a6 6 0 0 1-6 6 6 6 0 0 0-6 6 6 6 0 0 1-6 6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
