<template>
  <div class="main-wrapper">
    <div class="video-container">
      <video

        v-bind:class="[{hidden: isiOS}, 'video-background']"
        loop
        autoPlay
        muted
        preload="true"
      >
      <!-- autoPlay -->
        <source src="/bg.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="wrapper">
      <div class="content">
        <div class="title">
          <img src="/logo.svg">
        </div>
        <div class="subtitle">
          25 августа 2017
        </div>
        <div class="features">


        </div>
        <div class="links">
          <a href="https://yadi.sk/d/ZvW0IFpl3QBW2U" target="_blank">
              Фотографии
          </a>
          <a href="/clip.mp4" target="_blank">
              Клип
          </a>
          <a href="/wedding.mp4 " target="_blank">
              Видео
          </a>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        isiOS: false
      }
    },
    mounted: function() {
      const UA =  navigator.userAgent
      this.isiOS = (/iPad|iPhone|iPod/.test(UA)) && (!window.MSStream)
      document.getElementsByTagName('video')[0].volume = 0.3;
    }
  }
</script>

<style>

body > div, .main-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  z-index: 999;
  box-sizing: border-box;
}
.video-container {
position: absolute;
z-index: -1;
top: 0px;
left: 0px;
bottom: 0px;
right: 0px;
overflow: hidden;
background-image: url(/poster.png);
background-color: transparent;
background-size: cover;
background-position: 50% 50%;
background-repeat: no-repeat;
box-sizing: border-box;
}

.video-background {
margin: auto;
position: absolute;
z-index: -1;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
visibility: visible;
opacity: 1;
min-width: 100vw;
min-height: 100vh;
height: auto;
}

.wrapper {
width: 100%;
height: 100%;
overflow: auto;
padding: 40px 20px;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
z-index: 999;
box-sizing: border-box;
}

.content {
display: flex;
flex: 1 0 ;
flex-flow: column nowrap;
justify-content: center;
align-items: center;

}
@media (max-width: 980px) {
.content {
  justify-content: flex-start;
}
}

.title {
font-family: Helvetica Neue, sans-serif;
font-size: 4.5em;
margin: 0;
padding: 0;
color: white;
font-weight: 400;
line-height: 1.1;
}

.subtitle {
display: inline-block;
margin: 20px 0 0 0;
white-space: nowrap;
font-size: 1em;
letter-spacing: 1px;
color: white;
font-family: Open Sans,sans-serif;
}


.links {
margin-top: 5em;
margin-bottom: 1em;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
margin: 30px 15px;
}
.links a {
display: inline-block;
margin: 0 2em;
font-family: Open Sans,sans-serif;
text-decoration: none;
color: #fff;
}
.links a:visited {
  color: #fff;
}

.mail {
position: relative;
top: 50px;
color: white;
font-size: 30px;
margin-bottom: 30px;
}


</style>
