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
            $table->integer('funding_needed');
            $table->integer('stake_offered');
            $table->integer('valuation');
            $table->boolean('isRecommended')->nullable();
            $table->string('image')->nullable();
            $table->string('video')->nullable();
            $table->unsignedBigInteger('entrepreneur_id');
            $table->foreign('entrepreneur_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('investor_id')->nullable();
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
