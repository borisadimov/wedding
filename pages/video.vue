<template>
  <div class="main-wrapper">
    <div class="wrapper">
      <div class="content">
        <iframe src="//vk.com/video_ext.php?oid=-35557284&id=456239017&hash=4fba68343a989e50" width="426" height="240" frameborder="0" allowfullscreen></iframe>
      </div>
      </div>
    </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Wedding 25/08/2017'
      }
    }
  }
</script>

<style>

body > div, .main-wrapper {
  background: #000;
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


</style>
