<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Business;

class BusinessController extends Controller
{
    public function add_business(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'industry' => 'required|string',
            'location' => 'required|string',
            'description' => 'required|string',
            'funding_needed' => 'required|numeric',
            'stake_offered' => 'required|numeric',
            'valuation' => 'required|numeric',

        ]);

        $entrepreneurID = Auth::id();
        $checkBusiness = Business::where('entrepreneur_id', $entrepreneurID)->first();
        if ($checkBusiness) {
            return response()->json([
                'status' => 403,
                'message' => "User already have a businesses"
            ]);
        }


        $file = $request->file('image');
        $extension = $file->getClientOriginalExtension();
        $filename = time() . '.' . $extension;
        $file->move(public_path('/business_images/'), $filename);

        $business = Business::create([
            'name' => $request->name,
            'industry' => $request->industry,
            'location' => $request->location,
            'description' => $request->description,
            'funding_needed' => $request->funding_needed,
            'stake_offered' => $request->stake_offered,
            'valuation' => $request->valuation,
            'entrepreneur_id' => $entrepreneurID,
            'image' => $filename
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Business added successfully'
        ]);
    }

    public function all_businesses()
    {
        $businesses = Business::whereNull('investor_id')->get();

        if ($businesses->isEmpty()) {
            return response()->json([
                'status' => 403,
                'message' => "No Businesses Found"
            ]);
        }
        return response()->json([
            'status' => 200,
            'message' => 'Businesses retrieved successfully',
            'businesses' => $businesses
        ]);
    }

    public function my_business()
    {
        $entrepreneurID = Auth::id();

        $business = Business::where('entrepreneur_id', $entrepreneurID)->first();

        if (!$business) {
            return response()->json([
                'status' => 204,
                'message' => "No Business Found"
            ]);
        }

        return response()->json([
            'status' => 200,
            'message' => 'Business retrieved successfully',
            'business' => $business
        ]);
    }

    public function edit_business(Request $request)
    {
        $entrepreneurID = Auth::id();


        $businessID = Business::where('entrepreneur_id', $entrepreneurID)->value('id');
        if (!$businessID) {
            return response()->json([
                'status' => 204,
                'message' => "No Business Found"
            ]);
        }

        $data = $request->all();

        $business = Business::findOrFail($businessID);
  

        foreach ($data as $attribute => $value) {
            if (!empty($value)) {
                $business->$attribute = $value;
            }
        }
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move(public_path('/business_images/'), $filename);
            $business->image=$filename;
        }

        $business->save();

        return response()->json([
            'status' => 200,
            'message' => 'Business edited successfully',

        ]);
    }


    public function get_business(Request $request)
    {

        $business = Business::where('id', $request->business_id)->first();
        if (!$business) {
            return response()->json([
                'status' => 204,
                'message' => "No Business Found"
            ]);
        } else {

            return response()->json([
                'status' => 200,
                'message' => 'Business retrieved successfully',
                'business' => $business

            ]);
        }
    }
}
