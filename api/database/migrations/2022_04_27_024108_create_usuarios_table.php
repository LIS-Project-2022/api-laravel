<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id('id_usuario');
            $table->string('nombres', 50);
            $table->string('apellidos', 50);
            $table->string('correo', 100);
            $table->string('usuario', 50);
            $table->string('password', 50);
            $table->foreignId('id_tipo_usuario')
                ->nullable()
                ->constrained('tipos_usuario', 'id_tipo_usuario');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
};
