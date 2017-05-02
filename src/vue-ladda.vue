<template>
  <button class="ladda-button" ref="ladda" :data-style="dataStyle" @click="e => $emit('click', e)">
    <span class="ladda-label"><slot>Submit</slot></span>
  </button>
</template>

<script>
  import Ladda from 'ladda';

  export default {
    name: 'LaddaButton',

    props: {
      dataStyle: {
        type: String,
        default: 'expand-left'
      },
      loading: {
        type: Boolean,
        required: true
      }
    },

    watch: {
      loading(loading) {
        loading ? this.ladda.start() : this.ladda.stop();
      }
    },

    mounted() {
      const l = Ladda.create(this.$refs.ladda);
      this.ladda = l;
      this.loading ? this.ladda.start() : this.ladda.stop();
    },

    beforeDestroy() {
      this.ladda.remove();
    }
  }
</script>

<style lang="scss">
  // TODO: make themed a option?
  @import '~ladda/css/ladda-themed.scss';
</style>
