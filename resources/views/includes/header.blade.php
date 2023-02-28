<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ env('APP_NAME') }}</title>
    <link rel="icon" href="{{ asset('/favicon.ico') }}">
    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/profile/profile.css') }}">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">


    {{-- get token and share to vue --}}
    <script>
        (function() {
            window.Laravel = {
                csrfToken: '{{ csrf_token() }}'
            };
        })();
    </script>


</head>

<body>
