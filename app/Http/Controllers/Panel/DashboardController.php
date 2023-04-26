<?php

namespace App\Http\Controllers\Panel;

use Inertia\Response;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return inertia('Panel/Dashboard');
    }
}
