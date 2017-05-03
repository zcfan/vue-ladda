<template>
  <button class="ladda-button" ref="ladda" :data-style="dataStyle" @click="handleClick">
    <span class="ladda-label"><slot>Submit</slot></span>
  </button>
</template>

<script>
  import Ladda from 'ladda';

  export default {
    name: 'VueLadda',

    props: {
      // use vue props validation to make sure "data-style" is given. (ladda need it)
      "dataStyle": {
        type: String,
        default: 'expand-left'
      },
      // loading prop to change the status of this component.
      loading: {
        type: Boolean,
        required: true
      },
      progress: {
        validator: function(progress) {
          return progress >= 0 && progress <= 1
        },
        default: 0
      }
    },

    watch: {
      loading: function(loading) {
        loading ? this.ladda.start() : this.ladda.stop();
      },

      progress: function(progress) {
        this.ladda.setProgress(progress)
      }
    },

    methods: {
      handleClick: function(e) {
        this.$emit('click', e)
      }
    },

    mounted: function() {
      const l = Ladda.create(this.$refs.ladda);
      this.ladda = l;
      this.loading ? this.ladda.start() : this.ladda.stop();
    },

    beforeDestroy: function() {
      this.ladda.remove();
    }
  }
</script>

<style lang="scss">
  // TODO: make themed a option?
  @import '~ladda/css/ladda-themed.scss';
</style>
