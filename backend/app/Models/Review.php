<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable=['rating','description','investor_id','business_id'];

    public function business()
    {
        return $this->belongsTo(Business::class);
    }

    public function investor()
    {
        return $this->belongsTo(User::class);
    }
}
