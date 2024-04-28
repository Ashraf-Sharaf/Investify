<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    use HasFactory;
    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    public function investor()
    {
        return $this->hasOne(User::class);
    }
}
