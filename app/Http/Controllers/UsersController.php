<?php

namespace App\Http\Controllers;

use App\User;
use Laravel\Lumen\Routing\Controller;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function addUser(Request $request)
    {
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->password = $request->password;
        $user->img_url = $request->img_url;

        $user->save();
    }
}
