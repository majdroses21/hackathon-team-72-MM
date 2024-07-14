<template>
 <Head>
    <Title>Error 404</Title>
 </Head>
  <h1 class="Err4">Error</h1>
  <h3 class="err">
    {{ error }}
  </h3>
  <div class="btn-back">
    <NuxtLink to="/">
      <v-btn color="#fab231" class="btnsearch" style="color: #fff" rounded
        >Back Home</v-btn
      >
    </NuxtLink>
  </div>
</template>
<style scoped>
body {
  background: url("/images/e.jpg");
  background-repeat: no-repeat;
  background-size: 60%;
  background-position-x: center;
}
.Err4 {
  text-align: center;
  margin-top: 190px;
  font-size: 53px;
}
.err {
  text-align: center;
  margin-top: 130px;
}

.btn-back {
  text-align: center;
  margin-top: 30px;
  /* margin-left: auto; */
}
@media (max-width: 490px) {
  body {
    background-size: 100%;
    background-position-y: 100%;
    margin-top: 355px !important;
  }
  .Err4 {
    position: absolute;
    font-size: 30px;
    margin-top: -130px;
    margin-left: 150px;
  }
}
</style>

<script setup>
defineProps(["error"]);
</script>
