import BuildMarkUp from './lib/BuildMarkUp.js';
import $ from 'jquery'
const person = [{
    name: 'Roko',
    job: 'CEO',
    city: 'New York',
    bio: 'likes running,reading, listen to music',
    img: 'http://placehold.it/150/ff6969/'
},
{
    name: 'Max',
    job: 'CIO',
    city: 'Singapore',
    bio: 'likes running,reading, listen to music',
    img: 'http://placehold.it/150/ffb469/'
},

{
    name: 'Lucky',
    job: 'Fun Officer',
    city: 'Russia',
    bio: 'likes running,reading, listen to music',
    img: 'http://placehold.it/150/ff69b4/'
},
];



let s1 = new BuildMarkUp(person)

$("#div_content").html(s1.build);
