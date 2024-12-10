<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Producto::all(),200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        /*$request->validate([
            'nombre'=>'required|string',
            'precio'=>'required|integer',
            'stock'=>'required|integer',
            'categoria'=>'required|enum'
        ]);*/

        $producto = Producto::create($request->all());
        return response()->json($producto,201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Producto $producto)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Producto $producto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $id)
    {
        $producto = Producto::find($id);
        if(is_null($producto)){
            return response()->json(["mensaje" => "producto no encotrado"],404);
        }
        $producto->update($request->all());
        return response()->json($producto,201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $producto = Producto::find($id);
        if(is_null($producto)){
            return response()->json(["mensaje" => "Empleado no encontrado"],404);
        }
        $producto->delete();
        return response()->json(['message' => 'Usuario eliminado con éxito']);
    }
}
