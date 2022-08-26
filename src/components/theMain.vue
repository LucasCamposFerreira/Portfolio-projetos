<template>
  <main>
    <section id="reps">
      <div class="modal1">
        <div class="modal-wrapper">
          <h3 class="titleModal">Wise Goat</h3>
          <img src="../assets/bodezinho.png" alt="bode" class="Imgs" />
          <p><a href="https://github.com/LucasCamposFerreira/WiseGoat" target="_blank">Clique aqui para acessá-la ></a></p>
        </div>
      </div>
      <div class="modal2">
        <div class="modal-wrapper">
          <h3 class="titleModal">Netflix - Login</h3>
          <img src="../assets/netflix.png" alt="netflix" class="Imgs" />
          <p><a href="https://github.com/LucasCamposFerreira/pag-netflix">Clique aqui para acessá-la ></a></p>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.modal1, .modal2 {
  width: 60%;
  display: flex;
  justify-content: center;
  align-content: space-around;
}
.modal-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px 100px;
  border: 5px solid none;
  border-radius: 40px;
  box-shadow: 0 0 1em #2c2c2c70;
}
.Imgs {
  align-self: center;
  width: 200px;
  padding: 10px 0 10px 0;
}
.titleModal {
  align-self: center;
  padding: 10px 0 10px 0;
}
#reps {
  display: flex;
  justify-content: space-between;
}
</style>