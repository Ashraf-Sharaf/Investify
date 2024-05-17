<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;;
use App\Models\Role;
use App\Models\User;
use App\Models\Business;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create([
            'name' => 'admin',
        ]);

        Role::create([
            'name' => 'investor',
        ]);

        Role::create([
            'name' => 'entrepreneur',
        ]);

        User::create([
            'first_name' => 'admin',
            'last_name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => 'password',
            'role_id' => 1
        ]);


        User::create([
            'first_name' => 'Ali',
            'last_name' => 'Mahmoud',
            'email' => 'ali@gmail.com',
            'password' => 'password',
            'role_id' => 3
        ]);
        User::create([
            'first_name' => 'Bob',
            'last_name' => 'Ibrahim',
            'email' => 'bob@gmail.com',
            'password' => 'password',
            'role_id' => 3
        ]);

        User::create([
            'first_name' => 'investor',
            'last_name' => 'investor',
            'email' => 'investor@gmail.com',
            'password' => 'password',
            'role_id' => 2
        ]);
        Business::create([
            'name'=>'GreenTech Solutions',
            'industry'=>'Renewable Energy',
            'location'=>'San Francisco, CA',
            'description'=>"A company focused on developing innovative solar panel technology to increase energy efficiency and reduce costs.",
            'funding_needed'=>5000000,
            'stake_offered'=>10,
            'valuation'=>50000000,
            'entrepreneur_id'=>2,
            'image'=>'greentech.png',
        ]);

        Business::create([
            'name'=>'FinTech Innovators',
            'industry'=>'Financial Technology',
            'location'=>'London, UK',
            'description'=>'A fintech firm that offers an advanced mobile platform for personal finance management and investment.',
            'funding_needed'=>7500000,
            'stake_offered'=>12,
            'valuation'=>62500000,
            'entrepreneur_id'=>3,
            'image'=>'fin.webp',
        ]);
    }
}
