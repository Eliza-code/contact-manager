<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class=" h3 text-success fw-bold">Add Contact</p>
        <p class="fst-italic">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Name">
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Photo URL">
          </div>
          <div class="mb-2">
            <input type="emial" class="form-control" placeholder="Email">
          </div>
          <div class="mb-2">
            <input type="number" class="form-control" placeholder="Mobile">
          </div>
          <div class="mb-2">
            <select class="form-control">
              <option value="">Select Group</option>
            </select>
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Create">
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6rbCgaHI6TkSkS2Jzfggu2Z7FHcXBQJU2fEQmW7aSbJN_RTMR84Uf_wAAGKIiHRzU5Mc&usqp=CAU" alt="" class="contact-img">
      </div>
    </div>
  </div>
</template>
<script>

export default ({
  name: 'AddContact',
})
</script>

<style>

</style>
