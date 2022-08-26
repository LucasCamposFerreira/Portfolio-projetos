<template>
  <header class="headPag">
    <div id="titlePag">
      <h1 id="namePag">Portfólio - Lucas Campos</h1>
    </div>
    <nav>
      <div>
        <a
          class="icoCntt" id="github"
          href="https://github.com/LucasCamposFerreira?tab=repositories"
          target="_blank"
          ><img src="../assets/GitHub-Mark-32px.png" alt="img github"
        /></a>
        <a
          class="icoCntt"
          href="https://instagram.com/___lucascampos__"
          target="_blank"
          ><img src="../assets/instagram.png" alt="img instagram"
        /></a>
      </div>
    </nav>
  </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

.headPag {
  background: #bf172a;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 1.5em #2c2c2c70;
  margin-bottom: 50px;
}
.icoCntt {
  padding: 15px 13px 0 16px;
}
#github {
	border-right: 2px solid black;
}
header {
  position: relative;
}
#titlePag #namePag {
  position: absolute;
  top: 40%;
  color: black;
  font-family: "Staatliches", cursive; 
  font-size: 20px;
}
</style>