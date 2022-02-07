import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Olarenwaju',
          lastName: 'Balogun',
          areas: ['frontend', 'backend', 'career', 'fullstack'],
          description:
            "I am Olanrwaju, I have a master's degree in computer science, and so very passionate about science and most importantly, how it helps reshape the world. I currently work at SeamlessHR as a Senior backend engineer and also as a Postman supernova where my role actively involves educating the tech ecosystem through conference talks in-person or virtual.",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Aduni',
          lastName: 'Janet',
          areas: ['frontend', 'career'],
          description:
            'I am Janet and as a senior developer in a Starup, I can help you get your first job or progress in your current role.',
          hourlyRate: 25,
        },

        {
          id: 'c3',
          firstName: 'Adewale',
          lastName: 'Owoseni',
          areas: ['backend', 'Devops', 'cloud'],
          description:
            'I am ADewale and as a senior Devops enginner, I guidr you toward becomong an highly skilled  devops engineer and get your first DEvOps role.',
          hourlyRate: 50,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
