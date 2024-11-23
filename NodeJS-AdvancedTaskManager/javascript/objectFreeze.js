'use strict'
const supportedLanguages = {
    'af': 'Afrikaans',
    'bn': 'Bengali',
    'de': 'German',
    'en': 'English',
    'fr': 'French'
  }

const freeze = Object.freeze(supportedLanguages);


//   delete supportedLanguages.bn;

// supportedLanguages['rn']= 'ramnamratha';
 freeze['rn']= 'ramnamratha';
  console.log(supportedLanguages);