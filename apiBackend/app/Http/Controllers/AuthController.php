<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;  // Asegúrate de que el modelo de usuario esté correctamente importado
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // Validar la solicitud
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        // Buscar el usuario en la base de datos
        $user = User::where('email', $request->email)->first();

        // Verificar si el usuario existe y la contraseña es correcta
        if ($user && Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Acceso permitido',
                'user' => $user,
            ], 200); // Respuesta exitosa
        }

        // Si no se encuentra el usuario o la contraseña es incorrecta
        return response()->json([
            'message' => 'Credenciales incorrectas',
        ], 401); // Respuesta de error
    }
}
