<?php
/*
|----------------------------------------------------------------------
|	view
|----------------------------------------------------------------------
|	1-	what is the view ?
|			view is function that identefy the blad templet that that we want to send to user the view function recive data from controller and |			 then pass it to blade templet 
|	2-	how to show blade templet that exisite insaid view folder
|			return view('bladeName');
|	3-	how to show blade templet that exisite in subfolder in view folder
|			return view('folderName.bladeName');
|	4-	how to send data using view function to balde templete ?
|			1- 	return view('folderName.bladeName')->with('varNameInBlade',$vlaue)->with('varNameInBlade',$value);
|			2-	$data =  ['varNameInBlade'=>$value,'varNameInBlade'=>$value] ;
|				return view('folderName.bladeName',$data);
*/

/*
|----------------------------------------------------------------------
|	how to show blade templet that exisite insaid view folder
|----------------------------------------------------------------------
|	
*/

	return view('bladeName');

/*
|----------------------------------------------------------------------
|	how to show blade templet that exisite in subfolder in view folder
|----------------------------------------------------------------------
|	
*/

	return view('folderName.bladeName');

/*
|----------------------------------------------------------------------
|	how to send data using view function to balde templete
|----------------------------------------------------------------------
|	
*/
	return view('folderName.bladeName')->with('varNameInBlade',$vlaue)->with('varNameInBlade',$value);
	
	$data =  ['varNameInBlade'=>$value,'varNameInBlade'=>$value] ;
	return view('folderName.bladeName',$data);


?>