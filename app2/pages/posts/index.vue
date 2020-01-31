<template>
<div class="posts-page">
    <section class="post-list">
        <PostPreview
        id="1"
        thumbnail="https://i.pinimg.com/originals/74/22/87/742287c1114542dd95e2befa3e653c06.png"
        title="Hello there"
        previewText = "This is my first post!" />
        <PostPreview
        id="2"
        thumbnail="https://i.pinimg.com/originals/74/22/87/742287c1114542dd95e2befa3e653c06.png"
        title="Hello there"
        previewText = "This is my post no!" />
        <PostPreview
        id="3"
        thumbnail="https://i.pinimg.com/originals/74/22/87/742287c1114542dd95e2befa3e653c06.png"
        title="Hello there"
        previewText = "This is my 3 post!" />
    </section>
</div>
</template>

<style scoped>
.post-page {
    display: flex;
    justify-content: center;
    align-items: center;
}

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>