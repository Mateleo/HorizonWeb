<template>
  <ais-instant-search
    :search-client="searchClient"
    index-name="studyDoc"
  >
    <ais-search-box />
    <ais-hits>
      <template #item="item">
        <div>
          <h2>{{ item.name }}</h2>
        </div>
      </template>
    </ais-hits>
  </ais-instant-search>
</template>

<script>
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter'

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: '2YQIisgfRgm8PV1IVyFZSyOwGMxrk7MU5DgEJICGfql30EPd', // Be sure to use an API key that only allows search operations
    nodes: [
      {
        host: 'localhost',
        port: '8108',
        protocol: 'http'
      }
    ],
    cacheSearchResultsForSeconds: 2 * 60 // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  queryBy is required.
  additionalSearchParameters: {
    queryBy: 'title,author,content,courseCode,year,description'
  }
})
const searchClient = typesenseInstantsearchAdapter.searchClient

export default {
  data () {
    return {
      searchClient
    }
  }
}
</script>
