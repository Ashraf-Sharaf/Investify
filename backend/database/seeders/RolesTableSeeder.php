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
            'first_name' => 'admin',
            'last_name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => 'password',
            'role_id' => 1
        ]);

        User::create([
            'first_name' => 'investor',
            'last_name' => 'investor',
            'email' => 'investor@gmail.com',
            'password' => 'password',
            'role_id' => 2
        ]);

        User::create([
            'first_name' => 'start',
            'last_name' => 'start',
            'email' => 'start@gmail.com',
            'password' => 'password',
            'role_id' => 3
        ]);
    }
}
