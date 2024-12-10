<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Email;

class EmailController extends Controller
{
    public function guardarCorreo(Request $request)
    {
        $request->validate([
            'correo' => 'required|email|unique:emails,correo'
        ]);

        $correo = new Email();
        $correo->correo = $request->correo;
        $correo->save();

        return response()->json(['message' => 'Correo guardado con éxito'], 200);
    }
}

