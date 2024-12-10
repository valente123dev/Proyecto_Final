<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $primaryKey = 'id';
    protected $fillable = [
        'nombre',
        'precio',
        'stock',
        'categoria'
    ];
    public $timestamps = true;
}
