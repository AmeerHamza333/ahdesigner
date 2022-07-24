<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>AH Designer</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

<link
rel="stylesheet"
href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

<link
rel="stylesheet"
href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>



<link href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Edu+TAS+Beginner&family=Josefin+Slab:wght@100&family=Koulen&family=Philosopher&family=Righteous&display=swap" rel="stylesheet">

<!-- <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> -->

<link rel="manifest" crossorigin="use-credentials" href="manifest.json"/>


        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite('resources/js/app.jsx')
        @inertiaHead
    </head>
    <body class="font-sans antialiased" >
    
        @inertia

    
    </body>

  
 
<script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.5/waypoints.min.js"></script>

</html>
