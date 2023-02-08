<!DOCTYPE html>
<html lang="en">
<head>

@include('layout.meta')

 @include('layout.style')
</head>

<body>
  <div id="app">
    <div class="main-wrapper">
     @include('layout.nav')
     @include('layout.sidebar')

      <!-- Main Content -->
      <div class="main-content">
     @yield('content')
      </div>
    
    </div>
  </div>

 @include('layout.script')
</body>
</html>
