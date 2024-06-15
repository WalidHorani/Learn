<?php
/*
|----------------------------------------------------------------------
|	blade Templet
|----------------------------------------------------------------------
|	1-	what is the blade templete ?
|			is the html document that will be return to user 
|	2-	how to show data that recevied from view function in your blade templet ?
|			{{ $varNameInBlade }}
|	3-	how to use vanila php ?
|			@php
|			@endphp
|	4-	how to make comment ?
|			{{-- This comment will not be present in the rendered HTML --}}
|	7-	how to make condatinal statment ?
|			@if(consd)
|			@elseif(cond)
|			@else
|			@endif
|
|			@unless (Auth::check())
|			@endunless
|
|			@isset($records)
|			@endisset
|			 
|			@empty($records)
|			@endempty
|	7-	how to make loop in blade templet ?
|			@for ($i = 0; $i < 10; $i++)
|			    @continue
|				@break
|			@endfor
|			 
|			@foreach ($users as $user)
|			    @continue
|				@break
|			@endforeach
|			 
|			@forelse ($users as $user)
|			    @continue
|				@break
|			@empty
|			    <p>No users</p>
|			@endforelse
|			 
|			@while (true)
|			    @continue
|				@break
|			@endwhile
| 	3-	how to make switch statment ?
|			@switch($i)
|			    @case(1)
|			        @break
|			    @case(2)
|			        @break
|			    @default
|			@endswitch
|	10-	how to make layout ?
|			@yield('sectionName') => Render content defined in a section of a layout template
|			@include('folderName.bladeName') => Include another Blade template within your current view
|			@extends => define the blade that the section will extend it 
|			@section('sectionName') => Define content in a layout template that can be overridden in individual views
|	9-	how to put link as route insaid href attribute with multable route parameter ?
|			{{ route('routeName', ['parameter1' => $value1, 'parameter2' => $value2]) }}
|	10-	what is the @csrf and what are do ?
|			the CSRF protection middleware can validate the request
|	11-	how to make
|			insaid form but @csrf
|	12-	what is the @method ?
|			HTML forms can't make PUT, PATCH, or DELETE requests, you will need to add a hidden _method field to spoof these HTTP verbs.The       |		      @method Blade directive can create this field for you
|	13-	how to make ?
|			insaid form but @method('PUT')
|	14-	how to make paginate ?
|			//orders represnt the model recourds that return
|			{{ $orders->links() }}
|	16-	why use {!! !!}
|			this allow html special chars  
|	18-	what is @error ?
|			used to quickly check if validation error messages exist for a given attribute
|	19-	how to make @error ?
|			<from>
|				<input type='email' name='email' />
|				@error('email')
|   			 	<div class="alert alert-danger">{{ $message }}</div>
|				@enderror
|			</form>
|	
*/


/*
|----------------------------------------------------------------------
|	how to show data that recevied from view function in your blade templet 
|----------------------------------------------------------------------
|	
|	
*/

	{{ $varNameInBlade }}


/*
|----------------------------------------------------------------------
|	how to use vanila php
|----------------------------------------------------------------------
|	
|	
*/
		@php
		@endphp


/*
|----------------------------------------------------------------------
|	how to make comment
|----------------------------------------------------------------------
|	
|	
*/

	{{-- This comment will not be present in the rendered HTML --}}


/*
|----------------------------------------------------------------------
|	how to make if statment
|----------------------------------------------------------------------
|	
|	
*/
	@if(consd)
	@elseif(cond)
	@else
	@endif

/*
|-----------------------------------------------------------------------------
|	how to make unless statment => execute only if the condation is false
|-----------------------------------------------------------------------------
|	
|	
*/
	@unless (Auth::check())
	@endunless


/*
|----------------------------------------------------------------------
|	how to make isset statment
|----------------------------------------------------------------------
|	
|	
*/
	@isset($records)
	@endisset


/*
|----------------------------------------------------------------------
|	how to make empty statment
|----------------------------------------------------------------------
|	
|	
*/
	@empty($records)
	@endempty


/*
|----------------------------------------------------------------------
|	how to make for statment
|----------------------------------------------------------------------
|	
|	
*/
	@for ($i = 0; $i < 10; $i++)
	    @continue
		@break
	@endfor


/*
|----------------------------------------------------------------------
|	how to make foreach statment
|----------------------------------------------------------------------
|	
|	
*/
	@foreach ($users as $user)
	    @continue
		@break
	@endforeach


/*
|---------------------------------------------------------------------------------
|	how to make forelse statment => if the $user is empty the @empty blook exexute
|---------------------------------------------------------------------------------
|	
|	
*/
	@forelse ($users as $user)
	    @continue
		@break
	@empty
	@endforelse


/*
|----------------------------------------------------------------------
|	how to make while statment
|----------------------------------------------------------------------
|	
|	
*/
	@while (true)
	    @continue
		@break
	@endwhile


/*
|----------------------------------------------------------------------
|	how to make switch statment
|----------------------------------------------------------------------
|	
|	
*/
	@switch($i)
	    @case(1)
	        @break
	    @case(2)
	        @break
	    @default
	@endswitch


/*
|----------------------------------------------------------------------
|	how to make layout
|----------------------------------------------------------------------
|	
|	
*/
	//layouts/master.blade.php
	<!DOCTYPE html>
	<html>
		<head>
		    <title>My Application @yield('title')</title>
		</head>
		<body>
		    @include('partials.header')
		    
		    <div class="container">
		        @yield('content')
		    </div>
		    
		    @include('partials.footer')
		</body>
	</html>

	//partials/header.blade.php
	<header>
    	<h1>My Application Header</h1>
	</header>
	
	//partials/footer.blade.php
	<footer>
    	<p>My Application Footer</p>
	</footer>

	//child.blade.php
	@extends('layouts.master')
	@section('title', 'Home Page')
	@section('content')
	    <h1>Welcome to the Home Page</h1>
	    <p>This is the content of the home page.</p>
	@endsection


/*
|----------------------------------------------------------------------
|	how to put link as route insaid href attribute with route parameter
|----------------------------------------------------------------------
|	
|	
*/

	<a href='{{ route('routeName', ['parameter1' => $value1, 'parameter2' => $value2]) }}'></a>

/*
|----------------------------------------------------------------------
|	how to make @csrf
|----------------------------------------------------------------------
|	
|	
*/
	<form>
		@csrf
	</form>


/*
|----------------------------------------------------------------------
|	how to make @method
|----------------------------------------------------------------------
|	
|	
*/
	<form>
		@method('PUT')
	</form>


/*
|----------------------------------------------------------------------
|	how to make paginations
|----------------------------------------------------------------------
|	
|	
*/
	//orders represnt the model recourds that return
	{{ $orders->links() }}


/*
|----------------------------------------------------------------------
|	how to make @error
|----------------------------------------------------------------------
|	
|	
*/
	<from>
		<input type='email' name='email' />
		@error('email')
 		 	<div class="alert alert-danger">{{ $message }}</div>
		@enderror
	</form>

?>