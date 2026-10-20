fx_version 'cerulean'
game 'gta5'

author 'FM Script'
description 'Loading screen for FiveM servers with a modern and sleek design. Fully customizable and easy to use.'
version '1.0.0'

client_script 'client/**.lua'
loadscreen 'html/index.html'

loadscreen_manual_shutdown 'yes'

files {
    'html/index.html',
    'html/css/style.css',
    'html/js/config.js',
    'html/js/app.js',
    'html/img/*.png',
    'html/img/*.jpg',
    'html/img/*.webp',
    'html/video/*.mp4',
    'html/video/*.webm',
    'html/sounds/*.mp3',
    'html/sounds/*.ogg',
    'html/fonts/*.woff2'
}
