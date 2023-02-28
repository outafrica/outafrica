<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class DownloadFilesController extends Controller
{
    public function downloadResume()
    {
        // get path
        $coverResume = public_path() . "/files/george_outa_resume.pdf";

        // download file
        return response()->download($coverResume);
    }

    public function downloadCoverLetter()
    {
        // get path
        $coverLetter = public_path() . "/files/george_outa_cover_letter.pdf";

        // download file
        return response()->download($coverLetter);
    }
}
