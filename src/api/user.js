import axios from 'axios';

export default {
  uploadAvatar: payload => axios.post('/api/user/avatar/upload', payload),
};
