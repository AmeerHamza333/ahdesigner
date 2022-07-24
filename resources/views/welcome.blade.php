<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>
<body>
    

<form action = "{{url('/insert')}}" method = 'post' enctype = 'multipart/form-data'>
    @csrf

    <div class="container mt-5">
        
    
<div class="row " >
<div class="col">
    <label for="inputPassword4">Enter Name</label>
      <input name = "name" type="text" class="form-control" value = "" />
    </div>
    </div>

    <div class="row mt-3">
    <div class="col">
    <label for="inputPassword4">Enter Description</label>
      <input name = "description" type="text" class="form-control" value = "" />
    </div>
</div>
  

<div class="row mt-3">
  <div class="col">
      <label for="inputEmail4">Select Image</label>
      <input name = "image" type="file" class="form-control"/>
    </div>
</div>

<div class="row mt-3">
  <div class="col">
      <label for="inputEmail4">Enter URL</label>
      <input name = "link" type="text" class="form-control" />
    </div>
</div>

    <!-- <span class = 'text-danger'> 
@error('email')
{{$message}}
@enderror
</span> -->

<div class="row mt-3">
    <div class="col">
      <label for="inputPassword4">Date</label>
      <input name = "uploaddate" type="date" class="form-control" />
    </div>
</div>

<div class="row mt-3">
    <div class="col">
   
    <label for="inputPassword4">Category</label>
        <select class="form-select" name="category" aria-label="Default select example">
  <option selected>Select Category</option>
  <option value="psd">Websites designs</option>
  <option value="react">React websites </option>
  <option value="js">JS websites</option>
  <option value="logo">Logo Designing</option>
  <option value="posts">Social media posts & banners</option>
  <option value="animation">2d animation video</option>
</select>
    </div>
</div>


    <div class="container text-center mt-3">
        <button class="btn btn-primary mt-3" >Submit</button>
</div>
</form>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</body>
</html>