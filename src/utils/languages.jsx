import React from 'react';
import * as locales from 'date-fns/locale';

export const appLanguages = {
        af: { locale: locales.af, native: 'Afrikaans', english: 'Afrikaans' }, 
        // ar: { locale: locales.ar, native: 'العربية', english: 'Arabic' },
        az: { locale: locales.az, native: 'azərbaycan dili', english: 'Azerbaijani' },
        be: { locale: locales.be, native: 'беларуская мова', english: 'Belarusian' },
        bg: { locale: locales.bg, native: 'български език', english: 'Bulgarian' },
        bn: { locale: locales.bn, native: 'বাংলা', english: 'Bengali' },
        bs: { locale: locales.bs, native: 'bosanski jezik', english: 'Bosnian' },
        ca: { locale: locales.ca, native: 'català, valencià', english: 'Catalan, Valencian' },
        cs: { locale: locales.cs, native: 'čeština, český jazyk', english: 'Czech' },
        cy: { locale: locales.cy, native: 'Cymraeg', english: 'Welsh' },
        da: { locale: locales.da, native: 'dansk', english: 'Danish' },
        de: { locale: locales.de, native: 'Deutsch', english: 'German' },
        el: { locale: locales.el, native: 'ελληνικά', english: 'Modern Greek' },
        en: { locale: locales.enUS, native: 'English', english: '' },
        es: { locale: locales.es, native: 'Español', english: 'Spanish, Castilian' },
        et: { locale: locales.et, native: 'eesti, eesti keel', english: 'Estonian' },
        eu: { locale: locales.eu, native: 'euskara, euskera', english: 'Basque' },
        fa: { locale: locales.faIR, native: 'فارسی', english: 'Persian' },
        fi: { locale: locales.fi, native: 'suomi, suomen kieli', english: 'Finnish' },
        fr: { locale: locales.fr, native: 'français, langue française', english: 'French' },
        gl: { locale: locales.gl, native: 'Galego', english: 'Galician' },
        he: { locale: locales.he, native: 'עברית', english: 'Hebrew' },
        hi: { locale: locales.hi, native: 'हिन्दी, हिंदी', english: 'Hindi' },
        hr: { locale: locales.hr, native: 'hrvatski jezik', english: 'Croatian' },
        hu: { locale: locales.hu, native: 'magyar', english: 'Hungarian' },
        hy: { locale: locales.hy, native: 'Հայերեն', english: 'Armenian' },
        id: { locale: locales.id, native: 'Bahasa Indonesia', english: 'Indonesian' },
        is: { locale: locales.is, native: 'Íslenska', english: 'Icelandic' },
        it: { locale: locales.it, native: 'Italiano', english: 'Italian' },
        ja: { locale: locales.ja, native: '日本語 (にほんご)', english: 'Japanese' },
        ka: { locale: locales.ka, native: 'ქართული', english: 'Georgian' },
        kk: { locale: locales.kk, native: 'қазақ тілі', english: 'Kazakh' },
        ko: { locale: locales.ko, native: '한국어', english: 'Korean' },
        lt: { locale: locales.lt, native: 'lietuvių kalba', english: 'Lithuanian' },
        lv: { locale: locales.lv, native: 'latviešu valoda', english: 'Latvian' },
        mk: { locale: locales.mk, native: 'македонски јазик', english: 'Macedonian' },
        mn: { locale: locales.mn, native: 'Монгол хэл', english: 'Mongolian' },
        ms: { locale: locales.ms, native: 'Bahasa Melayu, بهاس ملايو', english: 'Malay' },
        nl: { locale: locales.nl, native: 'Nederlands, Vlaams', english: 'Dutch, Flemish' },
        pl: { locale: locales.pl, native: 'język polski', english: 'Polish' },
        pt: { locale: locales.pt, native: 'Português', english: 'Portuguese' },
        ro: { locale: locales.ro, native: 'Română', english: 'Romanian, Moldavian, Moldovan' },
        ru: { locale: locales.ru, native: 'русский', english: 'Russian' },
        sk: { locale: locales.sk, native: 'Slovenčina, Slovenský Jazyk', english: 'Slovak' },
        sl: { locale: locales.sl, native: 'Slovenski Jezik, Slovenščina', english: 'Slovenian' },
        sq: { locale: locales.sq, native: 'Shqip', english: 'Albanian' },
        sr: { locale: locales.sr, native: 'српски језик', english: 'Serbian' },
        sv: { locale: locales.sv, native: 'Svenska', english: 'Swedish' },
        ta: { locale: locales.ta, native: 'தமிழ்', english: 'Tamil' },
        th: { locale: locales.th, native: 'ไทย', english: 'Thai' },
        tr: { locale: locales.tr, native: 'Türkçe', english: 'Turkish' },
        ug: { locale: locales.ug, native: 'ئۇيغۇر تىلى', english: 'Uyghur' },
        uk: { locale: locales.uk, native: 'Українська', english: 'Ukrainian' },
        uz: { locale: locales.uz, native: 'Oʻzbek, Ўзбек, أۇزبېك', english: 'Uzbek' },
        vi: { locale: locales.vi, native: 'Tiếng Việt', english: 'Vietnamese' },
        zh: { locale: locales.zhCN, native: '中文 (Zhōngwén), 汉语, 漢語', english: 'Chinese (Simplified)' },
    };

