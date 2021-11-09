<template>
  <div class="text-1 bg-white">
    <div v-if="step == 1"
    class="mx-4 p-10">
        <div class="flex items-center">
            <div class="flex items-center text-teal-600 relative">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark ">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Informations principales</div>
            </div>
            <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
            <div class="flex items-center text-gray-500 relative">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus ">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <line x1="20" y1="8" x2="20" y2="14"></line>
                        <line x1="23" y1="11" x2="17" y2="11"></line>
                    </svg>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Infos complémentaires</div>
            </div>
            <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
            <div class="flex items-center text-gray-500 relative">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail ">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Finalisation</div>
            </div>
        </div>
    </div>
    <div v-if="step == 2"
    class="mx-4 p-10">
        <div class="flex items-center">
            <div class="flex items-center text-teal-600 relative">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark ">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Informations principales</div>
            </div>
            <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
            <div class="flex items-center text-white relative">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus ">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <line x1="20" y1="8" x2="20" y2="14"></line>
                        <line x1="23" y1="11" x2="17" y2="11"></line>
                    </svg>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Infos complémentaires</div>
            </div>
            <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
            <div class="flex items-center text-gray-500 relative">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail ">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Finalisation</div>
            </div>
        </div>
    </div>
    <div v-if="step == 3"
    class="mx-4 p-10">
        <div class="flex items-center">
            <div class="flex items-center text-teal-600 relative">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark ">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Informations principales</div>
            </div>
            <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
            <div class="flex items-center text-white relative">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus ">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <line x1="20" y1="8" x2="20" y2="14"></line>
                        <line x1="23" y1="11" x2="17" y2="11"></line>
                    </svg>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Infos complémentaires</div>
            </div>
            <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
            <div class="flex items-center text-teal-600 relative">
                <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 text-teal-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail ">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                </div>
                <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Finalisation</div>
            </div>
        </div>
    </div>
   <form
    id="FileUpload"
    class="bg-white shadow-md rounded px-20 pt-6 pb-8 mb-4 ">
    <section v-if="step == 1">
      <h3> Step 1 </h3>
      <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Quelle est la matière du document">
      <h4> Filière </h4>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="text" placeholder="Quelle est la filière associé à ce document">
      <h4> Type de document</h4>
      <select
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <option value="DE">DE</option>
        <option value="CE">CE</option>
        <option value="TD">TD</option>
        <option value="Fiche">Fiche</option>
        <option value="Projet/TAI">Projet/TAI</option>
        <option value="Interro de TD">Interro de TD</option>
        <option value="Cours Efrei">Cours Efrei</option>
        <option value="Cours d'eProf">Cours d'eProf</option>
        <option value="DM">DM</option>
        <option value="Notes de cours">Notes de cours</option>
      </select>
      <h4>Contenu du dépôt</h4>
      <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <option value="Sujet">Sujet</option>
        <option value="Corrigé">Corrigé</option>
        <option value="Sujet + Corrigé">Sujet + Corrigé</option>
        <option value="Copie d'étudiant">Copie d'étudiant</option>
      </select>
      <h3>Année du document (Promo)</h3>
      <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
      </select>
      <h4> Documents similaires </h4>
    <pre>
      ref="response"
      class="mb-4"
    </pre>
    <button
      class="button"
      @click="search"
    >
      Search
    </button>

    <pre>
      ref="receive"
      class="mb-4"
    </pre>

    <input
      ref="fileId"
      type="number"
      class="input input-border text-2 bg-2"
    >
    <button
      class="button ml-4"
      @click="show=`${filesEndpoint}/get-file/${fileId.value}`"
    >
      Show
    </button>
      <p> Vérifiez bien que le document que vous uploadez n'est pas déjà dans les documents déjà uploadés ! </p>

    </section>
    <section v-if="step == 2">
      <h3> Step 2 </h3>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Complément du nom">
      <h4>Description du document </h4>
      <textarea placeholder="description du document" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"></textarea>
    </section>
    <section v-if="step == 3">
      <h3> Step 3 </h3>
      <p> Disclaimer: si vous uploadez un fichier, il sera public et accessible par tous
    Si vous souhaitez que des informations soient floutées, corrigées ou généralement modifiées, nous vous ferrons une proposition avec des informations sensibles retirées et attendrons votre confirmation avant de rendre le fichier public </p>
      <p> Êtes-vous d'accord ? </p>
      <input type="radio" class="ml-5" name="accord"> Oui<input type="radio" class="ml-5" name="accord">Non
    </section>
    <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    v-if="step != 1"
    @click.prevent="PreviousStep"> Previous Step </button>
    <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4 mt-2"
    v-if="step!= totalsteps"
    @click.prevent="NextStep"> Next Step </button>
    <button
    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ml-4"
    v-if="step==3"
    @click="Upload">Finish </button>
  </form>
  <div class="flex w-full h-screen items-center justify-center bg-grey-lighter">
    <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span class="mt-2 text-base leading-normal">Select a file</span>
        <input type='file' class="hidden" />
    </label>
  </div>
</div>
</template>

<script lang="js">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'FileUpload',
  setup () {
    const fileInput = ref(null)
    const fileId = ref(null)
    const receive = ref(null)
    const response = ref(null)

    return {
      fileInput, fileId, receive, response
    }
  },
  data () {
    return {
      files: [],
      filesEndpoint: 'http://localhost:5000/files',
      studyDocsEndpoint: 'http://localhost:5000/files/study-docs',
      show: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.auth.status.loggedIn
    }
  },
  methods: {
    async upload () {
      const file = this.fileInput.files[0]

      if (this.loggedIn) {
        if (file) {
          const data = new FormData()
          data.append('file', file)
          this.$store.dispatch('files/addStudyDoc', data).then(
            data => {
              this.response.innerHTML = JSON.stringify(data)
              this.studyDocs = this.$store.state.files.studyDocs
            },
            error => {
              this.message = (error.response && error.response.data) || error.message || error.toString()
            }
          )
        }
      } else {
        this.response.innerHTML = 'Upload : Vous devez être connecté pour uploader un fichier !'
      }
    },

    async search () {
      if (this.loggedIn) {
        this.$store.dispatch('files/searchStudyDocs', { page: this.$store.state.posts.page }).then(
          data => {
            this.receive.innerHTML = JSON.stringify(data)
            this.studyDocs = this.$store.state.files.studyDocs
          },
          error => {
            this.message = (error.response && error.response.data) || error.message || error.toString()
          }
        )
      } else {
        this.receive.innerHTML = 'Receive : Vous devez être connecté pour uploader un fichier !'
      }
    }
  }
})
</script>
