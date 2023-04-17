<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Ambientes;

class HomeController extends Controller
{
    
    public function home()
    {
        try {
            $user = User::where('rol', '=', 'Coordinador')->first();
            $data = Ambientes::where('sede', '=', 'yamboro')->first();
            return response()->json(['user' => $user, 'data' => $data], 200);
        } catch (\Exception $e) {
            return response($e, 404);
        }
    }

}
