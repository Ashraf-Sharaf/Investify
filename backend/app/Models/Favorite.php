<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    use HasFactory;

    protected $fillable = [
        'investor_id',
        'business_id',
    ];

    public function business()
    {
        return $this->belongsTo(Business::class);
    }

    public function investor()
    {
        return $this->belongsTo(User::class);
    }
}
