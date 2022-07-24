<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    protected $table = 'portfolios';
    protected $primaryKey = 'portfolio_id';
    protected $fillable = ['name', 'description', 'image', 'link', 'uploaddate', 'category'];
}
