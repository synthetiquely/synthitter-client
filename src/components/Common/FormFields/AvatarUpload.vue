<template>
  <div class="avatar-upload-form">
    <div @dragenter.prevent="toggleHighlight(true)" @dragover.prevent="toggleHighlight(true)" @dragleave.prevent="toggleHighlight(false)" @drop.prevent="handleDrop" class="drop-area" :class="{ 'highlight': isHighlighted }">
      <form class="form">
        <label for="avatarUpload" v-show="!imagePreview.src" class="form__description">
          Drag and drop your image here
        </label>
        <input type="file" id="avatarUpload" accept="image/*" class="form__file">
      </form>
      <div v-if="imagePreview.src" class="avatar-preview">
        <img class="avatar-preview__image" :src="imagePreview.src" :alt="imagePreview.description">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvatarUpload',
  data() {
    return {
      isHighlighted: false,
      imagePreview: {},
    };
  },
  methods: {
    toggleHighlight(isHighlighted) {
      this.isHighlighted = isHighlighted;
    },
    handleDrop(event) {
      this.toggleHighlight(false);
      const dt = event.dataTransfer;
      const file = dt.files[0];
      this.handlePreviewFile(file);
      this.handleUpload(file);
    },
    handlePreviewFile(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        this.imagePreview = {
          description: 'user avatar',
          src: reader.result,
        };
      };
    },
    handleUpload(file) {
      const formData = new FormData();
      formData.append('avatar', file);
      this.$store.dispatch('uploadUserAvatar', formData);
    },
  },
};
</script>

<style scoped>
.drop-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  margin: 10px auto;
  padding: 5px;
  border: 2px dashed #ccc;
  border-radius: 50%;
  cursor: move;
}

.drop-area.highlight {
  border-color: #4caca4;
}

.avatar-preview__image {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
}

.form__description {
  display: inline-block;
  cursor: pointer;
}

.form__file {
  display: none;
}
</style>
