<template>
  <div>
    <div v-if="$fetchState.error">
      Error while fetching data: {{ $fetchState.error.message }}
    </div>
    <div v-else-if="$fetchState.pending">
      Loading artist
    </div>
    <div v-else>
      <article class="prose lg:prose-xl">
        <h2>{{ artist.name }}</h2>
        <p>Real name: {{ artist.realname }}</p>
        <p>{{ artist.profile }}</p>
        <p v-for="url of artist.urls" :key="url">
          <a target="_blank" :href="url">{{ url }}</a>
        </p>
        <h2>Releases</h2>
        <pre v-for="release of releases.releases" :key="JSON.stringify(release)">{{ release }}</pre>
      </article>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Id',
  async fetch () {
    this.artist = await this.$http.$get(`artists/${this.artistId}`)
    this.releases = await this.$http.$get(`artists/${this.artistId}/releases`)
  },
  data () {
    return {
      artist: null,
      releases: []
    }
  },
  computed: {
    artistId () {
      return parseInt(this.$route.params.id)
    }
  },
  mounted () {
    this.$store.commit('SET_BREADCRUMB_LINKS', this.$route.path.split('/'))
  }
}
</script>

<style scoped>

</style>
