<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UsuariosController extends Controller
{
    // Registro de usuario
    public function register(Request $request)
    {
        $request->validate([
            'usuario' => 'required|unique:usuarios',
            'password' => 'required|min:6',
            'tipo' => 'required|in:cliente,administrador',
        ]);

        $usuario = Usuario::create([
            'usuario' => $request->usuario,
            'password' => Hash::make($request->password),
            'tipo' => $request->tipo,
        ]);

        return response()->json(['message' => 'Usuario registrado exitosamente'], 201);
    }

    // Login de usuario
    public function login(Request $request)
    {
        $request->validate([
            'usuario' => 'required',
            'password' => 'required',
        ]);

        $usuario = Usuario::where('usuario', $request->usuario)->first();

        if (!$usuario || !Hash::check($request->password, $usuario->password)) {
            return response()->json(['message' => 'Credenciales incorrectas'], 401);
        }

        return response()->json(['message' => 'Login exitoso', 'tipo' => $usuario->tipo], 200);
    }
}
