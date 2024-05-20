<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RegisterTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->post('/api/register',[
            'first_name'=>'ashraff',
            'last_name'=>'sharaff',
            'email'=>'sharaf@gmail.com',
            'password'=>'12345678'
        ]);

        $response->assertStatus(200);
    }
}
