<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('businesses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('industry');
            $table->string('location');
            $table->string('description');
            $table->decimal('funding_needed');
            $table->integer('stake_offered');
            $table->decimal('valuation');
            $table->boolean('isRecommended');
            $table->string('image');
            $table->string('video');
            $table->unsignedBigInteger('entrepreneur_id');
            $table->foreign('entrepreneur_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('investor_id');
            $table->foreign('investor_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('businesses');
    }
};
