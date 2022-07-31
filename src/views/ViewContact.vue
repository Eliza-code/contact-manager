<template>
 <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class=" h3 text-success fw-bold">View Contact</p>
        <p class="fst-italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6rbCgaHI6TkSkS2Jzfggu2Z7FHcXBQJU2fEQmW7aSbJN_RTMR84Uf_wAAGKIiHRzU5Mc&usqp=CAU" alt="" class="contact-img">
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">Name: <span class="fw-bold">Name</span></li>
          <li class="list-group-item">Email: <span class="fw-bold">Email</span> </li>
          <li class="list-group-item">Mobile: <span class="fw-bold">Mobile</span> </li>
          <li class="list-group-item">Group: <span class="fw-bold">Group</span> </li>
        </ul>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <router-link to="/" class="btn btn-success "><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link>
      </div>
    </div>
  </div>

</template>
<script>

export default ({
  name: 'ViewContact',
})
</script>

<style>

</style>
