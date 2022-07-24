<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Portfolio;

class AhController extends Controller
{
    public function index(){
        return Portfolio::all();
    }
 
    public function main(){
        $portfolio = Portfolio::all();
     return view('home', compact('portfolio'));
 }
 
    public function insert(){
     return view('welcome');
 }
 
 public function store(Request $request){
     $portfolio = new Portfolio;
     $portfolio->name = $request->input('name');
     $portfolio->description = $request->input('description');
     if($request->hasfile('image')){
         $file = $request->file('image');
         $extension = $file->getClientOriginalExtension();
         $filename = time().'.'.$extension;
         $file->move('uploads/portfolios', $filename);
         $portfolio->image=$filename;
     }
     $portfolio->link = $request->input('link');
     $portfolio->uploaddate = $request->input('uploaddate');
     $portfolio->category = $request->input('category');
     $portfolio->save();
 
     return redirect('/')->with('flash_message', 'student Updated!');
 }
 
}


