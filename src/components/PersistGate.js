export default {
  name: "persist-gate",
  props: ['persistor', 'onBeforeLift', 'loading'],
  data () {
    return {
      bootstrapped: false,
    }
  },

  mounted () {
    this._unsubscribe = this.persistor.subscribe(
      this.handlePersistorState
    );
    this.handlePersistorState()
  },

  methods: {
    handlePersistorState () {
      let { bootstrapped } = this.persistor.getState();
      if (bootstrapped) {
        if (this.onBeforeLift) {
          Promise.resolve(this.onBeforeLift())
            .finally(() => this.bootstrapped = true );
        } else {
          this.bootstrapped = true;
        }
        this._unsubscribe && this._unsubscribe();
      }
    }
  },

  beforeDestroy () {
    this._unsubscribe && this._unsubscribe()
  },

  /**
   *
   * @param h
   * @returns {any}
   */
  render (h) {
    if (process.env.NODE_ENV !== 'production') {
      if (this.$slots.default && this.loading)
        console.error(
          'redux-persist: PersistGate expects either a function child or loading prop, but not both. The loading prop will be ignored.'
        )
    }

    return this.bootstrapped ? this.$slots.default : this.loading
  }
}
