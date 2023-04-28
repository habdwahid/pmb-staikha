<?php

namespace App\Http\Controllers\Panel;

use Inertia\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class SettingsController extends Controller
{
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(): Response
    {
        return inertia('Panel/Settings');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $request->validate([
            'password' => ['required'],
            'newPassword' => ['required', 'string', 'max:255'],
        ]);

        $user = auth()->user();

        if (!Hash::check($request->password, $user->password)) {
            return back()->withErrors(['password' => __('auth.password')]);
        }

        User::where('id', $user->id)
            ->update([
                'password' => bcrypt($request->newPassword)
            ]);

        return to_route('panel.dashboard.index')
            ->with('status', 'Kata sandi berhasil diubah');
    }
}
