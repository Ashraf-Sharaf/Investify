<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    use HasFactory;

    protected $fillable=['date','start_time','end_time'];

    public function attendees()
    {
        return $this->hasMany(Attendee::class);
    }
}