const holidayLangs = [
    {
        "code": "af",
        "name": "Afrikaans"
    },
    {
        "code": "am",
        "name": "Amharic"
    },
    {
        "code": "ar",
        "name": "Arabic"
    },
    {
        "code": "az",
        "name": "Azerbaijani"
    },
    {
        "code": "be",
        "name": "Belarusian"
    },
    {
        "code": "bg",
        "name": "Bulgarian"
    },
    {
        "code": "bn",
        "name": "Bengali"
    },
    {
        "code": "bs",
        "name": "Bosnian"
    },
    {
        "code": "ca",
        "name": "Catalan, Valencian"
    },
    {
        "code": "ceb",
        "name": "Cebuano"
    },
    {
        "code": "co",
        "name": "Corsican"
    },
    {
        "code": "cs",
        "name": "Czech"
    },
    {
        "code": "cy",
        "name": "Welsh"
    },
    {
        "code": "da",
        "name": "Danish"
    },
    {
        "code": "de",
        "name": "German"
    },
    {
        "code": "el",
        "name": "Modern Greek"
    },
    {
        "code": "en",
        "name": "English"
    },
    {
        "code": "eo",
        "name": "Esperanto"
    },
    {
        "code": "es",
        "name": "Spanish, Castilian"
    },
    {
        "code": "et",
        "name": "Estonian"
    },
    {
        "code": "eu",
        "name": "Basque"
    },
    {
        "code": "fa",
        "name": "Persian"
    },
    {
        "code": "fi",
        "name": "Finnish"
    },
    {
        "code": "fr",
        "name": "French"
    },
    {
        "code": "fy",
        "name": "Western Frisian"
    },
    {
        "code": "ga",
        "name": "Irish"
    },
    {
        "code": "gd",
        "name": "Gaelic, Scottish Gaelic"
    },
    {
        "code": "gl",
        "name": "Galician"
    },
    {
        "code": "gu",
        "name": "Gujarati"
    },
    {
        "code": "ha",
        "name": "Hausa"
    },
    {
        "code": "haw",
        "name": "Hawaiian"
    },
    {
        "code": "he",
        "name": "Hebrew"
    },
    {
        "code": "hi",
        "name": "Hindi"
    },
    {
        "code": "hmn",
        "name": "Hmong"
    },
    {
        "code": "hr",
        "name": "Croatian"
    },
    {
        "code": "ht",
        "name": "Haitian, Haitian Creole"
    },
    {
        "code": "hu",
        "name": "Hungarian"
    },
    {
        "code": "hy",
        "name": "Armenian"
    },
    {
        "code": "id",
        "name": "Indonesian"
    },
    {
        "code": "ig",
        "name": "Igbo"
    },
    {
        "code": "is",
        "name": "Icelandic"
    },
    {
        "code": "it",
        "name": "Italian"
    },
    {
        "code": "ja",
        "name": "Japanese"
    },
    {
        "code": "jw",
        "name": "Javanese"
    },
    {
        "code": "ka",
        "name": "Georgian"
    },
    {
        "code": "kk",
        "name": "Kazakh"
    },
    {
        "code": "km",
        "name": "Central Khmer"
    },
    {
        "code": "kn",
        "name": "Kannada"
    },
    {
        "code": "ko",
        "name": "Korean"
    },
    {
        "code": "ku",
        "name": "Kurdish"
    },
    {
        "code": "ky",
        "name": "Kirghiz, Kyrgyz"
    },
    {
        "code": "la",
        "name": "Latin"
    },
    {
        "code": "lb",
        "name": "Luxembourgish, Letzeburgesch"
    },
    {
        "code": "lo",
        "name": "Lao"
    },
    {
        "code": "lt",
        "name": "Lithuanian"
    },
    {
        "code": "lv",
        "name": "Latvian"
    },
    {
        "code": "mg",
        "name": "Malagasy"
    },
    {
        "code": "mi",
        "name": "Maori"
    },
    {
        "code": "mk",
        "name": "Macedonian"
    },
    {
        "code": "ml",
        "name": "Malayalam"
    },
    {
        "code": "mn",
        "name": "Mongolian"
    },
    {
        "code": "mr",
        "name": "Marathi"
    },
    {
        "code": "ms",
        "name": "Malay"
    },
    {
        "code": "mt",
        "name": "Maltese"
    },
    {
        "code": "my",
        "name": "Burmese, Myanmar"
    },
    {
        "code": "ne",
        "name": "Nepali"
    },
    {
        "code": "nl",
        "name": "Dutch, Flemish"
    },
    {
        "code": "no",
        "name": "Norwegian"
    },
    {
        "code": "ny",
        "name": "Chichewa, Chewa, Nyanja"
    },
    {
        "code": "or",
        "name": "Odia"
    },
    {
        "code": "pa",
        "name": "Punjabi, Panjabi"
    },
    {
        "code": "pl",
        "name": "Polish"
    },
    {
        "code": "ps",
        "name": "Pashto, Pushto"
    },
    {
        "code": "pt",
        "name": "Portuguese"
    },
    {
        "code": "ro",
        "name": "Romanian, Moldavian, Moldovan"
    },
    {
        "code": "ru",
        "name": "Russian"
    },
    {
        "code": "rw",
        "name": "Kinyarwanda"
    },
    {
        "code": "sd",
        "name": "Sindhi"
    },
    {
        "code": "si",
        "name": "Sinhala, Sinhalese"
    },
    {
        "code": "sk",
        "name": "Slovak"
    },
    {
        "code": "sl",
        "name": "Slovenian"
    },
    {
        "code": "sm",
        "name": "Samoan"
    },
    {
        "code": "sn",
        "name": "Shona"
    },
    {
        "code": "so",
        "name": "Somali"
    },
    {
        "code": "sq",
        "name": "Albanian"
    },
    {
        "code": "sr",
        "name": "Serbian"
    },
    {
        "code": "st",
        "name": "South Sesotho"
    },
    {
        "code": "su",
        "name": "Sundanese"
    },
    {
        "code": "sv",
        "name": "Swedish"
    },
    {
        "code": "sw",
        "name": "Swahili"
    },
    {
        "code": "ta",
        "name": "Tamil"
    },
    {
        "code": "te",
        "name": "Telugu"
    },
    {
        "code": "tg",
        "name": "Tajik"
    },
    {
        "code": "th",
        "name": "Thai"
    },
    {
        "code": "tk",
        "name": "Turkmen"
    },
    {
        "code": "tl",
        "name": "Tagalog"
    },
    {
        "code": "tr",
        "name": "Turkish"
    },
    {
        "code": "tt",
        "name": "Tatar"
    },
    {
        "code": "ug",
        "name": "Uyghur"
    },
    {
        "code": "uk",
        "name": "Ukrainian"
    },
    {
        "code": "ur",
        "name": "Urdu"
    },
    {
        "code": "uz",
        "name": "Uzbek"
    },
    {
        "code": "vi",
        "name": "Vietnamese"
    },
    {
        "code": "xh",
        "name": "Xhosa"
    },
    {
        "code": "yi",
        "name": "Yiddish"
    },
    {
        "code": "yo",
        "name": "Yoruba"
    },
    {
        "code": "zh",
        "name": "Chinese (Simplified)"
    },
    {
        "code": "zh-TW",
        "name": "Chinese (Traditional)"
    },
    {
        "code": "zu",
        "name": "Zulu"
    }
]

export default appLanguages;

export { holidayLangs };