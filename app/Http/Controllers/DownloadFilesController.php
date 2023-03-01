<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class DownloadFilesController extends Controller
{
    protected $headers = [
        'Content-Type' => 'application/pdf'
    ];

    public function downloadResume()
    {
        // get path
        $coverResume = public_path() . "/files/george_outa_resume.pdf";

        // download file
        return response()->download($coverResume, 'george_outa_resume.pdf', $this->headers);
    }

    public function downloadCoverLetter()
    {
        // get path
        $coverLetter = public_path() . "/files/george_outa_cover_letter.pdf";

        // download file
        return response()->download($coverLetter, 'george_outa_cover_letter.pdf', $this->headers);
    }
}
