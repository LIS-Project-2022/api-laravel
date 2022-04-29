<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    protected $table = 'usuarios';
    protected $primaryKey = 'id_usuario';
    protected $fillable = ['nombres', 'apellidos', 'correo', 'usuario', 'password', 'id_tipo_usuario'];
    public $timestamps = false;

    public function tiposUsuario()
    {
        return $this->belongsTo(TipoUsuario::class, 'id_tipo_usuario');
    }
}
