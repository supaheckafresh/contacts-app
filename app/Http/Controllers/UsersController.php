<?php

namespace App\Http\Controllers;

use App\User;
use Laravel\Lumen\Routing\Controller;

class UsersController extends Controller
{
    public function index ()
    {
        return User::all();
    }
}
