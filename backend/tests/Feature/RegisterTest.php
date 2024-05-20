<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Facades\Hash;

class RegisterTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {   
        $password='12341234';
        $hashedPassword=Hash::make($password);
        $response = $this->post('/api/register',[
            'first_name'=>'ashraff',
            'last_name'=>'sharaff',
            'email'=>'shara@gmail.com',
            'password'=>$hashedPassword
        ]);

        $response->assertStatus(200);
    }
}
