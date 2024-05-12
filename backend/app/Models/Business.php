<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'industry',
        'location',
        'description',
        'funding_needed',
        'stake_offered',
        'valuation',
        'entrepreneur_id',
        'image'
    ];

    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    public function investor()
    {
        return $this->hasOne(User::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function favorites()
    {
        return $this->hasMany(Favorite::class);
    }
}
