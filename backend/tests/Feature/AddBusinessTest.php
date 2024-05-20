<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Models\Business;
use Tests\TestCase;

class AddBusinessTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {

        $response = $this->post('/api/get_business', [
            'business_id' => 1,



        ]);

        $response->assertStatus(200);
    }
}
