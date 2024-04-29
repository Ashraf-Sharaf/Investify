<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\UserRole;
use App\Models\Role;
use App\Models\User;

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
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => 'password'
        ]);

        User::create([
            'name' => 'investor',
            'email' => 'investor@gmail.com',
            'password' => 'password'
        ]);

        User::create([
            'name' => 'start',
            'email' => 'start@gmail.com',
            'password' => 'password'
        ]);


        UserRole::create([
            'role_id' => 1,
            'user_id' => 1
        ]);

        UserRole::create([
            'role_id' => 2,
            'user_id' => 2
        ]);

        UserRole::create([
            'role_id' => 3,
            'user_id' => 3
        ]);
    }
}
