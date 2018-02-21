export default {
  state: {
    tweets: [],
  },
  getters: {
    tweets(state) {
      return state.tweets;
    },
    userTweets(state, getters) {
      return getters.tweets.filter(tweet => tweet.user._id === state.user._id);
    },
    tweet(state) {
      return tweetId => {
        return state.tweets.find(tweet => tweet._id === tweetId);
      };
    },
  },
  mutations: {
    setTweets(state, payload) {
      state.tweets = payload;
    },
    createTweet(state, payload) {
      state.tweets.push(payload);
    },
  },
  actions: {
    fetchTweets({ commit }) {
      commit('setLoading', true);
      commit('setError', null);
      // make a api call
    },
    createTweet({ commit }) {
      commit('setLoading', true);
      commit('setError', null);
      // make a api call
    },
  },
};
